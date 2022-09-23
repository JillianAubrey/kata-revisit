const calculateChange = function(total, cash) {
  let change = {};
  let centsDue = cash - total;

  for (const item of denominations) {
    if (centsDue < item.value) {
      continue;
    }
    change[item.name] = 0;
    while (centsDue > item.value) {
      change[item.name] ++;
      centsDue -= item.value;
    }
    if (centsDue === 0) {
      break;
    }
  }

  return change;
};

const denominations = [
  {name: 'twentyDollar', value: 2000},
  {name: 'tenDollar', value: 1000},
  {name: 'fiveDollar', value: 500},
  {name: 'twoDollar', value: 200},
  {name: 'oneDollar', value: 100},
  {name: 'quarter', value: 25},
  {name: 'dime', value: 10},
  {name: 'nickel', value: 5},
  {name: 'penny', value: 1},
];

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));