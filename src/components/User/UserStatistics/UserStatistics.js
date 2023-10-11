import { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';

import css from './UserStatistics.module.css';
import { CalendarDropdown } from '../CalendarPopup/CalendarPopup';
import { useDispatch, useSelector } from 'react-redux';
import { selectTasks } from 'redux/Tasks/selectors';
import { getTasks } from 'redux/Tasks/operations';

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
    <g><rect x={x} y={y} width={width} height={height} fill={fill} rx={borderRadius} ry={borderRadius} /></g>
  );
};

//Stats chart
export const StatisticsChart = ({ day, setDay }) => {
  // Компонент отримує moment day
  const [chartWidth, setChartWidth] = useState(280);
  const [chartHeight, setChartHeight] = useState(266);
  const [barSize, setBarSize] = useState(22);
  const [barGap, setBarGap] = useState(8);
  const [barCategoryGap, setBarCategoryGap] = useState(30);

  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  const chosenDate = day.format('YYYY-MM-DD');
  const chosenMonth = day.format('YYYY-MM');

  let tasksByDay = 0;
  let tasksByDay_cat_todo = 0;
  let tasksByDay_cat_inprogress = 0;
  let tasksByDay_cat_done = 0;

  let tasksByMonth = 0;
  let tasksByMonth_cat_todo = 0;
  let tasksByMonth_cat_inprogress = 0;
  let tasksByMonth_cat_done = 0;
  
  tasks.map(task => {
    let formattedTaskDate = task.date.split('T')[0];
    let formattedTaskMonth = formattedTaskDate.slice(0, 7);
    if (formattedTaskDate === chosenDate) {
      tasksByDay++;
      switch (task.category) {
        case 'in-progress': tasksByDay_cat_inprogress++; break;
        case 'done': tasksByDay_cat_done++; break;
        default: tasksByDay_cat_todo++; break;
      }
    }
    if (formattedTaskMonth === chosenMonth) {
      tasksByMonth++;
      switch (task.category) {
        case 'in-progress': tasksByMonth_cat_inprogress++; break;
        case 'done': tasksByMonth_cat_done++; break;
        default: tasksByMonth_cat_todo++; break;
      }
    }
    return task
  });

  let tasksByDay_cat_todo_percentage = tasksByDay_cat_todo * 100 / tasksByDay;
  let tasksByDay_cat_inprogress_percentage = tasksByDay_cat_inprogress * 100 / tasksByDay;
  let tasksByDay_cat_done_percentage = tasksByDay_cat_done * 100 / tasksByDay;

  let tasksByMonth_cat_todo_percentage = tasksByMonth_cat_todo * 100 / tasksByMonth;
  let tasksByMonth_cat_inprogress_percentage = tasksByMonth_cat_inprogress * 100 / tasksByMonth;
  let tasksByMonth_cat_done_percentage = tasksByMonth_cat_done * 100 / tasksByMonth;

  const data = [
    { name: 'To Do', month: tasksByMonth_cat_todo_percentage, day: tasksByDay_cat_todo_percentage },
    { name: 'In Progress', month: tasksByMonth_cat_inprogress_percentage, day: tasksByDay_cat_inprogress_percentage },
    { name: 'Done', month: tasksByMonth_cat_done_percentage, day: tasksByDay_cat_done_percentage },
  ];

  // Update chart dimensions based on screen width
  useEffect(() => {
    dispatch(getTasks());

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
  }, [dispatch]);

  return (
    <>
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
            <CartesianGrid stroke="#E3F3FF" />
            <CartesianGrid vertical={false} />

            <XAxis dataKey="name" />
            <YAxis />
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
    </>
  );
};