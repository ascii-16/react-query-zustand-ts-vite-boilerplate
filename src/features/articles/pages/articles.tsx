import { useMemo, useState } from 'react';
import useDebounce from '@/hooks/use-debounce';
import { formatDate } from '@/lib/helper';
import { useGetArticlesQuery } from '../hooks/use-get-articles-query';
import { GetArticlesProps, type Article } from '../types/article';

export interface ArticleListProps {
  articles: Article[];
}

function ArticleList({ articles }: ArticleListProps) {
  if (!articles?.length) {
    return <div className="text-muted-foreground">No articles found.</div>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <div
          key={article.link}
          className="rounded-md border bg-card text-card-foreground shadow-sm overflow-hidden"
        >
          <a href={article.link} target="_blank" rel="noreferrer">
            {article.image_url ? (
              <img
                alt={article.title}
                className="w-full h-48 object-cover"
                src={article.image_url}
              />
            ) : (
              <div className="flex h-48 items-center justify-center bg-muted text-muted-foreground">
                No Image
              </div>
            )}
          </a>

          <div className="p-4 space-y-2">
            <h2 className="text-lg font-semibold leading-snug line-clamp-2">
              <a
                href={article.link}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                {article.title}
              </a>
            </h2>

            <p className="text-sm text-muted-foreground">
              {formatDate(article.pubDate)}
            </p>
          </div>

          <div className="flex items-center justify-between p-4 pt-0">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <img
                src="https://picsum.photos/32/32"
                alt="Author"
                className="h-8 w-8 rounded-full"
              />
              Author Name
            </div>
            <button
              type="button"
              className="text-muted-foreground hover:text-red-500"
            >
              <i className="fa fa-heart" aria-hidden="true"></i>
              <span className="sr-only">Like</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

function ArticlesPage() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 500);
  const filter = useMemo<GetArticlesProps>(
    () => ({
      page: 1,
      pageSize: 10,
      search: debouncedSearchTerm?.length ? debouncedSearchTerm : undefined,
    }),
    [debouncedSearchTerm]
  );
  const { isLoading, data } = useGetArticlesQuery(filter);

  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <div className="flex justify-center w-full">
        <div className="mb-3 xl:w-[40%]">
          <div className="input-group relative flex flex-wrap items-stretch w-full mb-4">
            <input
              type="search"
              className="form-control relative flex-auto min-w-0 block w-auto mr-2 px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Enter search term"
              aria-label="Search"
              aria-describedby="button-addon3"
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-1 lg:-mx-4 justify-center">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <ArticleList articles={data?.results ?? []} />
        )}
      </div>
    </div>
  );
}

export default ArticlesPage;
