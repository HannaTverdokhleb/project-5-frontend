import React, { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import { getMonth } from 'date-fns'; // Import getYear and getMonth

import 'react-datepicker/dist/react-datepicker.css';
import css from './CalendarPopup.module.css';

export const CalendarDropdown = () => {
  const [startDate, setStartDate] = useState(new Date());

  const renderDayContents = (day, date) => {
    const tooltipText = `Tooltip for date: ${date}`;
    return (
      <span className={css.tooltipText} title={tooltipText}>
        {date.getDate()}
      </span>
    );
  };

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className={css.customInput} onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <DatePicker
      calendarStartDay={1}
      showPopperArrow={false}
      selected={startDate}
      onChange={date => setStartDate(date)}
      customInput={<CustomInput />}
      fixedHeight={css.fixedHeight}
      calendarClassName={css.calendar}
      renderDayContents={renderDayContents}
      dateFormat="d MMMM yyyy"
      renderCustomHeader={({
        date,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled,
      }) => (
        <div
          className={css.headerMonth}
          style={{ margin: 10, display: 'flex', justifyContent: 'center' }}
        >
          <button
            className={css.headerMonth}
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
          >
            {'<'}
          </button>

          <select
            className={css.headerMonth}
            value={months[getMonth(date)]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map(option => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <button
            className={css.headerMonth}
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
          >
            {'>'}
          </button>
        </div>
      )}
    />
  );
};
