import React, { useState } from 'react';
import { get } from 'lodash';
import './App.css';

import RomanNumerals from './entities/RomanNumerals';
import { isArabicNumber, isRomanNumber } from './utils/common';

function App() {
  const [number, setNumber] = useState('');
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const value = get(e, 'target.value', '');
    setNumber(value);

    if (error) {
      setError(false);
    }
  };

  const validateNumber = (number) => isArabicNumber(number) || isRomanNumber(number);

  const handleFormSubmit = (e, number) => {
    e.preventDefault();

    const isNumberValid = validateNumber(number);

    if (isNumberValid) {
      const convertedNumber = isArabicNumber(number)
        ? RomanNumerals.toRoman(number)
        : RomanNumerals.fromRoman(number);

      setNumber(convertedNumber);
    } else {
      setError(true);
    }
  };

  return (
    <div className="app">
      <h1>Roman number converter online</h1>
      <p>Enter a number using Arabic (0...9) or Roman (I, V, X, L, C, D, M) digits and press Convert button</p>
      <p>Numbers from 1 to 3,999 (from I to MMMCMXCIX) are converted correctly</p>
      <form className="number-converter" onSubmit={(e) => handleFormSubmit(e, number)}>
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
