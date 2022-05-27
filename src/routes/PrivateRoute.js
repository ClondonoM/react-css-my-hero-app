import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { AuthContext } from '../auth/authContext';

export const PrivateRoutes = ({ isAuthenticated, element }) => {
  const { user } = useContext(AuthContext);
  const { pathname, search } = useLocation();
  localStorage.setItem('lastPath', pathname + search);

  return isAuthenticated ? element : <Navigate to='/login' />;
};

PrivateRoutes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  element: PropTypes.object.isRequired,
};
