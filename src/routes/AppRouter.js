import { useContext } from 'react';
import { LoginScreen } from '../components/login/LoginScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DashboardRoutes } from './DashboardRoutes';
import { AuthContext } from '../auth/authContext';
import { PrivateRoutes } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path='/login'
            element={
              <PublicRoute>
                <LoginScreen />
              </PublicRoute>
            }
          />

          <Route
            path='/*'
            element={
              <PrivateRoutes
                isAuthenticated={user.logged}
                element={<DashboardRoutes />}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};
