var sort = (function mergeSort(array) {

  function merge(dArray = array) {

    if (dArray.length <= 2) {
      return dArray.sort((a,b) => a - b);
    }

    const index = Math.floor((dArray.length - 1)/2);
    const lBranch = dArray.slice(0, index+1);
    const rBranch = dArray.slice(index + 1, dArray.length);

    return [...merge(lBranch), ...merge(rBranch)].sort((a, b) => a - b); 
  }

  return {
    merge
  }
})([12, 11, 13, 5, 6, 7]);

console.log(sort.merge());