import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import Loader from 'components/Loader/Loader';
import { routes } from '../configs/routes';

const MainLayout = lazy(() => import('components/User/MainLayout/MainLayout'));
const Page404 = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {Object.values(routes.restricted).map(route => (
          <Route
            key={route.key}
            path={route.path}
            element={
              <RestrictedRoute
                redirectTo={route.redirectTo}
                component={route.component}
              /> // /calendar/month/
            }
          />
        ))}
        <Route path="/" element={<MainLayout />}>
          {Object.values(routes.private).map(route => (
            <Route
              key={route.key}
              path={route.path}
              element={
                <PrivateRoute
                  redirectTo={route.redirectTo}
                  component={route.component}
                />
              }
            />
          ))}
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Suspense>
  );
};
