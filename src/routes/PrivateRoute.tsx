import type { ReactElement } from 'react';
import { Navigate } from 'react-router';
import { useAppSelector } from '@/hooks/useRedux';

interface Props {
  children: ReactElement;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  // Replace with your auth condition
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
