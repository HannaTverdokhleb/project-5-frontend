// import Header from 'components/User/Header/Header';
// import MainLayout from 'components/User/MainLayout/MainLayout';
// import Sidebar from 'components/User/Sidebar/Sidebar';
// import UserCalendar from 'components/User/UserCalendar/UserCalendar';
// import style from './CalendarPage.module.css';
import { useDispatch } from 'react-redux';
import { currentPage } from 'redux/actions';
const CalendarPage = () => {
  const dispatch = useDispatch();
  dispatch(currentPage('User Profile'));
  return (
    // <MainLayout>
    //   <Sidebar />
    //   <div className={style.innerWrapper}>
    //     <Header />
    //     <UserCalendar />
    //   </div>
    // </MainLayout>
    <div>Calendar</div>
  );
};

export default CalendarPage;
