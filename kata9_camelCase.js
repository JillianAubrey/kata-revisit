const camelCase = function(text) {
  const camelText = text.toLowerCase().split('').map((c, i, a) => {
    if (c === ' ') {
      return '';
    }
    if (a[i - 1] === ' ') {
      return c.toUpperCase();
    }
    return c;
  }).join('');
  return camelText;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));