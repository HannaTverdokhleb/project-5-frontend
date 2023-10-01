import { Header } from 'components/User/Header/Header';
import MainLayout from 'components/User/MainLayout/MainLayout';
import Sidebar from 'components/User/Sidebar/Sidebar';
import UserCalendar from 'components/User/UserCalendar/UserCalendar';
import style from './CalendarPage.module.css';

import { useDispatch } from 'react-redux';
import { currentPage } from 'redux/actions';

const CalendarPage = () => {
  const dispatch = useDispatch();
  dispatch(currentPage('Calendar'));
  return (
    <MainLayout>
      <Sidebar />
      <Header />
      <div className={style.innerWrapper}>
        <UserCalendar />
      </div>
    </MainLayout>
  );
};

export default CalendarPage;
