import type { ReactElement } from 'react';
import { Navigate } from 'react-router';
import { useAppSelector } from '@/hooks/useRedux';

interface Props {
  children: ReactElement;
}

const PublicRoute: React.FC<Props> = ({ children }) => {
  // Replace with your auth condition
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  return isAuthenticated ? <Navigate to="/articles" /> : children;
};

export default PublicRoute;
