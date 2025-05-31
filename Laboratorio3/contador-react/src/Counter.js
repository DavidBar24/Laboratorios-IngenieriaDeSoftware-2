import React, { useState } from 'react';
import styles from './CounterStyles.css';

function Counter() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleIncrement = () => {
    setCount(prev => prev + 1);
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleApply = () => {
    const val = parseInt(inputValue, 10);
    if (!isNaN(val)) {
      setCount(prev => prev + val);
    }
    setInputValue('');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contador React</h1>

      <div style={styles.counterDisplay}>
        <span style={styles.counterText}>{count}</span>
      </div>

      <div style={styles.buttonsRow}>
        <button onClick={handleIncrement} style={styles.button}>+1</button>
        <button onClick={handleDecrement} style={styles.button}>−1</button>
        <button onClick={handleReset} style={styles.button}>Restablecer</button>
      </div>

      <div style={styles.inputRow}>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Ingresa un valor (+ o −)"
          style={styles.input}
        />
        <button onClick={handleApply} style={styles.applyButton}>Aplicar</button>
      </div>
    </div>
  );
}

export default Counter;