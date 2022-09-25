const caseFunctions = {
  _mapString: function(str, func) {
    return str.split('').map(func).join('');
  },
  vowels: ['a', 'e', 'i', 'o', 'u'],
  camel: (function(text) {
    const mapFunction = (c, i, a) => {
      if (c === ' ') {
        return '';
      }
      if (a[i - 1] === ' ') {
        return c.toUpperCase();
      }
      return c;
    }

    return this._mapString(text.toLowerCase().trim(), mapFunction);
  }),
  pascal: function(text) {
    const camelText = this.camel(text);
    return camelText[0].toUpperCase() + camelText.slice(1);
  },
  snake: text => text.replace(/ /g, '_'),
  kebab: text => text.replace(/ /g, '-'),
  title: function(text) {
    const mapFunction = (c, i, a) => {
      if (i === 0 || a[i - 1] === ' ') {
        return c.toUpperCase();
      }
      return c;
    }
    return this._mapString(text.toLowerCase(), mapFunction);
  },
  vowel: function(text) {
    let vowelText = text.toLowerCase();
    this.vowels.forEach(vowel => {
      const regex = new RegExp(vowel, 'g');
      vowelText = vowelText.replace(regex, vowel.toUpperCase());
    });
    return vowelText;
  },
  consonant: function(text) {
    let consonantText = text.toUpperCase();
    this.vowels.forEach(vowel => {
      const regex = new RegExp(vowel.toUpperCase(), 'g');
      consonantText = consonantText.replace(regex, vowel);
    });
    return consonantText;
  },
  upper: text => text.toUpperCase(),
  lower: text => text.toLowerCase(),
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