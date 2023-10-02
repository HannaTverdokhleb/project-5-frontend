// import MainLayout from 'components/User/MainLayout/MainLayout';
// import Sidebar from 'components/User/Sidebar/Sidebar';
// import UserCalendar from 'components/User/UserCalendar/UserCalendar';
// import style from './CalendarPage.module.css';
import Header from 'components/User/Header/Header';
import { useDispatch } from 'react-redux';
import { currentPage } from 'redux/actions';
// import { Suspense } from 'react';


const CalendarPage = () => {
  const dispatch = useDispatch();
  dispatch(currentPage('Calendar'));
  return (
    // <>
    //   <MainLayout>
    //     <Sidebar />
    //     <div className={style.innerWrapper}>
    //       {/* <Suspense fallback={'Wait ...'}> */}
    //         <Header />
    //         <UserCalendar />
    //       {/* </Suspense> */}
    //     </div>
    //   </MainLayout>
    // </>
    <div>
      <Header />
      Calendar
    </div>
  );
};

export default CalendarPage;
