const  vowels = ['a', 'e', 'i', 'o', 'u'];

const caseFunctions = {
  camel: (text => {
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
  }),
  pascal: (text => {
    const pascalText = text.toLowerCase().split('').map((c, i, a) => {
      if (c === ' ') {
        return '';
      }
      if (i === 0 || a[i - 1] === ' ') {
        return c.toUpperCase();
      }
      return c;
    }).join('');
    return pascalText;
  }),
  snake: (text => {
    let snakeText = text.split('').map(c => {
      if (c === ' ') {
        return '_';
      }
      return c;
    }).join('');
    return snakeText;
  }),
  kebab: (text => {
    return text.split('').map(c => {
      if (c === ' ') {
        return '-';
      }
      return c;
    }).join('');
  }),
  title: (text => {
    return text.toLowerCase().split('').map((c, i, a) => {
      if (i === 0 || a[i - 1] === ' ') {
        return c.toUpperCase();
      }
      return c;
    }).join('');
  }),
  vowel: (text => {
    return text.toLowerCase().split('').map(c => {
      if (vowels.includes(c)) {
        return c.toUpperCase();
      }
      return c;
    }).join('');
  }),
  consonant: (text => {
    return text.toLowerCase().split('').map(c => {
      if (!vowels.includes(c)) {
        return c.toUpperCase();
      }
      return c;
    }).join('');
  }),
  upper: (text => text.toUpperCase()),
  lower: (text => text.toLowerCase()),
};

const makeCase = function(input, caseOption) {
  if (Array.isArray(caseOption)) {
    return caseOption.reduce((a,b) => caseFunctions[b](a), input);
  }
  return caseFunctions[caseOption](input);
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", "upper"));
console.log(makeCase("this is a string", "lower"));
console.log(makeCase("this is a string", ["upper", "snake"]));