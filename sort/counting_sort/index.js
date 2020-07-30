console.log((function(array) {
  var obj = {};
  var countObj = {};
  var max = Math.max(...array);
  var output = [];

  // count apperance of number;
  for (let i = 0; i < array.length; i++) {
    if (!obj[array[i]]) {
      obj[array[i]] = 1;
    } else {
      obj[array[i]]++;
    }
  }

  // generate list countable number to max
  for (let i = 0 ; i < max; i++) {
    if (!obj[i]) {
      obj[i] = 0;
    }
  }

  // sum
  let sum = 0;
  for (let key in obj) {
    sum += obj[key];
    countObj[key] = sum;
  }

  // sort
  array.forEach(el => {
    const pos = countObj[el];
    output[pos] = el;
    countObj[el]--;
  })
  
  return output.filter(el => !!el || el === 0);

})([1, 4, 1, 2, 7, 5, 2]));