import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from 'recharts';

const data = [
  { name: 'To Do', month: 100, day: 60, amt: 100 },
  { name: 'In Progress', month: 100, day: 40, amt: 100 },
  { name: 'Done', month: 100, day: 80, amt: 100 },
];

export const StatisticsChart = () => {
  return (
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
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="day" fill="#FFD2DD" />
      <Bar dataKey="month" fill="#3E85F3" />
    </BarChart>
  );
};
