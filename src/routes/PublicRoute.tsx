import type { ReactElement } from 'react';
import { Navigate } from 'react-router';
import { useStore } from '../store';

interface Props {
  children: ReactElement;
}

const PublicRoute: React.FC<Props> = ({ children }) => {
  // Replace with your auth condition
  const { isAuthenticated } = useStore((state) => state);

  return isAuthenticated ? <Navigate to="/articles" /> : children;
};

export default PublicRoute;
