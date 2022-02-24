import axios from 'axios';
import { newsApiKey } from '@/lib/config';
import type { GetArticlesProps, GetArticleResponse } from '@/types/article';

export const getArticles = async (
  params: GetArticlesProps
): Promise<GetArticleResponse> => {
  const { search, page, pageSize } = params;
  const { data } = await axios.get(
    `https://newsapi.org/v2/everything?q=${search}&page=${page}&pageSize=${pageSize}&apiKey=${newsApiKey}`
  );
  return data;
};
