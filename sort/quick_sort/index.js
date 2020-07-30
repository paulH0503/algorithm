var quickSort = (function(array){

  function sort(dArray = array) {
    if (dArray.length <= 2) {
      return dArray.sort((a,b) => a - b);
    }
    const pivot = dArray.slice(-1)[0];
    return [...sort(dArray.filter(el => el < pivot)), pivot, ...sort(dArray.filter(el => el > pivot))]
  }
  return {
    sort
  }
})([10,80,30,90,40,50,70]);

console.log(quickSort.sort());