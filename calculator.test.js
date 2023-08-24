const Calculate = require('./calculator')

describe('calculate', () => {
  const calculator = new Calculate();
  
  describe('add', () => {
    it('should add two numbers correctly', () => {
      expect(calculator.add(6, 3)).toEqual(9);
      expect(calculator.add(-21, 7)).toEqual(-14);
      expect(calculator.add(20, 10)).toEqual(30);
    });
  });  
  describe('subtract', () => {
      it('should subtract two numbers correctly', () => {
        expect(calculator.subtract(6, 3)).toEqual(3);
        expect(calculator.subtract(-21, 7)).toEqual(-28);
        expect(calculator.subtract(20, 10)).toEqual(10);
      });
  });
  describe('multiply', () => {
    it('should multiply two numbers correctly', () => {
      expect(calculator.multiply(6, 3)).toEqual(18);
      expect(calculator.multiply(-21, 7)).toEqual(-147);
      expect(calculator.multiply(20, 10)).toEqual(200);
    });
  });
  describe('divide', () => {
    it('should divide two numbers correctly', () => {
      expect(calculator.divide(6, 3)).toEqual(2);
      expect(calculator.divide(-21, 7)).toEqual(-3);
      expect(calculator.divide(20, 10)).toEqual(2);
      expect(calculator.divide(10,0)).toBe('Not possible to divide by zero');
    });
  });
});