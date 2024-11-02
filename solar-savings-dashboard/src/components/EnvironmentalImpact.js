// src/components/EnvironmentalImpact.js
import React from 'react';
import { Typography, Box, List, ListItem, ListItemText, Paper } from '@mui/material';

const EnvironmentalImpact = ({ impactData }) => {
  const mockImpactData = impactData || {
    co2Savings: 2000, // kg of CO2 saved annually
    treesPlantedEquivalent: 50, // Equivalent number of trees planted
    gasolineSaved: 500, // Gallons of gasoline saved
    carsReduced: 1, // Number of cars reduced
  };

  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 2, width: '400px' }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#2e7d32' }}>
        Environmental Impact
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="CO2 Savings"
            secondary={`${mockImpactData.co2Savings} kg annually`}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Equivalent Trees Planted"
            secondary={`${mockImpactData.treesPlantedEquivalent} trees`}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Gasoline Saved"
            secondary={`${mockImpactData.gasolineSaved} gallons`}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Number of Cars Reduced"
            secondary={`${mockImpactData.carsReduced} car(s)`}
          />
        </ListItem>
      </List>
    </Paper>
  );
};

export default EnvironmentalImpact;
