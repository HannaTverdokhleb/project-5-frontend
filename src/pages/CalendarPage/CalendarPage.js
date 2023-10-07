import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentPage } from 'redux/actions';
import css from './CalendarPage.module.css';

import { CalendarTitle } from 'components/Calendar/СalendarTitle/СalendarTitle';
import { CalendarTable } from 'components/Calendar/СalendarTable/СalendarTable';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import { routes } from '../../configs/routes';

function ChosenDay({ day }) {
  const navigate = useNavigate();
  const isValidFormat = /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/.test(day);

  useEffect(() => {
    !isValidFormat && navigate(`${routes.private.calendar.path}`);
  }, [isValidFormat, navigate]);

  // TODO: return your component
  return (
    <div style={{ color: 'red' }}>{day}</div>
  );
}

function ChosenMonth({ month }) {
  const navigate = useNavigate();
  const isValidFormat = /^\d{4}-(0[1-9]|1[012])$/.test(month);

  useEffect(() => {
    !isValidFormat && navigate(`${routes.private.calendar.path}`);
  }, [isValidFormat, navigate]);

  return (
    <>
      <div style={{ color: 'red' }}>{month}</div>
      <CalendarTitle />
      <CalendarTable month={month} />
    </>
  );
}

const CalendarPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { month, day } = useParams();
  const currentMonth = moment().format('YYYY-MM');

  useEffect(() => {
    !month && !day && navigate(`${routes.private.month.path.replace(':month', currentMonth)}`);
    dispatch(currentPage('Calendar'));
  }, [currentMonth, day, dispatch, month, navigate]);

  return (
    <div className={css.pageWrapper}>
      {month && <ChosenMonth month={month} />}
      {day && <ChosenDay day={day} />}
    </div>
  );
};

export default CalendarPage;
