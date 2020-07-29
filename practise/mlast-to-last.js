
  var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function process(fn) {
    let param = 0;
    if (typeof fn === 'function') {
      fn();
      param = process.number;
    } else {
      param = fn;
    }
    if (param <= this.length - 1) {
      return this.slice(-1 + -1*param)[0];
    } 
    return undefined;
  }

  Object.defineProperty(array, 'getIndexFromLast', {
    get: function() {
      return process;
    }
  });

function next() {
  if (!process.number) {
    process.number = 1;
  } else {
    ++process.number;
  }
}



var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array.getIndexFromLast(next));
// 9
console.log(array.getIndexFromLast(next));
// 8
console.log(array.getIndexFromLast(next));
// 7
console.log(array.getIndexFromLast(5));
// 5
console.log(array.getIndexFromLast(next));
// 6