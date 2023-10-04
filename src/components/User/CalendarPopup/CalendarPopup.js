import React, { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

import css from './CalendarPopup.module.css';


export const CalendarDropdown = () => {
  const [startDate, setStartDate] = useState(new Date());
  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className={css.customInput} onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      customInput={<CustomInput />}
      fixedHeight={css.fixedHeight}
      calendarClassName={css.calendar}
    />
  );
};
