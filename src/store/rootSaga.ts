import { all } from 'redux-saga/effects';
import authSaga from './sagas/auth.saga';
import articlesSaga from './sagas/articles.saga';

export default function* rootSaga() {
  yield all([authSaga(), articlesSaga()]);
}
