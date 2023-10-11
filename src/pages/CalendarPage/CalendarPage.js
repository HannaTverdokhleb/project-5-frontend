import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { routes } from '../../configs/routes';
import { currentPage } from 'redux/actions';
import css from './CalendarPage.module.css';
import { CalendarTitle } from 'components/Calendar/СalendarTitle/СalendarTitle';
import { CalendarTable } from 'components/Calendar/СalendarTable/СalendarTable';
import CalendarPicker from 'components/Calendar/CalendarPicker';
import TasksColumnsList from 'components/User/TasksColumnsList/TasksColumnsList';
import { getTasks } from '../../redux/Tasks/operations';

function ChosenDay({ day }) {
  const navigate = useNavigate();
  const isValidFormat =
    /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/.test(day);

  useEffect(() => {
    !isValidFormat && navigate(`${routes.private.calendar.path}`);
  }, [isValidFormat, navigate]);

  if (!isValidFormat) {
    return null;
  }

  return (
    <TasksColumnsList day={day} />
  );
}

function ChosenMonth({ month }) {
  const navigate = useNavigate();
  const isValidFormat = /^\d{4}-(0[1-9]|1[012])$/.test(month);

  useEffect(() => {
    !isValidFormat && navigate(`${routes.private.calendar.path}`);
  }, [isValidFormat, navigate]);

  if (!isValidFormat) {
    return null;
  }

  return (
    <div className={css.pageWrapper}>
      <CalendarPicker month={month} />
      <CalendarTitle />
      <CalendarTable month={month} />
    </div>
  );
}

export default function CalendarPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { month, day } = useParams();
  const currentMonth = moment().format('YYYY-MM');

  useEffect(() => {
    dispatch(currentPage('Calendar'));

    !month &&
    !day &&
    navigate(`${routes.private.month.path.replace(':month', currentMonth)}`);

    dispatch(getTasks());
  }, [currentMonth, day, dispatch, month, navigate]);

  return (
    <div className={css.pageWrapper}>
      {month && <ChosenMonth month={month} />}
      {day && <ChosenDay day={day} />}
    </div>
  );
};
