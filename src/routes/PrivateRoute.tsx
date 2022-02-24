import type { ReactElement } from 'react';
import { Navigate } from 'react-router';
import { useStore } from '../store';

interface Props {
  children: ReactElement;
}

const PrivateRoute: React.FC<Props> = ({ children }) => {
  // Replace with your auth condition
  const { isAuthenticated } = useStore((state) => state);

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
