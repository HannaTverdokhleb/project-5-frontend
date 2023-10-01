import Header from 'components/User/Header/Header';
import MainLayout from 'components/User/MainLayout/MainLayout';
import Sidebar from 'components/User/Sidebar/Sidebar';
import UserCalendar from 'components/User/UserCalendar/UserCalendar';
import style from './CalendarPage.module.css';

const CalendarPage = () => {
  return (
    <MainLayout>
      <Sidebar />
      <div className={style.innerWrapper}>
        <Header />
        <UserCalendar />
      </div>
    </MainLayout>
  );
};

export default CalendarPage;
