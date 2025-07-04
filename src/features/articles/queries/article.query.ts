import { useQuery } from '@tanstack/react-query';
import { type GetArticlesProps } from '../types/article';
import { getArticles } from '../api/article.service';

export const useArticlesQuery = (params: GetArticlesProps) => {
  return useQuery({
    queryKey: ['getArticles', params],
    queryFn: async () => {
      const res = await getArticles(params);
      return res;
    },
  });
};
