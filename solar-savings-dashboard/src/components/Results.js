// src/components/Results.js
import React from 'react';
import { Typography, Box } from '@mui/material';
import SavingsChart from './SavingsChart';
import EnvironmentalImpact from './EnvironmentalImpact';
import CostBreakdown from './CostBreakdown';

const Results = ({ data }) => (
  <Box sx={{ p: 3, textAlign: 'center' }}>
    <Typography variant="h5">Estimated Savings</Typography>
    <SavingsChart data={data.savings} />
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 10, mt: 4 }}>
      <EnvironmentalImpact impactData={data.environmentalImpact} />
      <CostBreakdown costData={data.costBreakdown} />
    </Box>
  </Box>
);

export default Results;
