const { multiply } = require('./../calculator.js');

describe('Multiply', () => {
  test('should divide two positive integers correctly', () => {
    const result = multiply(5, 2);
    expect(result).toBe(10);
  });
});
