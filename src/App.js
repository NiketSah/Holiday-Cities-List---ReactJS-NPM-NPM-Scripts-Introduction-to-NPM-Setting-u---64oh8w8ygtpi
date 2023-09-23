import React from 'react';

function App() {
  const indianCities = [
    { key: 'location1', name: 'Mumbai' },
    { key: 'location2', name: 'Delhi' },
    { key: 'location3', name: 'Bangalore' },
    { key: 'location4', name: 'Chennai' },
    { key: 'location5', name: 'Kolkata' },
    // Add more cities as needed
  ];

  return (
    <div>
      <h1>Welcome to Our Domestic Tourism Promotion</h1>
      <h2>Explore these Indian cities:</h2>
      <ol>
        {indianCities.map(city => (
          <li key={city.key}>{city.name}</li>
        ))}
      </ol>
    </div>
  );
}

export default App;
