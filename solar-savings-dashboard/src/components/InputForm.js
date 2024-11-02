import React, { useState } from 'react';
import { TextField, Button, Box, MenuItem, FormControl, InputLabel, Select } from '@mui/material';

const InputForm = ({ onSubmit }) => {
  const [city, setCity] = useState('');
  const [energyUsage, setEnergyUsage] = useState('');

  const handleSubmit = () => {
    onSubmit({ location: city, energyUsage });
  };

  const energyUsageOptions = [
    { value: '', label: 'Select Energy Usage' },
    { value: '0-100', label: '0 - 100 kWh' },
    { value: '101-200', label: '101 - 200 kWh' },
    { value: '201-300', label: '201 - 300 kWh' },
    { value: '301-400', label: '301 - 400 kWh' },
    { value: '401+', label: '401+ kWh' },
  ];

  const cityOptions = [
    { value: '', label: 'Select City' },
    { value: 'New York City', label: 'New York City' },
    { value: 'Buffalo', label: 'Buffalo' },
    { value: 'Rochester', label: 'Rochester' },
  ];

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, p: 3 }}>
      <FormControl variant="outlined">
        <InputLabel>City</InputLabel>
        <Select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          label="City"
        >
          {cityOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="outlined">
        <InputLabel>Monthly Energy Usage</InputLabel>
        <Select
          value={energyUsage}
          onChange={(e) => setEnergyUsage(e.target.value)}
          label="Monthly Energy Usage"
        >
          {energyUsageOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
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
        disabled={!city || !energyUsage} // Disable button if inputs are not valid
      >
        Calculate Savings
      </Button>
    </Box>
  );
};

export default InputForm;
