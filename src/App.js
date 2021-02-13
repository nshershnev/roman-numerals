import React, { useState } from 'react';
import { get } from 'lodash';
import './App.css';

import RomanNumerals from './entities/RomanNumerals';
import { isRomanNumber } from './utils/common';

function App() {
  const [number, setNumber] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const value = get(e, 'target.value');
    setNumber(value);
    setError(false);
  };

  const convertToRoman = (number) => {
    const romanNumber = RomanNumerals.toRoman(+number);
    setNumber(romanNumber);
  };

  const convertFromRoman = (number) => {
    const arabicNumber = RomanNumerals.fromRoman(number);
    setNumber(arabicNumber);
  };

  const handleValidationError = () => setError(true);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const handleConvertNumber = {
      [true]: () => handleValidationError(),
      [Number.isInteger(+number)]: () => convertToRoman(+number),
      [isRomanNumber(number)]: () => convertFromRoman(number),
    };

    const selectedHandler = handleConvertNumber[true];
    selectedHandler && selectedHandler();
  };

  return (
    <div className="app">
      <h1>Roman number converter online</h1>
      <p>Enter a number using Arabic (0...9) or Roman (I, V, X, L, C, D, M) digits and press Convert button</p>
      <p>Numbers from 1 to 3,999 (from I to MMMCMXCIX) are converted correctly</p>
      <form className="number-converter" onSubmit={handleFormSubmit}>
        <div className="number-converter__field-wrapper">
          <input className="number-converter__input" type="text" name="number" value={number} onChange={handleChange}></input>
          {error && <span className="number-converter__error">Validation error: Incorrect format</span>}
        </div>
        <button className="number-converter__button" type="submit">Convert</button>
      </form>
    </div>
  );
}

export default App;
