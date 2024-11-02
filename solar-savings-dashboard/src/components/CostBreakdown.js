// src/components/CostBreakdown.js
import React from 'react';
import { Typography, Box, List, ListItem, ListItemText, Paper } from '@mui/material';

const CostBreakdown = ({ costData }) => {
  const mockCostData = costData || {
    installationCost: 15000, // Example installation cost
    maintenanceCost: 200, // Example yearly maintenance cost
    taxCredits: 3000, // Example tax credits
  };

  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 2, width: 300 }}>
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold', color: '#2e7d32' }}>
        Cost Breakdown
      </Typography>
      <List>
        <ListItem>
          <ListItemText
            primary="Installation Cost"
            secondary={`$${mockCostData.installationCost}`}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Annual Maintenance Cost"
            secondary={`$${mockCostData.maintenanceCost}`}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Tax Credits"
            secondary={`-$${mockCostData.taxCredits}`}
          />
        </ListItem>
      </List>
    </Paper>
  );
};

export default CostBreakdown;
