import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Markdown from 'react-markdown';

interface BlogCardProps {
  title: string;
  summary: string;
  publishedAt: string;
  slug: string;
  lang: string;
  tags?: string[];
  className?: string;
}

export function BlogCard({
  title,
  summary,
  publishedAt,
  slug,
  lang,
  tags,
  className
}: BlogCardProps) {
  return (
    <Card
      className={cn(
        'flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full p-1',
        className
      )}
    >
      <Link
        href={`/blog/${lang}/${slug}`}
        className={cn('block cursor-pointer', className)}
      >
        <CardHeader className="px-2">
          <div className="space-y-1">
            <CardTitle className="mt-1 text-base">{title}</CardTitle>
            <time className="font-sans text-xs">{publishedAt}</time>
            <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
              {summary}
            </Markdown>
          </div>
        </CardHeader>
      </Link>
      <CardContent className="mt-auto flex flex-col px-2 pb-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
