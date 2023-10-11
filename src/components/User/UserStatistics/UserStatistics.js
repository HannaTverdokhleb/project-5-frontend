import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  //   Tooltip,
  //   Legend,
  CartesianGrid,
} from 'recharts';

import css from './UserStatistics.module.css';
import { CalendarDropdown } from '../CalendarPopup/CalendarPopup';

//data for stats chart
const data = [
  { name: 'To Do', month: 100, day: 60, amt: 100 },
  { name: 'In Progress', month: 100, day: 40, amt: 100 },
  { name: 'Done', month: 100, day: 80, amt: 100 },
];

//gradient for chart
const gradientPink = (
  <linearGradient id='barGradientPink' x1='0%' y1='0%' x2='0%' y2='100%'>
    <stop offset='0%' stopColor='#ffffff' />
    <stop offset='100%' stopColor='#FFD2DD' />
  </linearGradient>
);

//gradient for chart
const gradientBlue = (
  <linearGradient id='barGradientBlue' x1='0%' y1='0%' x2='0%' y2='100%'>
    <stop offset='0%' stopColor='#ffffff' />
    <stop offset='100%' stopColor='#3E85F3' />
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
export const StatisticsChart = ({ day, setDay }) => {
  // Компонент отримує day '2023-10-12'
  const [chartWidth, setChartWidth] = useState(280);
  const [chartHeight, setChartHeight] = useState(266);
  const [barSize, setBarSize] = useState(22);
  const [barGap, setBarGap] = useState(8);
  const [barCategoryGap, setBarCategoryGap] = useState(30);

  // Update chart dimensions based on screen width
  useEffect(() => {
    const updateDimensions = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 375) {
        setChartWidth(280);
        setChartHeight(330);
        setBarSize(22);
        setBarGap(8);
        setBarCategoryGap(30);
      } else if (screenWidth >= 768 && screenWidth < 1440) {
        setChartWidth(580);
        setChartHeight(360);
        setBarSize(27);
        setBarGap(14);
        setBarCategoryGap(130);
      } else if (screenWidth > 1440) {
        setChartWidth(780);
        setChartHeight(350);
        setBarSize(27);
        setBarGap(14);
        setBarCategoryGap(170);
      }
    };

    // Event listener to window resize
    window.addEventListener('resize', updateDimensions);

    // Initial dimensions
    updateDimensions();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);
  return (
    <div className={css.container}>
      <div className={css.header}>
        <CalendarDropdown day={day} setDay={setDay} />
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
      </div>
      <div className={css.chartBlock}>
        <p className={css.tasks}>Tasks</p>
        <BarChart
          className={css.textChart}
          width={chartWidth}
          height={chartHeight}
          data={data}
          barSize={barSize}
          barGap={barGap}
          barCategoryGap={barCategoryGap}
        >
          <defs>{gradientPink}</defs>
          <defs>{gradientBlue}</defs>
          <CartesianGrid stroke='#E3F3FF' />
          <CartesianGrid vertical={false} />
          {/* <CartesianGrid strokeDasharray="3 3" /> */}

          <XAxis dataKey='name' />
          <YAxis />
          {/* <Tooltip /> */}
          {/* <Legend /> */}
          <Bar
            dataKey='day'
            fill='url(#barGradientPink)'
            shape={<RoundedBar />}
          />
          <Bar
            dataKey='month'
            fill='url(#barGradientBlue)'
            shape={<RoundedBar />}
          />
        </BarChart>
      </div>
    </div>
  );
};
