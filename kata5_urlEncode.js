const urlEncode = function(text) {
  return text.trim().split('').map(c => (c === ' ' ? '%20' : c)).join('');
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));