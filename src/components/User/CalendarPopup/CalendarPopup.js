import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import React, { forwardRef, useRef } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import moment from 'moment';
import css from '../../../components/Calendar/CalendarPicker/index.module.css';
import PeriodPaginator from '../CalendarToolbar/PeriodPaginator/PeriodPaginator';
import en from 'date-fns/locale/en-GB';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

registerLocale('en', en);
export const CalendarDropdown = ({ day, setDay }) => {
  const ref = useRef(null);

  const setStyles = (e) => {
    e.target.value !== undefined && setTimeout(() => {
      const [month] = document.querySelectorAll('.react-datepicker__month-container');
      const [children] = document.querySelectorAll('.react-datepicker__children-container');
      const [header] = month.querySelectorAll('.react-datepicker__header');
      const daysName = month.querySelectorAll('.react-datepicker__day-name');
      const weekdays = month.querySelectorAll('.weekday');
      if (header) {
        header.style.backgroundColor = '#3e85f3';
        header.style.borderBottom = '1px solid #fff';
        header.style.margin = '12px';
      }
      if (children) {
        children.style.width = '100%';
      }
      if (daysName) {
        Array.from(daysName).forEach(day => {
          day.style.color = '#fff';
        });
      }
      if (weekdays) {
        Array.from(weekdays).forEach(weekday => {
          const div = weekday.querySelector('div');
          div.style.fontWeight = '400';
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
            decreaseMonth();
          }}
          disabled={prevMonthButtonDisabled}>
          <AiOutlineLeft />
        </button>
        {day && <>{moment(date).format('MMMM YYYY').toUpperCase()}</>}
        <button
          className={css.button}
          onClick={() => {
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
        ref={ref}
        dayClassName={(date) => {
          const isWeekDay = moment(date).isoWeekday() === 6 || moment(date).isoWeekday() === 7;
          return isWeekDay ? 'weekday' : undefined;
        }}
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
      >
        <div className={css.today} onClick={() => {
          setDay(moment());
          ref.current?.setOpen(false);
        }}>
          TODAY
        </div>
      </DatePicker>
    </div>
  );
};
