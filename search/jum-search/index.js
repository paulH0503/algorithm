const array = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];
const searchValue = 55;

function jumpSearch(array, step, value) {
  let indexSearch = -1;
  const findMaxIndexSearch = (index = 0) => {

    if (index > array.length - 1) {
      return -1;
    }

    if (array[index] >= value) {
      return index
    }
    if (array[index] < value) {
      return findMaxIndexSearch(index + step);
    }
  }

  const maxIndex = findMaxIndexSearch();
  if (maxIndex !== -1) {
    for (let i = maxIndex - step; i <= maxIndex; i++) {
      if (array[i] === value) {
        indexSearch = i;
        break;
      }
    }
  }
  return indexSearch;
}

console.log(array[jumpSearch(array, 4, searchValue)] === searchValue);