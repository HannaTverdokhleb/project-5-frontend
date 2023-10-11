import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import React, { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment/moment';
import DatePicker from 'react-datepicker';
import { routes } from '../../../configs/routes';
import css from './index.module.css';
import PeriodPaginator from '../../User/CalendarToolbar/PeriodPaginator/PeriodPaginator';

export default function CalendarPicker({ month }) {
  const navigate = useNavigate();

  const handleChange = date => {
    navigate(
      `${routes.private.day.path.replace(
        ':day',
        moment(date).format('YYYY-MM-DD'),
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
    <button className={css.customInput} onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  return (
    <div className={css.picker}>
      <DatePicker
        showPopperArrow={false}
        selected={new Date(`${month}-${moment().format('DD')}`)}
        onChange={handleChange}
        customInput={<CustomInput />}
        fixedHeight={css.fixedHeight}
        calendarClassName={css.calendar}
        dateFormat='MMMM yyyy'
      />
      <PeriodPaginator
        leftClick={leftClick}
        rightClick={rightClick} />
    </div>

  );
}
