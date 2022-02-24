import { applyMiddleware, compose, createStore, StoreEnhancer } from 'redux';
import type { Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const configureStore = (preloadedState: RootState = {} as RootState) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares: Middleware[] = [sagaMiddleware];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }

  const composeEnhancers =
    window?.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const middlewareEnhancer = applyMiddleware(...middlewares);
  // Add enhancers here
  const enhancers = [middlewareEnhancer];
  const composedEnhancers: StoreEnhancer = composeEnhancers(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  sagaMiddleware.run(rootSaga);

  return store;
};

// Preloaded state is used to initialize the store with data possibly from localStorage
const preloadedState = {} as RootState;
const store = configureStore(preloadedState);

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export default store;
