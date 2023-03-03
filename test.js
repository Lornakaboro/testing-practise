import Calculator from "./calculator";
import { stringLength } from './index.js'
import { reverseString } from './reverse.js'


describe('stringLength function', () => {
  test('returns correct length for valid input', () => {
    expect(stringLength('hello')).toBe(5);
  });

  test("throws error if string is empty", () => {
    expect(() => {
      stringLength("");
    }).toThrow("String must not be empty");
  });
  

  test('throws error if string is too long', () => {
    expect(() => stringLength('thisstringistoolong')).toThrow('String must not be longer than 10 characters');
  });

  test('reverseString should reverse the given string', () => {
    expect(reverseString('hello')).toBe('olleh');
  });
  
});

describe('Calculator', () => {
    let calc;
  
    beforeEach(() => {
      calc = new Calculator();
    });
  
    describe('add', () => {
      it('should add two positive numbers', () => {
        expect(calc.add(2, 3)).toBe(5);
      });
  
      it('should add a negative number and a positive number', () => {
        expect(calc.add(-5, 3)).toBe(-2);
      });
  
      it('should add two negative numbers', () => {
        expect(calc.add(-2, -3)).toBe(-5);
      });
    });
  
    describe('subtract', () => {
      it('should subtract two positive numbers', () => {
        expect(calc.subtract(5, 3)).toBe(2);
      });
  
      it('should subtract a negative number from a positive number', () => {
        expect(calc.subtract(5, -3)).toBe(8);
      });
  
      it('should subtract two negative numbers', () => {
        expect(calc.subtract(-5, -3)).toBe(-2);
      });
    });
  
    describe('divide', () => {
      it('should divide two positive numbers', () => {
        expect(calc.divide(10, 2)).toBe(5);
      });
  
      it('should divide a negative number by a positive number', () => {
        expect(calc.divide(-10, 2)).toBe(-5);
      });
  
      it('should throw an error when dividing by zero', () => {
        expect(() => calc.divide(10, 0)).toThrow();
      });
    });
  
    describe('multiply', () => {
      it('should multiply two positive numbers', () => {
        expect(calc.multiply(2, 3)).toBe(6);
      });
  
      it('should multiply a negative number and a positive number', () => {
        expect(calc.multiply(-5, 3)).toBe(-15);
      });
  
      it('should multiply two negative numbers', () => {
        expect(calc.multiply(-2, -3)).toBe(6);
      });
    });
  });
  

