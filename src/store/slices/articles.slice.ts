import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { GetArticlesProps, InitialState } from '../types/articles.type';

const initialState: InitialState = {
  articles: null,
};

const getArticles = (
  state: InitialState,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _action: PayloadAction<GetArticlesProps>
) => state;

const setArticles = (
  state: InitialState,
  action: PayloadAction<InitialState['articles']>
) => ({
  ...state,
  articles: action.payload,
});

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    getArticles,
    setArticles,
  },
});

export default articlesSlice;
