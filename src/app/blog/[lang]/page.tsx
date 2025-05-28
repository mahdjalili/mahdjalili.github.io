import BlurFade from '@/components/magicui/blur-fade';
import { getBlogPosts } from '@/data/blog';
import {
  defaultLanguage,
  isValidLanguage,
  languages
} from '@/config/languages';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Blog',
  description: 'My thoughts on software development, life, and more.'
};

const BLUR_FADE_DELAY = 0.04;

type BlogPost = {
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    image?: string;
    tags?: string[];
    series?: string;
    seriesOrder?: number;
    language?: string;
    draft?: boolean;
  };
  slug: string;
  source: string;
};

export async function generateStaticParams() {
  return languages.map((lang) => ({
    lang: lang.code
  }));
}

type Props = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function BlogPage({ params }: Props) {
  const { lang } = await params;

  if (!isValidLanguage(lang)) {
    notFound();
  }

  const posts = (await getBlogPosts(lang)) as BlogPost[];

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-medium text-2xl tracking-tighter">blog</h1>
        </div>
      </BlurFade>
      {posts.length > 0 ? (
        posts
          .filter((post) => post.metadata.draft !== true)
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post, id) => (
            <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={post.slug}>
              <Link
                className="flex flex-col space-y-1 mb-4"
                href={`/blog/${lang}/${post.slug}`}
              >
                <div className="w-full flex flex-col">
                  <p className="tracking-tight">{post.metadata.title}</p>
                  <p className="h-6 text-xs text-muted-foreground">
                    {post.metadata.publishedAt}
                  </p>
                </div>
              </Link>
            </BlurFade>
          ))
      ) : (
        <p className="text-neutral-500 dark:text-neutral-400">
          No posts available in this language.
        </p>
      )}
    </section>
  );
}
