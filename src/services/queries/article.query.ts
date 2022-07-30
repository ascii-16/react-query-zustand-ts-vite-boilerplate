import { useQuery } from '@tanstack/react-query';
import type { GetArticleResponse, GetArticlesProps } from '@/types/article';
import { getArticles } from '../api/article.service';

export const useArticlesQuery = (params: GetArticlesProps) =>
  useQuery<GetArticleResponse>(['getArticles', { params }], async () => {
    const res = await getArticles(params);
    return res;
  });
