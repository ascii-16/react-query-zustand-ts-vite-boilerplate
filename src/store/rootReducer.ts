import { combineReducers } from 'redux';
import articlesSlice from './slices/articles.slice';
import authSlice from './slices/auth.slice';
import loaderSlice from './slices/loader.slice';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  loader: loaderSlice.reducer,
  articles: articlesSlice.reducer,
});

export default rootReducer;
