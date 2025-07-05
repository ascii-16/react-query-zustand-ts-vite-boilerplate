import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Articles from '@/features/articles/pages';
import Home from '@/features/home/pages';
import PrivateRoute from './private-route';
import PublicRoute from './public-route';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute>
            <Home />
          </PublicRoute>
        }
      />
      <Route
        path="/articles"
        element={
          <PrivateRoute>
            <Articles />
          </PrivateRoute>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default Router;
