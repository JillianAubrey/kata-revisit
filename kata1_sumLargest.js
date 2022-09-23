const sumLargestNumbers = function(data) {
  let largest = data[0];
  let secondLargest = data[1];

  data.forEach(datum => {
    if (datum > largest) {
      secondLargest = largest;
      largest = datum;
    } else if (datum > secondLargest) {
      secondLargest = datum;
    }
  });

  return largest + secondLargest;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));