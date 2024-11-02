// src/components/SavingsChart.js
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SavingsChart = ({ data }) => {
  const mockData = data || [
    { year: 'Year 1', savings: 200 },
    { year: 'Year 2', savings: 450 },
    { year: 'Year 3', savings: 700 },
    { year: 'Year 4', savings: 950 },
    { year: 'Year 5', savings: 1200 },
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={mockData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend />
        {/* Change the stroke color to the desired green */}
        <Line type="monotone" dataKey="savings" stroke="#2e7d32" activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SavingsChart;
