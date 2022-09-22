const checkAir = function (samples, threshold) {
  const dirtySamples = samples.reduce((counter,x) => (x === 'dirty' ? counter + 1 : counter), 0);

  if (dirtySamples / samples.length < threshold) {
    return 'Clean';
  }
  return 'Polluted';
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))