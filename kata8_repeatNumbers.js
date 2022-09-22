const repeatNumbers = function(data) {
  return data.map(x => x[0].toString().repeat(x[1])).join(', ');
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));