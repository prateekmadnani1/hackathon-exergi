// src/components/InputForm.js
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

const InputForm = ({ onSubmit }) => {
  const [location, setLocation] = useState('');
  const [energyUsage, setEnergyUsage] = useState('');

  const handleSubmit = () => {
    onSubmit({ location, energyUsage });
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 3 }}>
      <TextField
        label="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <TextField
        label="Monthly Energy Usage (kWh)"
        value={energyUsage}
        onChange={(e) => setEnergyUsage(e.target.value)}
      />
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#2e7d32', // Same green color
          color: '#ffffff', // White text color
          '&:hover': {
            backgroundColor: '#1b5e20', // Darker green on hover
          },
        }}
        onClick={handleSubmit}
      >
        Calculate Savings
      </Button>
    </Box>
  );
};

export default InputForm;
