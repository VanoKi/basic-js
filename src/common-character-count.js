const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(a, b) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let newA = [...new Set(a)]
  let newB = [...new Set(b)]
  let intersection = newA.filter(el => newB.includes(el))
  let dA = {}
  for (let aElement of a) {
      if (aElement in dA){
          dA[aElement] += 1
      } else {
          dA[aElement] = 1
      }
  }
  console.log(dA)

  let dB = {}
  for (let bElement of b) {
      if (bElement in dB){
          dB[bElement] += 1
      } else {
          dB[bElement] = 1
      }
  }
  console.log(dB)

  let res = 0
  for (let dBKey in dB) {
      if (dBKey in dA){
          res += dA[dBKey] > dB[dBKey] ? dB[dBKey] : dA[dBKey]
      }
  }
  return res
}

module.exports = {
  getCommonCharacterCount
};
