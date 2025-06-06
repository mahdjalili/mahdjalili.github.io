import { getBlogPosts, getPost } from '@/data/blog';
import { DATA } from '@/data/resume';
import { formatDate, calculateReadingTime } from '@/lib/utils';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';
import { languages, isValidLanguage, isRtl } from '@/config/languages';
import LanguageSwitcher from '@/components/language-switcher';
import { isDev } from '@/lib/utils';

type BlogPost = {
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
    language?: string;
  };
  slug: string;
  source: string;
};

type Props = {
  params: Promise<{
    slug: string;
    lang: string;
  }>;
};

export async function generateStaticParams() {
  // Get all posts from all languages
  const allPosts = await Promise.all(
    languages.map(async (lang) => {
      const posts = (await getBlogPosts(lang.code)) as BlogPost[];
      return posts.map((post) => ({
        slug: post.slug,
        lang: post.metadata.language || lang.code
      }));
    })
  );

  // Flatten the array
  return allPosts.flat();
}

export async function generateMetadata({
  params
}: Props): Promise<Metadata | undefined> {
  const { slug, lang } = await params;

  // Validate language
  if (!isValidLanguage(lang)) {
    return undefined;
  }

  let post = (await getPost(slug, lang)) as BlogPost | null;

  if (!post) {
    return undefined;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image
  } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${DATA.url}/blog/${lang}/${post.slug}`,
      images: [
        {
          url: ogImage
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage]
    }
  };
}

export default async function Blog({ params }: Props) {
  const { slug, lang } = await params;

  // Validate language
  if (!isValidLanguage(lang)) {
    notFound();
  }

  let post = (await getPost(slug, lang)) as BlogPost | null;

  if (!post) {
    notFound();
  }

  return (
    <section
      id="blog"
      style={isRtl(lang) ? { direction: 'rtl' } : { direction: 'ltr' }}
      dir={isRtl(lang) ? 'rtl' : 'ltr'}
      className="w-full"
    >
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${DATA.url}${post.metadata.image}`
              : `${DATA.url}/og?title=${post.metadata.title}`,
            url: `${DATA.url}/blog/${lang}/${post.slug}`,
            author: {
              '@type': 'Person',
              name: DATA.name
            }
          })
        }}
      />
      <div className="flex">
        {post.metadata.image && (
          <img src={post.metadata.image} alt={post.metadata.title}></img>
        )}
      </div>
      <div className="flex justify-between items-center my-8">
        <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
          {post.metadata.title}
        </h1>
        <LanguageSwitcher currentLang={lang} />
      </div>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <div className="flex justify-center items-center gap-4">
          <Suspense fallback={<p className="h-5" />}>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {formatDate(post.metadata.publishedAt)}
            </p>
          </Suspense>
          <span className="text-sm text-neutral-600 dark:text-neutral-400">
            {calculateReadingTime(post.source)} Min Read
          </span>
        </div>
      </div>

      <article
        className="prose dark:prose-invert max-w-full text-justify"
        dangerouslySetInnerHTML={{ __html: post.source }}
      ></article>
    </section>
  );
}
