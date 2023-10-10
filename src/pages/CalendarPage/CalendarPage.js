import React, { forwardRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currentPage } from 'redux/actions';
import css from './CalendarPage.module.css';
import cssPopup from '../../components/User/CalendarPopup/CalendarPopup.module.css';

import { CalendarTitle } from 'components/Calendar/СalendarTitle/СalendarTitle';
import { CalendarTable } from 'components/Calendar/СalendarTable/СalendarTable';
import { useNavigate, useParams } from 'react-router-dom';
import moment from 'moment';
import { routes } from '../../configs/routes';
import TasksColumnsList from 'components/User/TasksColumnsList/TasksColumnsList';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PeriodPaginator from '../../components/User/CalendarToolbar/PeriodPaginator/PeriodPaginator';

function CalendarPicker({ month }) {
  const navigate = useNavigate();

  const handleChange = date => {
    navigate(
      `${routes.private.month.path.replace(
        ':month',
        moment(date).format('YYYY-MM'),
      )}`,
    );
  };

  const leftClick = () => {
    navigate(
      `${routes.private.month.path.replace(
        ':month',
        moment(month).subtract(1, 'month').format('YYYY-MM'),
      )}`,
    );
  };

  const rightClick = () => {
    navigate(
      `${routes.private.month.path.replace(
        ':month',
        moment(month).add(1, 'month').format('YYYY-MM'),
      )}`,
    );
  };

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className={cssPopup.customInput} onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  return (
    <div className={css.picker}>
      <DatePicker
        calendarStartDay={1}
        showPopperArrow={false}
        selected={new Date(month)}
        onChange={handleChange}
        customInput={<CustomInput />}
        fixedHeight={cssPopup.fixedHeight}
        calendarClassName={cssPopup.calendar}
        dateFormat='MMMM yyyy'
      />
      <PeriodPaginator 
        leftClick={leftClick}
        rightClick={rightClick} />
    </div>

  );
}

function ChosenDay({ day }) {
  const navigate = useNavigate();
  const isValidFormat =
    /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/.test(day);

  useEffect(() => {
    !isValidFormat && navigate(`${routes.private.calendar.path}`);
  }, [isValidFormat, navigate]);

  // TODO: return your component
  return (
    // <div style={{ color: 'red',  }}>{day}</div>
    <>
      <div
        style={{
          color: 'red',
          width: '100%',
          height: '114px',
          marginBottom: '16px',
          borderRadius: '16px',
          textAlign: 'center',

          outline: '1px solid blue',
        }}
      >
        {day}
      </div>
      <TasksColumnsList day={day} />
    </>
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
      <div className={css.pageWrapper}>
        <CalendarPicker month={month} />
        <CalendarTitle />
        <CalendarTable month={month} />
      </div>
    </>
  );
}

const CalendarPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { month, day } = useParams();
  const currentMonth = moment().format('YYYY-MM');

  useEffect(() => {
    !month &&
    !day &&
    navigate(`${routes.private.month.path.replace(':month', currentMonth)}`);
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
