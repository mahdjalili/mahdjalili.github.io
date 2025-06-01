export type BlogPost = {
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
