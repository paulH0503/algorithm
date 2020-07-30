const array = [5, 1, 4, 2, 8];

const isSwap = (array, index1, index2) => {
  const tempArr = [...array];
  if (tempArr[index1] > tempArr[index2]) {
    return { index1: tempArr[index2], index2:  tempArr[index1]}
  }
  return false;
}

let index1 = 0;
let index2 = 1;
let isContinue = 0;
while(isContinue < array.length - 1) {
  const makeSwap = isSwap(array, index1, index2);
  // swap here
  if (makeSwap instanceof Object) {
    array[index1] = makeSwap.index1;
    array[index2] = makeSwap.index2;
  } else {
    isContinue++;
  }

  if (index2 === array.length) {
    index1 = 0;
    index2 = 1;
    isContinue = 0;
  } else {
    index1++;
    index2++;
  }
}
console.log(array);
