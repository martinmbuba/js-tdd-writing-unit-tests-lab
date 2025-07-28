// src/__tests__/utils.test.js
const { isPalindrome } = require('../utils');

describe('isPalindrome', () => {
  test('returns true for a palindrome word', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  test('returns false for a non-palindrome word', () => {
    expect(isPalindrome('car')).toBe(false);
  });

  test('returns true for palindrome with mixed case', () => {
    expect(isPalindrome('RaceCar')).toBe(true);
  });

  test('returns false for empty string', () => {
    expect(isPalindrome('')).toBe(false);
  });

  test('throws error for non-alphabetic characters', () => {
    expect(() => isPalindrome('racecar1')).toThrow('Input must contain only alphabetic characters');
  });

  test('throws error for non-string input', () => {
    expect(() => isPalindrome(12321)).toThrow('Input must be a string');
  });
});
