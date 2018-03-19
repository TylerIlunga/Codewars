const R = require('ramda');

var flatten = (...rest) => {
  return R.flatten(rest);
}

console.log(flatten(1, 2, [4, 6, [5, 6, [7, 8, 9, 0, 121,4234]]], [3, 5, 6], 422334).sort())
