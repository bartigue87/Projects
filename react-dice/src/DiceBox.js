import React from 'react';

function DiceBox(props) {
  return (
    <div>
      <div>{props.die1}</div>
      <div>{props.die2}</div>
      <div>{props.die3}</div>
      <div>{props.die4}</div>
      <div>{props.die5}</div>
    </div>
  );
}

export default DiceBox;
