import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  //   Tooltip,
  //   Legend,
  CartesianGrid,
} from 'recharts';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import css from './UserStatistics.module.css';


export const CalendarDropdown = () => {
    const [date, setDate] = useState(new Date());

    const handleCalendarClose = () => console.log("Calendar closed");
    const handleCalendarOpen = () => console.log("Calendar opened");
  
    return (
      <DatePicker
        selected={date}
        onChange={(date) => setDate(date)}
        onCalendarClose={handleCalendarClose}
        onCalendarOpen={handleCalendarOpen}
      />
    );
  };

//data for stats chart 
const data = [
  { name: 'To Do', month: 100, day: 60, amt: 100 },
  { name: 'In Progress', month: 100, day: 40, amt: 100 },
  { name: 'Done', month: 100, day: 80, amt: 100 },
];

//gradient for chart
const gradientPink = (
  <linearGradient id="barGradientPink" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stopColor="#ffffff" />
    <stop offset="100%" stopColor="#FFD2DD" />
  </linearGradient>
);

//gradient for chart
const gradientBlue = (
  <linearGradient id="barGradientBlue" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stopColor="#ffffff" />
    <stop offset="100%" stopColor="#3E85F3" />
  </linearGradient>
);

//rounded bar for chart
const RoundedBar = props => {
  const { x, y, width, height, fill } = props;
  const borderRadius = 6;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        rx={borderRadius}
        ry={borderRadius}
      />
    </g>
  );
};

//Stats chart
export const StatisticsChart = () => {
  return (
    <div className={css.container}>
      <div className={css.textFilter}>
        <div className={css.circleTextBlock}>
          <div className={css.circlePink}></div>
          <p className={css.textBy}>By Day</p>
        </div>

        <div className={css.circleTextBlock}>
          <div className={css.circleBlue}></div>
          <p className={css.textBy}>By Month</p>
        </div>
      </div>
      <div className={css.chartBlock}>
        <p className={css.tasks}>Tasks</p>
        <BarChart
          className={css.textChart}
          width={320}
          height={266}
          data={data}
          barSize={22}
          barGap={8}
          barCategoryGap="30px"
        >
          <defs>{gradientPink}</defs>
          <defs>{gradientBlue}</defs>
          <CartesianGrid stroke="#E3F3FF" />
          <CartesianGrid vertical={false} />
          {/* <CartesianGrid strokeDasharray="3 3" /> */}

          <XAxis dataKey="name" />
          <YAxis />
          {/* <Tooltip /> */}
          {/* <Legend /> */}
          <Bar
            dataKey="day"
            fill="url(#barGradientPink)"
            shape={<RoundedBar />}
          />
          <Bar
            dataKey="month"
            fill="url(#barGradientBlue)"
            shape={<RoundedBar />}
          />
        </BarChart>
      </div>
    </div>
  );
};
