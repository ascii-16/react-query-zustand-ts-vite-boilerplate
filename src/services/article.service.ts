import axios from 'axios';
import { newsApiKey } from '@/lib/config';
import { GeneratorResponse } from '@/types/api';
import { GetArticleResponse } from '@/types/article';
import type { GetArticlesProps } from '@/store/types/articles.type';

export function* getArticles(
  params: GetArticlesProps
): GeneratorResponse<GetArticleResponse> {
  const { search, page, pageSize } = params;
  const { data } = yield axios.get(
    `https://newsapi.org/v2/everything?q=${search}&page=${page}&pageSize=${pageSize}&apiKey=${newsApiKey}`
  );
  return data;
}
