const {mulchCalculator, fromCubicsToLitres} = require('../src/utils/calculator');

//Test block for mulchCalculator function
describe('mulchCalculator', () => {
  test('calculates volume correctly for typical values', () => {
    expect(mulchCalculator(10, 5, 10)).toBe(5);
  });

  test('returns 0 if any dimension is 0', () => {
    expect(mulchCalculator(0, 5, 10)).toBe(0);
  });

  test('handles decimal values', () => {
    expect(mulchCalculator(2.5, 4, 20)).toBeCloseTo(2);
  });
});

//Test block for fromCubicsToLitres function
describe('fromCubicsToLitres', () => {
  test('converts cubic meters to 50L bags', () => {
    expect(fromCubicsToLitres(1)).toBe(20);
  });

  test('handles fractional cubic meters', () => {
    expect(fromCubicsToLitres(0.5)).toBe(10);
  });

  test('returns 0 for 0 input', () => {
    expect(fromCubicsToLitres(0)).toBe(0);
  });
});