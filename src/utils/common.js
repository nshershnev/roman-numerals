export const isArabicNumber = (str) => Number.isInteger(+str);
export const isRomanNumber = (str) => /^[MDCLXVI]+$/.test(str);
