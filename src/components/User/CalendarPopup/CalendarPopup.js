import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import React, { forwardRef } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import moment from 'moment';
import css from '../../../components/Calendar/CalendarPicker/index.module.css';
import PeriodPaginator from '../CalendarToolbar/PeriodPaginator/PeriodPaginator';
import en from 'date-fns/locale/en-GB';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

registerLocale('en', en);
export const CalendarDropdown = ({ day, setDay }) => {
  const setStyles = (e) => {
    e.target.value !== undefined && setTimeout(() => {
      const [month] = document.getElementsByClassName('react-datepicker__month-container');
      const [header] = month.getElementsByClassName('react-datepicker__header');
      const days = month.getElementsByClassName('react-datepicker__day-name');
      if (header) {
        header.style.backgroundColor = '#3e85f3';
        header.style.borderBottom = '1px solid #fff';
        header.style.margin = '12px';
      }
      if (days) {
        Array.from(days).forEach(day => {
          day.style.color = '#fff';
        });
      }
    });
  };

  const renderMonthContent = (month, shortMonth) => {
    return (
      <div className={css.month}>
        {shortMonth}
      </div>
    );
  };

  const renderDayContent = day => {
    return (
      <div className={css.day}>
        {day}
      </div>
    );
  };

  const renderHeaderContent = ({
                                 date,
                                 changeYear,
                                 changeMonth,
                                 decreaseMonth,
                                 increaseMonth,
                                 prevMonthButtonDisabled,
                                 nextMonthButtonDisabled,
                               }) => {
    return (
      <div className={css.header}>
        <button
          className={css.button}
          onClick={() => {
            leftClick();
            decreaseMonth();
          }}
          disabled={prevMonthButtonDisabled}>
          <AiOutlineLeft />
        </button>
        {day && <>{moment(date).format('MMMM YYYY').toUpperCase()}</>}
        <button
          className={css.button}
          onClick={() => {
            rightClick();
            increaseMonth();
          }}
          disabled={nextMonthButtonDisabled}>
          <AiOutlineRight />
        </button>
      </div>
    );
  };

  const leftClick = () => {
    setDay(moment(day).subtract(1, 'day'));
  };

  const rightClick = () => {
    setDay(moment(day).add(1, 'day'));
  };

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className={css.picker}>
      <button className={css.customInput} onClick={onClick} ref={ref}>
        {value}
      </button>
      <PeriodPaginator
        leftClick={leftClick}
        rightClick={rightClick} />
    </div>
  ));

  return (
    <div onClick={setStyles}>
      <DatePicker
        locale='en'
        fixedHeight
        showPopperArrow={false}
        selected={new Date(day)}
        onChange={date => setDay(moment(date))}
        customInput={<CustomInput />}
        calendarClassName={css.calendar}
        renderDayContents={renderDayContent}
        dateFormat='d MMMM yyyy'
        renderMonthContent={renderMonthContent}
        renderCustomHeader={renderHeaderContent}
      />
    </div>
  );
};
