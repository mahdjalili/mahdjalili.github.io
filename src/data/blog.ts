import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeRaw from 'rehype-raw';
import { unified } from 'unified';
import { defaultLanguage, isValidLanguage } from '@/config/languages';

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypePrettyCode, {
      // https://rehype-pretty.pages.dev/#usage
      theme: {
        light: 'min-light',
        dark: 'min-dark'
      },
      keepBackground: false
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export type BlogPost = {
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
    tags?: string[];
    series?: string;
    seriesOrder?: number;
    language: any;
    draft?: boolean;
  };
  slug: string;
  source: string;
};

export async function getPost(
  slug: string,
  lang: string = defaultLanguage
): Promise<BlogPost | null> {
  // Validate language
  if (!isValidLanguage(lang)) {
    lang = defaultLanguage;
  }

  // Try to find a language-specific post
  let filePath = path.join('content', lang, `${slug}.mdx`);

  // If the file doesn't exist, return null
  if (!fs.existsSync(filePath)) {
    return null;
  }

  let source = fs.readFileSync(filePath, 'utf-8');
  const { content: rawContent, data: metadata } = matter(source);
  const content = await markdownToHTML(rawContent);

  // Ensure the language is set in the metadata
  const postLang = metadata.language || lang;

  // Validate required metadata fields
  if (!metadata.title || !metadata.publishedAt || !metadata.summary) {
    return null;
  }

  return {
    source: content,
    metadata: {
      title: metadata.title,
      publishedAt: metadata.publishedAt,
      summary: metadata.summary,
      image: metadata.image,
      tags: metadata.tags,
      series: metadata.series,
      seriesOrder: metadata.seriesOrder,
      language: postLang,
      draft: metadata.draft
    },
    slug
  };
}

async function getAllPosts(
  dir: string,
  lang: string = defaultLanguage
): Promise<BlogPost[]> {
  // Validate language
  if (!isValidLanguage(lang)) {
    lang = defaultLanguage;
  }

  // Check if there's a language-specific directory
  const langDir = path.join(dir, lang);
  let mdxFiles: string[] = [];

  if (fs.existsSync(langDir)) {
    mdxFiles = getMDXFiles(langDir);
  } else {
    // If the language directory doesn't exist, return an empty array
    return [];
  }

  const posts = await Promise.all(
    mdxFiles.map(async (file) => {
      let slug = path.basename(file, path.extname(file));
      return getPost(slug, lang);
    })
  );

  // Filter out null values and ensure type safety
  return posts.filter((post): post is BlogPost => post !== null);
}

export async function getBlogPosts(lang: string = defaultLanguage) {
  if (!isValidLanguage(lang)) {
    lang = defaultLanguage;
  }

  return getAllPosts(path.join(process.cwd(), 'content'), lang);
}
