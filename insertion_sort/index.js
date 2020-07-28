const array = [13, 14, 15, 12, 11, 13, 5, 6];


var b = (function inSertSort (array) {
  function init() {
    Array.prototype.insert = function(index, value) {
      this.splice(index, 0, value);
    }
    return this;
  }

  function find() {
    let valueDecision = array[0];
    var result = [valueDecision];
    for (let i = 1; i < array.length; i++) {
      const tempV = array[i];
      valueDecision = result.slice(-1)[0];
      if (tempV < valueDecision) {
        let indexInsert = 0;
        for (let j = 0; j < result.length; j++) {
          if (tempV > result[j]) {
            indexInsert = j + 1;
          }
        }
        result.insert(indexInsert, tempV);
      } else {
        result.insert(i, tempV);
      }
    }
    return result;
  }

  
  function findByRecursive(curArray = [array[0]], curIndex = 1) {
    if (curIndex >= array.length) {
      return curArray;
    }
    const nextNumber = array[curIndex];
    const lastNum = curArray.slice(-1)[0];

    if (lastNum > nextNumber) {
      let indexInsert = 0;
      for (let j = 0; j < curArray.length - 1; j++) {
        indexInsert = nextNumber > curArray[j] ? j + 1 : indexInsert;
      }
      curArray.insert(indexInsert, nextNumber);
    } else {
      curArray.insert(curIndex, nextNumber);
    }
    return findByRecursive(curArray, ++curIndex);
  }

  return {
    init,
    find,
    findByRecursive
  }
})(array);

console.log(b.init().find());