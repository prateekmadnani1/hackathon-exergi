// src/components/CostBreakdown.js
import React from 'react';
import { Typography, Box, List, ListItem, ListItemText, Paper } from '@mui/material';

const CostBreakdown = ({ costData }) => {
  const mockCostData = costData || {
    installationCost: 15000, // Example installation cost
    maintenanceCost: 200, // Example yearly maintenance cost
    taxCredits: 3000, // Example tax credits
  };

  // Calculate net cost after tax credits
  const netCostAfterTaxCredit = mockCostData.installationCost - mockCostData.taxCredits;

  return (
    <Paper elevation={3} sx={{ p: 3, borderRadius: 2, width: '400px' }}>
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
            primary="Tax Credits Applied"
            secondary={`$${mockCostData.taxCredits}`}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Net Cost After Tax Credit"
            secondary={`$${netCostAfterTaxCredit}`}
          />
        </ListItem>
      </List>
    </Paper>
  );
};

export default CostBreakdown;
