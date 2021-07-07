import React from 'react';

function Spot(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.place}</h1>
      <h3>{props.price}</h3>
      <h4>{props.timeToGo}</h4>
    </div>
  );
}

export default Spot;
