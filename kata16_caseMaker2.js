const caseFunctions = {
  vowels: ['a', 'e', 'i', 'o', 'u'],
  _mapString: function(str, func) {
    return str.split('').map(func).join('');
  },
  camel: (function(text) {
    const camelText = this._mapString(text.toLowerCase(), (c, i, a) => {
      if (c === ' ') {
        return '';
      }
      if (a[i - 1] === ' ') {
        return c.toUpperCase();
      }
      return c;
    });
    return camelText;
  }),
  pascal: function(text) {
    const camelText = this.camel(text);
    return camelText[0].toUpperCase() + camelText.slice(1);
  },
  snake: function(text) {
    let snakeText = this._mapString(text, c => {
      if (c === ' ') {
        return '_';
      }
      return c;
    });
    return snakeText;
  },
  kebab: function(text) {
    return this._mapString(text, c => {
      if (c === ' ') {
        return '-';
      }
      return c;
    });
  },
  title: function(text) {
    return this._mapString(text.toLowerCase(), (c, i, a) => {
      if (i === 0 || a[i - 1] === ' ') {
        return c.toUpperCase();
      }
      return c;
    });
  },
  vowel: function(text) {
    const vowelText = this._mapString(text.toLowerCase(), c => {
      if (this.vowels.includes(c)) {
        return c.toUpperCase();
      }
      return c;
    });
    return vowelText;
  },
  consonant: function(text) {
    const consonantText = this._mapString(text.toLowerCase(), c => {
      if (!this.vowels.includes(c)) {
        return c.toUpperCase();
      }
      return c;
    });
    return consonantText;
  },
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