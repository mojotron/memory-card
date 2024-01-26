import { shuffle } from './shuffleArray';

export function getRandomItemsFromArray<Type>(size: number, source: Type[]) {
  const shuffledSource = shuffle(source);
  if (size > shuffledSource.length) return shuffledSource;
  return shuffledSource.slice(0, size);
}
