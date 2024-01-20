import { describe, test, expect } from 'vitest';
import { shuffle } from './shuffleArray';

describe('Utility - Shuffle Array', () => {
  test('temp', () => {});
  test('returns array of same length', () => {
    const testArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(testArray);
    expect(testArray).not.toEqual(shuffledArray);
  });
});
