import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <input type="text" value={input} readOnly />
        <div className="buttons">
          {['1', '2', '3', '+', '4', '5', '6', '-', '7', '8', '9', '*', 'C', '0', '=', '/'].map((value) => (
            <button
              key={value}
              className={value === 'C' || value === '=' ? 'special' : isNaN(value) ? 'operator' : ''}
              onClick={
                value === 'C'
                  ? handleClear
                  : value === '='
                  ? handleEqual
                  : () => handleClick(value)
              }
            >
              {value}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
