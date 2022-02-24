import { Article } from '@/store/types/articles.type';

export interface GetArticleResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}
