// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import InputForm from './components/InputForm';
import Results from './components/Results';

const App = () => {
  const [data, setData] = useState(null);

  const handleFormSubmit = (inputData) => {
    // Mock processing inputData to get results
    const mockResults = {
      savings: [
        { year: 'Year 1', savings: 200 },
        { year: 'Year 2', savings: 450 },
        { year: 'Year 3', savings: 700 },
        { year: 'Year 4', savings: 950 },
        { year: 'Year 5', savings: 1200 },
      ],
      environmentalImpact: {
        co2Savings: 2000, // kg of CO2 saved annually
        treesPlantedEquivalent: 50, // Equivalent number of trees planted
        gasolineSaved: 500, // Gallons of gasoline saved
      },
      costBreakdown: {
        installationCost: 15000, // Example installation cost
        maintenanceCost: 200, // Example yearly maintenance cost
        taxCredits: 3000, // Example tax credits
      },
    };
    setData(mockResults);
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
