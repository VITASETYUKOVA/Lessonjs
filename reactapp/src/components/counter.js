import React, { Component } from 'react';
import './counter.css'; 

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 8,
      mode: 'increment',
      multiplier: 1,
    };
  }

  handleCount = () => {
    this.setState((prevState) => ({
      count:
        prevState.mode === 'increment'
          ? prevState.count + prevState.multiplier
          : prevState.count - prevState.multiplier,
    }));
  };

  toggleMode = () => {
    this.setState((prevState) => ({
      mode: prevState.mode === 'increment' ? 'decrement' : 'increment',
    }));
  };

  resetCounter = () => {
    this.setState({ count: 0 });
  };

  handleChangeMultiplier = (newValue) => {
    this.setState({ multiplier: newValue });
  };

  render() {
    const { count, mode, multiplier } = this.state;

    return (
      <div className="counter-container">
        <h1 className="counter-value">Значення: {count}</h1>
        <span className="counter-mode">
          Поточний режим: {mode === 'increment' ? 'Додавання' : 'Віднімання'}
        </span>

        <button className="counter-button" onClick={this.handleCount}>
          {mode === 'increment' ? `Додати ${multiplier}` : `Відняти ${multiplier}`}
        </button>

        <button className="counter-button toggle-button" onClick={this.toggleMode}>
          Перемкнути режим
        </button>

        <button className="counter-button reset-button" onClick={this.resetCounter}>
          Скинути
        </button>

        <div>
          <h3>Виберіть доданок:</h3>
          {[1, 5, 10].map((value) => (
            <button
              key={value}
              className={`counter-multiplier-button ${
                multiplier === value ? 'active' : ''
              }`}
              onClick={() => this.handleChangeMultiplier(value)}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Counter;

