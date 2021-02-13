import RomanNumerals from './RomanNumerals';

describe('RomanNumerals methods test', () => {
    it('it should convert Roman to Arabic number', () => {
        const arabicNumber = RomanNumerals.fromRoman('MDXXXIV');
        expect(arabicNumber).toEqual(1534);
    });

    it('it should convert Arabic to Roman number', () => {
        const romanNumber = RomanNumerals.toRoman(1234);
        expect(romanNumber).toEqual('MCCXXXIV');
    });
});
