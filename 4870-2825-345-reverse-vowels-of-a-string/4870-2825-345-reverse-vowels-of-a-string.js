/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const standardVowles = ['a', 'e', 'i', 'o', 'u'];
  let vow = '';
  let result = ''


  for (let char of s) {
    if (standardVowles.includes(char.toLowerCase())) {
      vow+=char
    }
  }

  let reversedVow = vow.split('').reverse()

  for(let char of s) {
    if(standardVowles.includes(char.toLowerCase())) {
      result+=reversedVow[0]
      reversedVow = reversedVow.slice(1)
      continue;
    }

    result+=char
  }  

  return result;
};