import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import React, { forwardRef } from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import css from './CalendarPopup.module.css';
import PeriodPaginator from '../CalendarToolbar/PeriodPaginator/PeriodPaginator';

export const CalendarDropdown = ({ day, setDay }) => {
  const renderDayContents = (day, date) => {
    const tooltipText = `Tooltip for date: ${date}`;
    return (
      <span className={css.tooltipText} title={tooltipText}>
        {date.getDate()}
      </span>
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

  // const months = [
  //   'January',
  //   'February',
  //   'March',
  //   'April',
  //   'May',
  //   'June',
  //   'July',
  //   'August',
  //   'September',
  //   'October',
  //   'November',
  //   'December',
  // ];

  return (
    <DatePicker
      showPopperArrow={false}
      selected={new Date(day)}
      onChange={date => setDay(moment(date))}
      customInput={<CustomInput />}
      fixedHeight={css.fixedHeight}
      calendarClassName={css.calendar}
      renderDayContents={renderDayContents}
      dateFormat='d MMMM yyyy'
      //   renderCustomHeader={({
      //     date,
      //     changeMonth,
      //     decreaseMonth,
      //     increaseMonth,
      //     prevMonthButtonDisabled,
      //     nextMonthButtonDisabled,
      //   }) => (
      //     <div
      //       className={css.headerMonth}
      //       style={{ margin: 10, display: 'flex', justifyContent: 'center' }}
      //     >
      //       <button
      //         className={css.headerMonth}
      //         onClick={decreaseMonth}
      //         disabled={prevMonthButtonDisabled}
      //       >
      //         {'<'}
      //       </button>

      //       <select
      //         className={css.headerMonth}
      //         value={months[getMonth(date)]}
      //         onChange={({ target: { value } }) =>
      //           changeMonth(months.indexOf(value))
      //         }
      //       >
      //         {months.map(option => (
      //           <option key={option} value={option}>
      //             {option}
      //           </option>
      //         ))}
      //       </select>

      //       <button
      //         className={css.headerMonth}
      //         onClick={increaseMonth}
      //         disabled={nextMonthButtonDisabled}
      //       >
      //         {'>'}
      //       </button>
      //     </div>
      //   )}
    />
  );
};
