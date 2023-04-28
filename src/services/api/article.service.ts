import { newsApiKey } from '@/lib/config';
import { type GetArticlesProps, GetArticleResponse } from '@/types/article';
import { api } from '@/lib/api';

export const getArticles = async (
  params: GetArticlesProps
): Promise<GetArticleResponse> => {
  const { search, page } = params;
  const { data } = await api.get<GetArticleResponse>(
    `https://newsdata.io/api/1/news?q=${search}&page=${page}&apiKey=${newsApiKey}`
  );
  return data;
};
