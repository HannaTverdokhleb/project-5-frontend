import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Route, Routes } from 'react-router-dom';
import { refreshUser } from 'redux/Auth/operations';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import Loader from 'components/Loader/Loader';
const MainLayout = lazy(() => import('components/User/MainLayout/MainLayout'));
const Homepage = lazy(() => import('../pages/HomePage/Homepage'));
const LoginPage = lazy(() => import('../pages/LoginPage/Login'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/Register'));
const AccountPage = lazy(() => import('../pages/AccountPage/AccountPage'));
const CalendarPage = lazy(() => import('../pages/CalendarPage/CalendarPage'));
const StatisticsPage = lazy(() => import('../pages/StatisticsPage/StatisticsPage'));
const Page404 = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<RestrictedRoute redirectTo="/calendar" component={<Homepage />} />} />
        <Route path="/login" element={
            <RestrictedRoute redirectTo="/calendar" component={<LoginPage />} /> // '/calendar/month/
          } /> 
        <Route path="/register" element={
            <RestrictedRoute redirectTo="/calendar" component={<RegisterPage />} /> // '/calendar/month/
          } />
        <Route path="/" element={<MainLayout />}>
          <Route path="/account" element={
            <PrivateRoute redirectTo="/login" component={<AccountPage />} />
          } />
          <Route path="/calendar" element={
              <PrivateRoute redirectTo="/login" component={<CalendarPage />} />
            } />
          <Route path="/statistics" element={
            <PrivateRoute redirectTo="/login" component={<StatisticsPage />} />
          } />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Suspense>
  );
};
