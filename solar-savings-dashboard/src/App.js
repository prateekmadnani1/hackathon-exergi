import React, { useState } from 'react';
import Header from './components/Header';
import InputForm from './components/InputForm';
import Results from './components/Results';

const App = () => {
  const [data, setData] = useState(null);

  const handleFormSubmit = (inputData) => {
    // Mock data based on the location
    const mockResults = {
      savings: getSavingsData(inputData.location),
      environmentalImpact: getEnvironmentalImpactData(inputData.location),
      costBreakdown: getCostBreakdownData(inputData.location),
    };
    setData(mockResults);
  };

  const getSavingsData = (location) => {
    switch (location) {
      case 'New York City':
        return [
          { year: 'Year 1', savings: 300 },
          { year: 'Year 2', savings: 600 },
          { year: 'Year 3', savings: 900 },
          { year: 'Year 4', savings: 1200 },
          { year: 'Year 5', savings: 1500 },
        ];
      case 'Buffalo':
        return [
          { year: 'Year 1', savings: 200 },
          { year: 'Year 2', savings: 450 },
          { year: 'Year 3', savings: 700 },
          { year: 'Year 4', savings: 950 },
          { year: 'Year 5', savings: 1200 },
        ];
      case 'Rochester':
        return [
          { year: 'Year 1', savings: 250 },
          { year: 'Year 2', savings: 500 },
          { year: 'Year 3', savings: 750 },
          { year: 'Year 4', savings: 1000 },
          { year: 'Year 5', savings: 1300 },
        ];
      default:
        return [];
    }
  };

  const getEnvironmentalImpactData = (location) => {
    switch (location) {
      case 'New York City':
        return {
          co2Savings: 2500,
          treesPlantedEquivalent: 60,
          gasolineSaved: 600,
          carsReduced: 2,
        };
      case 'Buffalo':
        return {
          co2Savings: 2000,
          treesPlantedEquivalent: 50,
          gasolineSaved: 500,
          carsReduced: 1,
        };
      case 'Rochester':
        return {
          co2Savings: 2200,
          treesPlantedEquivalent: 55,
          gasolineSaved: 550,
          carsReduced: 1,
        };
      default:
        return {};
    }
  };

  const getCostBreakdownData = (location) => {
    switch (location) {
      case 'New York City':
        return {
          installationCost: 20000,
          maintenanceCost: 250,
          taxCredits: 4000,
        };
      case 'Buffalo':
        return {
          installationCost: 15000,
          maintenanceCost: 200,
          taxCredits: 3000,
        };
      case 'Rochester':
        return {
          installationCost: 17000,
          maintenanceCost: 220,
          taxCredits: 3500,
        };
      default:
        return {};
    }
  };

  return (
    <div>
      <Header />
      <InputForm onSubmit={handleFormSubmit} />
      {data && <Results data={data} />}
    </div>
  );
};

export default App;
