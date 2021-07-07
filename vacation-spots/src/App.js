import React from 'react';
import Spot from './Spot';
import vacationSpots from './vacationSpots';

function App() {
  const spots = vacationSpots.map(function (item) {
    return (
      <Spot place={item.place} price={item.price} timeToGo={item.timeToGo} />
    );
  });
  return <div>{spots}</div>;
}

export default App;
