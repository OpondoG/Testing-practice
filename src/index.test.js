const stringLength = require('./function/stringLength.js');
const reverseString = require('./function/reverseString.js');
const capitalize = require('./function/capitalize.js');
const Calculator = require('./function/calculator.js');

describe('StringLength', () => {
  it('should return the legth of string', () => {
    expect(stringLength('hello')).toBe(5);
  });
});

describe('ReverseString', () => {
  it('should return the reverse of string', () => {
    expect(reverseString('the')).toBe('eht');
  });
});

describe('CapitalizeString', () => {
  it('should return the capital of string', () => {
    expect(capitalize('the')).toBe('The');
  });
});

describe('Add', () => {
  it('should return the sum of two number', () => {
    const calculator = new Calculator();
    expect(calculator.add(2, 2)).toBe(4);
    expect(calculator.add(4, 1)).toBe(5);
    expect(calculator.add(9, 2)).toBe(11);
  });
});

describe('Subtract', () => {
  it('should return the subtraction of two number', () => {
    const calculator = new Calculator();
    expect(calculator.subtract(5, 4)).toBe(1);
    expect(calculator.subtract(7, 3)).toBe(4);
    expect(calculator.subtract(8, 9)).toBe(-1);
  });
});

describe('Multiply', () => {
  it('should return the multiplication of two number', () => {
    const calculator = new Calculator();
    expect(calculator.multiply(2, 2)).toBe(4);
    expect(calculator.multiply(4, 3)).toBe(12);
    expect(calculator.multiply(3, 3)).toBe(9);
  });
});
describe('Division', () => {
  it('should return the division of two number', () => {
    const calculator = new Calculator();
    expect(calculator.divide(4, 2)).toBe(2);
    expect(calculator.divide(16, 2)).toBe(8);
    expect(calculator.divide(10, 5)).toBe(2);
  });
});