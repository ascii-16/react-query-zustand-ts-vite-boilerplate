import { useEffect, useState } from 'react';
import articlesSlice from '@/store/slices/articles.slice';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { GET_ARTICLES } from '@/store/actions/articles.action';
import useLoading from '@/hooks/useLoading';
import useDebounce from '@/hooks/useDebounce';
import { formatDate } from '@/lib/helper';

const Article = () => {
  const { articles } = useAppSelector((state) => state.articles);

  if (!articles?.length) {
    return <div>No articles found</div>;
  }

  return (
    <>
      {articles?.map((article) => (
        <div
          key={article.url}
          className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
        >
          <article className="overflow-hidden rounded-lg shadow-lg">
            <a href={article.url} target="_blank" rel="noreferrer">
              <img
                alt="Placeholder"
                className="block h-auto w-full"
                src={article.urlToImage}
              />
            </a>

            <header className="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 className="text-lg">
                <a
                  className="no-underline hover:underline text-black"
                  href={article.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {article.title}
                </a>
              </h1>
              <p className="text-grey-darker text-sm">
                {formatDate(article.publishedAt)}
              </p>
            </header>

            <footer className="flex items-center justify-between leading-none p-2 md:p-4">
              <a
                className="flex items-center no-underline hover:underline text-black"
                href="#"
              >
                <img
                  alt="Placeholder"
                  className="block rounded-full"
                  src="https://picsum.photos/32/32/?random"
                />
                <p className="ml-2 text-sm">Author Name</p>
              </a>
              <a
                className="no-underline text-grey-darker hover:text-red-dark"
                href="#"
              >
                <span className="hidden">Like</span>
                <i className="fa fa-heart"></i>
              </a>
            </footer>
          </article>
        </div>
      ))}
    </>
  );
};

const Articles = () => {
  const dispatch = useAppDispatch();
  const isLoading = useLoading(GET_ARTICLES);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const debouncedSearchTerm = useDebounce<string>(searchTerm, 500);

  useEffect(() => {
    dispatch(articlesSlice.actions.getArticles({ page: 1, pageSize: 10 }));
  }, []);

  useEffect(() => {
    if (debouncedSearchTerm.length) {
      dispatch(
        articlesSlice.actions.getArticles({
          page: 1,
          pageSize: 10,
          search: debouncedSearchTerm,
        })
      );
    } else {
      dispatch(
        articlesSlice.actions.getArticles({
          page: 1,
          pageSize: 10,
        })
      );
    }
  }, [debouncedSearchTerm]);

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
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {isLoading ? <div>Loading...</div> : <Article />}
      </div>
    </div>
  );
};

export default Articles;
