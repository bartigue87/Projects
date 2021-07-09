import React from 'react';
import DiceBox from './DiceBox';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      num5: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  randNum() {
    return Math.floor(Math.random() * 6) + 1;
  }
  handleClick() {
    this.setState(() => {
      return {
        num1: this.randNum(),
        num2: this.randNum(),
        num3: this.randNum(),
        num4: this.randNum(),
        num5: this.randNum(),
      };
    });
  }
  render() {
    return (
      <div>
        <DiceBox
          die1={this.state.num1}
          die2={this.state.num2}
          die3={this.state.num3}
          die4={this.state.num4}
          die5={this.state.num5}
        />
        <button onClick={this.handleClick}>Roll Dice</button>
      </div>
    );
  }
}

export default App;
