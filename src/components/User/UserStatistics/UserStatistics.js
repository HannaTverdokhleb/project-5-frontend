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
  { name: 'To Do', month: 4000, day: 2400, amt: 2400 },
  { name: 'In Progress', month: 3000, day: 1398, amt: 2210 },
  { name: 'Done', month: 3000, day: 1398, amt: 2210 },
];

export const StatisticsChart = () => {
  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
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
