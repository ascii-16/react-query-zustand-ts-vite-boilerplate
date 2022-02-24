import { PayloadAction } from '@reduxjs/toolkit';
import { put, takeEvery } from 'redux-saga/effects';
import type { PutEffect } from 'redux-saga/effects';
import { getArticles } from '@/services/article.service';
import type { VoidGenerator } from '@/types/index';
import type { GetArticleResponse } from '@/types/article';
import type { GeneratorResponse } from '@/types/api';
import { GET_ARTICLES } from '../actions/articles.action';
import articlesSlice from '../slices/articles.slice';
import authSlice from '../slices/auth.slice';
import loaderSlice from '../slices/loader.slice';
import { GetArticlesProps } from '../types/articles.type';

function* getArticlesSaga(
  action: PayloadAction<GetArticlesProps>
): VoidGenerator<
  PutEffect | GeneratorResponse<GetArticleResponse>,
  GetArticleResponse
> {
  try {
    yield put(loaderSlice.actions.startLoadingAction(GET_ARTICLES));
    const res = yield getArticles(action.payload);
    const { articles } = res;
    yield put(articlesSlice.actions.setArticles(articles));
    yield put(authSlice.actions.setIsAuthenticated(true));
  } catch (e) {
    console.log(e);
  } finally {
    yield put(loaderSlice.actions.stopLoadingAction(GET_ARTICLES));
  }
}

export default function* articlesSaga() {
  yield takeEvery(GET_ARTICLES, getArticlesSaga);
}
