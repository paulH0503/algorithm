const array = [13, 14, 15, 12, 11, 13, 5, 6];


var b = (function inSertSort (array) {
  const valueDecision = array[0];
  var result = [];

  
  function init() {
    result[0] = valueDecision;
    Array.prototype.insert = function(index, value) {
      this.splice(index, 0, value);
    }
    return this;
  }

  function find() {
    const valueDecision = array[0];
    var result = [valueDecision];
    for (let i = 1; i < array.length; i++) {
      const tempV = array[i];
      if (tempV < valueDecision) {
        let indexInsert = 0;
        for (let j = 0; j < result.length; j++) {
          if (tempV > result[j]) {
            indexInsert = j + 1;
          }
        }
        result.insert(indexInsert, tempV);
      } else {
        const indexStart = result.indexOf(valueDecision);
        let indexInsert = indexStart;
        for (let j = indexStart; j < result.length; j++) {
          if (tempV > result[j]) {
            indexInsert = j + 1;
          }
        }
        result.insert(indexInsert, tempV);
      }
    }
    return result;

  }

  return {
    init,
    find,
  }
})(array);

console.log(b.init().find());