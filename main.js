function multiply(first) {
  return function(second) {
  return first * second;
  }
}

const double = multiply(5)(2);

console.log(double);