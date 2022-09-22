const makeCase = function(input, caseOption) {
  return eval(caseOption)(input);
}

const camel = text => {
  return text.toLowerCase().split('').map((c, i, a) => {
    if (c === ' ') {
      return '';
    }
    if (a[i-1] === ' ') {
      return c.toUpperCase();
    }
    return c;
  }).join('');
};

const pascal = text => {
  return text.toLowerCase().split('').map((c, i, a) => {
    if (c === ' ') {
      return '';
    }
    if (i === 0 || a[i-1] === ' ') {
      return c.toUpperCase();
    }
    return c;
  }).join('');
};

const snake = text => {
  return text.split('').map(c => {
    if (c === ' ') {
      return '_';
    }
    return c;
  }).join('');
};

const kebab = text => {
  return text.split('').map(c => {
    if (c === ' ') {
      return '-';
    }
    return c;
  }).join('');
};

const title = text => {
  return text.toLowerCase().split('').map((c, i, a) => {
    if (i === 0 || a[i-1] === ' ') {
      return c.toUpperCase();
    }
    return c;
  }).join('');
};

const vowel = text => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return text.toLowerCase().split('').map(c => {
    if (vowels.includes(c)) {
      return c.toUpperCase();
    }
    return c;
  }).join('');
};

const consonant = text => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return text.toLowerCase().split('').map(c => {
    if (!vowels.includes(c)) {
      return c.toUpperCase();
    }
    return c;
  }).join('');
};

const upper = text => text.toUpperCase();

const lower = text => text.toLowerCase();

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", "upper"));
console.log(makeCase("this is a string", "lower"));
// console.log(makeCase("this is a string", ["upper", "snake"]));