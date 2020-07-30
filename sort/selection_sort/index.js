
var arr = [64, 25, 12, 22, 11];
var tempArr = [...arr];
var result = [];


/**
 * 
  var arr = [64, 25, 12, 22, 11];
  var tempArr = [...arr];
  var result = [];

  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let tempMinIndex = -1;
    for (let j = i; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j];
        tempMinIndex = j;
      }
    }
    if (tempMinIndex !== -1) {
      const tempV = arr[i];
      arr[i] = arr[tempMinIndex];
      arr[tempMinIndex] = tempV;
    }
  }
  console.log(result, arr);
 */


for (let i = 0; i < arr.length; i++) {
  const curMin = Math.min(...tempArr);
  const curMinIndex = tempArr.indexOf(curMin);
  tempArr.splice(curMinIndex, 1);
  result.push(curMin);
}

console.log(result);