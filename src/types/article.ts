export interface GetArticleResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}

export interface GetArticlesProps {
  search?: string;
  page: number;
  pageSize: number;
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