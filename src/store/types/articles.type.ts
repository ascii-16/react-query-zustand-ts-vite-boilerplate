import type { Nullable } from '@/types/index';

export interface InitialState {
  articles: Nullable<Article[]>;
}

export interface Article {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface Source {
  id?: null;
  name: string;
}

export interface GetArticlesProps {
  search?: string;
  page: number;
  pageSize: number;
}
