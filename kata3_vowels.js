const numberOfVowels = function(data) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return data.split('').reduce((counter, char) => (vowels.includes(char) ? counter + 1 : counter), 0);
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));