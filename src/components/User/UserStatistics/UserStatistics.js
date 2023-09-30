import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
//   Tooltip,
//   Legend,
  CartesianGrid,
} from 'recharts';
import css from './UserStatistics.module.css'

const data = [
  { name: 'To Do', month: 100, day: 60, amt: 100 },
  { name: 'In Progress', month: 100, day: 40, amt: 100 },
  { name: 'Done', month: 100, day: 80, amt: 100 },
];

//rounded bar
const RoundedBar = (props) => {
    const { x, y, width, height, fill } = props;
    const borderRadius = 6; // Adjust the border radius as needed
  
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

export const StatisticsChart = () => {
  return (
    <div className={css.container}>
    <BarChart
      width={320}
      height={266}
      data={data}
      //   margin={{
      //     top: 5,
      //     right: 30,
      //     left: 20,
      //     bottom: 5,
      //   }}
      barSize={22}
      barGap={8}
      barCategoryGap="30px"
    >
      <CartesianGrid stroke="#E3F3FF" />
      <CartesianGrid vertical={false} />
      {/* <CartesianGrid strokeDasharray="3 3" /> */}

      <XAxis dataKey="name" />
      <YAxis />
      {/* <Tooltip /> */}
      {/* <Legend /> */}
      <Bar dataKey="day" fill="#FFD2DD" shape={<RoundedBar />}/>
      <Bar dataKey="month" fill="#3E85F3" shape={<RoundedBar />}/>
    </BarChart>
    </div>
  );
};
