// src/components/EnvironmentalImpact.js
import React from 'react';
import { Typography, Box, List, ListItem, ListItemText, Paper } from '@mui/material';

const EnvironmentalImpact = ({ impactData }) => {
  const mockImpactData = impactData || {
    co2Savings: 2000, // kg of CO2 saved annually
    treesPlantedEquivalent: 50, // Equivalent number of trees planted
    gasolineSaved: 500, // Gallons of gasoline saved
  };

  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 2, width: 300 }}>
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
      </List>
    </Paper>
  );
};

export default EnvironmentalImpact;
