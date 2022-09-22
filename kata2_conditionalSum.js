const conditionalSum = function(values, condition) {
  const condSum = values.reduce((a, b) => {
    if (( b % 2 === 0 ? condition === 'even' : condition === 'odd' )) {
      return a + b;
    }
    return a
  }, 0);

  return condSum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));