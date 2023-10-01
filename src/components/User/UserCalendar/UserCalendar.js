import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export const CalendarDropdown = () => {
  const [date, setDate] = useState(new Date());

  const handleCalendarClose = () => console.log('Calendar closed');
  const handleCalendarOpen = () => console.log('Calendar opened');

  return (
    <DatePicker
      selected={date}
      onChange={date => setDate(date)}
      onCalendarClose={handleCalendarClose}
      onCalendarOpen={handleCalendarOpen}
    />
  );
};
