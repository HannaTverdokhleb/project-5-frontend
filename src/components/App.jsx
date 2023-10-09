import { lazy, Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import Loader from 'components/Loader/Loader';
import { routes } from '../configs/routes';
import { useDispatch } from 'react-redux';
import { logOut, refreshUser } from '../redux/Auth/operations';
import { setUserTheme } from './User/ThemeToggler/ThemeToggler';

const MainLayout = lazy(() => import('components/User/MainLayout/MainLayout'));
const Page404 = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

function GlobalWrapper() {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    dispatch(refreshUser())
      .then(response => {
          const { theme } = response.payload;
          theme && setUserTheme(theme);

          setIsLoading(false);
          setIsLoggedIn(true);
        },
      )
      .catch(() => dispatch(logOut()));
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Routes>
      {Object.values(routes.restricted).map(route =>
        <Route
          key={route.key}
          path={route.path}
          element={
            <RestrictedRoute
              redirectTo={route.redirectTo}
              component={route.component}
            /> // /calendar/month/
          }
        />,
      )}
      {isLoggedIn && <Route path='/' element={<MainLayout />}>
        {Object.values(routes.private).map(route =>
          <Route
            key={route.key}
            path={route.path}
            element={
              <PrivateRoute
                redirectTo={route.redirectTo}
                component={route.component}
              />
            }
          />,
        )}
      </Route>}
      <Route path='*' element={<Page404 />} />
    </Routes>
  );
}

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
        <GlobalWrapper />
    </Suspense>
  );
};
