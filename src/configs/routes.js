import { lazy } from 'react';

const Homepage = lazy(() => import('../pages/HomePage/Homepage'));
const LoginPage = lazy(() => import('../pages/LoginPage/Login'));
const GoogleLoginPage = lazy(() => import('../pages/LoginPage/GoogleLogin'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/Register'));
const AccountPage = lazy(() => import('../pages/AccountPage/AccountPage'));
const CalendarPage = lazy(() => import('../pages/CalendarPage/CalendarPage'));
const StatisticsPage = lazy(() => import('../pages/StatisticsPage/StatisticsPage'));

export const ROUTE_PREFIX = '/project-5-frontend';
const RESTRICTED_REDIRECT = '/calendar'
const PRIVATE_REDIRECT = '/login'

export const routes = {
  restricted: {
    home: {
      path: '/',
      component: <Homepage />,
      redirectTo: RESTRICTED_REDIRECT,
      key: 'home-page',
    },
    login: {
      path: '/login',
      component: <LoginPage />,
      redirectTo: RESTRICTED_REDIRECT,
      key: 'login-page',
    },
    google_redirect: {
      path: '/google-redirect/:token',
      component: <GoogleLoginPage />,
      redirectTo: RESTRICTED_REDIRECT,
      key: 'google-login-page',
    },
    register: {
      path: '/register',
      component: <RegisterPage />,
      redirectTo: RESTRICTED_REDIRECT,
      key: 'register-page',
    },
  },
  private: {
    account: {
      path: '/account',
      component: <AccountPage />,
      redirectTo: PRIVATE_REDIRECT,
      key: 'account-page',
    },
    month: {
      path: '/calendar/month/:month', // YYYY-MM
      component: <CalendarPage />,
      redirectTo: PRIVATE_REDIRECT,
      key: 'month-page',
    },
    day: {
      path: '/calendar/day/:day', // YYYY-MM-DD
      component: <CalendarPage />,
      redirectTo: PRIVATE_REDIRECT,
      key: 'day-page',
    },
    calendar: {
      path: '/calendar',
      component: <CalendarPage />,
      redirectTo: PRIVATE_REDIRECT,
      key: 'calendar-page',
    },
    statistics: {
      path: '/statistics',
      component: <StatisticsPage />,
      redirectTo: PRIVATE_REDIRECT,
      key: 'statistics-page',
    },
  },
};

