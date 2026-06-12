const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
  if (numbers.length === 0){
    return 0;
  } else {
    return numbers.reduce((a, b) => a + b);
  }
};

const multiply = function(numbers) {
  if (numbers.length === 0){
    return 0;
  } else {
    return numbers.reduce((a, b) => a * b);
  }
};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function(number) {
  let total = 1;
	for (number; 0 < number; number--){
    total = number * total;
  }
  return total;
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
