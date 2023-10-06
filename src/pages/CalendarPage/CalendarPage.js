import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentPage } from 'redux/actions';
import css from './CalendarPage.module.css';

import { CalendarTitle } from 'components/Calendar/СalendarTitle/СalendarTitle';
import { СalendarTable } from 'components/Calendar/СalendarTable/СalendarTable';

const CalendarPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(currentPage('Calendar'));
  }, [dispatch]);

  return (
    <div className={css.pageWrapper}>
      <div className={css.titleWrapper}>
        <CalendarTitle />
      </div>
      <div className={css.calendarWrapper}>
        <СalendarTable />
      </div>
    </div>
  );
};

export default CalendarPage;
