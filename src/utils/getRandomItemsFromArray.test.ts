import { describe, test, expect } from 'vitest';
import { getRandomItemsFromArray } from './getRandomItemsFromArray';

describe('Utility - take chunk of data from array in random order', () => {
  test('chunk of data is right size', () => {
    expect(getRandomItemsFromArray(2, [1, 2, 3, 4]).length).toBe(2);
  });
});
