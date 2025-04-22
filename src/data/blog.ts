import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { defaultLanguage, isValidLanguage } from '@/config/languages';

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  language?: string;
};

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx');
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkRehype)
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

export async function getPost(slug: string, lang: string = defaultLanguage) {
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

  return {
    source: content,
    metadata: {
      ...metadata,
      language: postLang
    },
    slug
  };
}

async function getAllPosts(dir: string, lang: string = defaultLanguage) {
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

  return Promise.all(
    mdxFiles.map(async (file) => {
      let slug = path.basename(file, path.extname(file));
      const post = await getPost(slug, lang);

      // Skip posts that don't exist
      if (!post) {
        return null;
      }

      return {
        metadata: post.metadata,
        slug,
        source: post.source
      };
    })
  ).then((posts) => posts.filter(Boolean));
}

export async function getBlogPosts(lang: string = defaultLanguage) {
  // Validate the language
  if (!isValidLanguage(lang)) {
    lang = defaultLanguage;
  }

  return getAllPosts(path.join(process.cwd(), 'content'), lang);
}
