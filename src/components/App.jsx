import { lazy } from "react";
import { Route, Routes } from 'react-router-dom';
const HomePage = lazy(() => import('../pages/Homepage'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const Account = lazy(() => import('../pages/AccountPage'));
const Calendar = lazy(() => import('../pages/CalendarPage'));
const Statistics = lazy(() => import('../pages/StatisticsPage'));
const Page404 = lazy(() => import('../pages/404'));


export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/account" element={<Account />} />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};