import { type ReactElement } from 'react';
import { Navigate } from 'react-router';
import useAuthStore from '@/store/useAuthStore';

interface Props {
  children: ReactElement;
}

const PublicRoute: React.FC<Props> = ({ children }) => {
  // Replace with your auth condition
  const { isAuthenticated } = useAuthStore((state) => state);

  return isAuthenticated ? <Navigate to="/articles" /> : children;
};

export default PublicRoute;
