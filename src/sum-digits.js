const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let str = ''+n
  const sum = (str) => {
      let summ = 0
      for (let i of str) {
          summ += +i
      }
      return ''+summ
  }
  while (str.length > 1){
      str = sum(str)
  }

  return +str
}

module.exports = {
  getSumOfDigits
};
