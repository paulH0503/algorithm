var binarySearch = (function(array) {
  const neededValue = 454;
  function findBinarySearch(array, L = 0, H = array.length, M = Math.floor(L + (H - L) / 2)) {
    if (array[M] === neededValue) {
      return M;
    }
    if (M === L || M === H ) {
      if (neededValue === array[L]) {
        return M;
      } else if (neededValue === array[H]) {
        return H;
      } else {
        return "error not found"
      }
    }
    if (array[M] < neededValue) {
      return findBinarySearch(array, M + 1, H);
    } else {
      return findBinarySearch(array, L, M - 1);
    }
  }
  return findBinarySearch(array, 0, array.length);
})([2, 5, 8, 12, 16, 23, 38, 58, 454, 72, 91, 4, 5, 213, 123].sort((a, b) => a - b));

console.log(binarySearch);