import {
  type Article,
  type GetArticleResponse,
  type GetArticlesProps,
} from '../types/article';

export async function getArticles(
  params: GetArticlesProps
): Promise<GetArticleResponse> {
  const { search = '', page = 1 } = params;

  // Stimulating an api call. replace with actuall call
  await new Promise((resolve) => setTimeout(resolve, 500));

  const generateMockArticle = (i: number): Article => ({
    title: `Sample Article ${i + 1} ${search && `- ${search}`}`,
    link: `https://example.com/article-${i + 1}`,
    pubDate: new Date().toISOString(),
    creator: [`Author ${i + 1}`],
    description: `This is a mock description for article ${i + 1}.`,
    content: `Full content of article ${i + 1}.`,
    source_id: 'mock-source',
    country: ['us'],
    category: ['technology'],
    keywords: ['mock'],
    image_url: 'https://placehold.co/600x400',
  });

  const results = Array.from({ length: 9 }, (_, i) =>
    generateMockArticle((page - 1) * 10 + i)
  );

  return {
    status: 'success',
    totalResults: 100,
    results,
    nextPage: page < 10 ? page + 1 : undefined,
  };
}
