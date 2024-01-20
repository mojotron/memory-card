// modern version of fisher-yates algorithm O(n)
export const shuffle = (array: number[]): number[] => {
  const copy = [...array];
  let endPointer = copy.length - 1;

  while (endPointer >= 0) {
    const swapIndex = Math.floor(Math.random() * copy.length);
    const swap = copy[endPointer];
    copy[endPointer] = copy[swapIndex];
    copy[swapIndex] = swap;

    endPointer -= 1;
  }

  return copy;
};
