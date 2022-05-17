const getRandomIndex = (arrayLength) => Math.floor(Math.random() * arrayLength);

function getRandomDataObjects(length, dataArr) {
  // length is how much elements to extract, data arr is array of objects
  const usedIds = [];

  return Array.from({ length: length }, () => {
    let id = getRandomIndex(dataArr.length);
    while (usedIds.includes(id)) {
      id = getRandomIndex(dataArr.length);
    }
    usedIds.push(id);
    return { ...dataArr[id] }; // make copy of properties, not to mess with memory ref
  });
}

function shuffleObjects(...objects) {
  const copy = [...objects].map((ele) => ({ ...ele }));
  return Array.from({ length: objects.length }, () => {
    return copy.splice(getRandomIndex(copy.length), 1).pop();
  });
}

const temp = [
  { a: 1 },
  { a: 2 },
  { a: 3 },
  { a: 4 },
  { a: 5 },
  { a: 6 },
  { a: 7 },
  { a: 8 },
];

export { getRandomDataObjects, shuffleObjects };
