import { useQuery } from 'react-query';
import type { GetArticlesProps } from '@/types/article';
import { getArticles } from '../api/article.service';

export const useArticlesQuery = (params: GetArticlesProps) =>
  useQuery(['getArticles', { params }], async () => {
    const res = await getArticles(params);
    return res;
  });
