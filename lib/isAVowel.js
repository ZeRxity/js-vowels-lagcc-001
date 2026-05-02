'use strict';

var isAVowel = function(char){
  const vowel=['a','e','i','o','u']
  return vowel.includes(char);

};

module.exports = isAVowel;
let char='o'
console.log(isAVowel(char));