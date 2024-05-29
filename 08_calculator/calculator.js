const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((total, value) => total + value, 0);
};

const multiply = function (array) {
  return array.reduce(function (total, current) {
    return total * current;
  }, 1);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (num) {
  if (num === 0) {
    return 1;
  }

  numFac = 1;

  for (i = num; i > 0; i--) {
    numFac *= i;
  }

  return numFac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
