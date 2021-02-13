
import { get } from 'lodash';
import { ROMAN_NUMERALS, ROMAN_NUMERALS_MATRIX } from '../const/roman-numerals';

class RomanNumerals {
	static toRoman(arabicNumber) {
		function recurToRoman(remainder, numeralsMap, romanNumberResult) {
			if (!remainder) {
				return romanNumberResult;
			}

			const [[romanValue, arabicValue], ...tail] = numeralsMap;
			const romanNumber = romanNumberResult + romanValue.repeat(remainder / arabicValue);

			return recurToRoman(remainder % arabicValue, tail, romanNumber);
		};

		return recurToRoman(arabicNumber, ROMAN_NUMERALS_MATRIX, '');
	}

	static fromRoman(romanNumber) {
		const terms = new String(romanNumber)
			.split('')
			.reverse()
			.map((char) => ROMAN_NUMERALS[char]);

		const initialNumber = get(terms, 0, 0);

		const arabicNumber = terms.reduce((acc, number, index) => {
			const nextNumber = get(terms, index + 1, 0);

			if (nextNumber < number) {
				acc -= nextNumber;
			} else {
				acc += nextNumber;
			}

			return acc;
		}, initialNumber);

		return arabicNumber;
	}
}

export default RomanNumerals;
