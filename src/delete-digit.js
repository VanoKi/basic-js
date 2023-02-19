const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
    let arr = ('' + n).split('')
  const func = (arr, i) => {
    let ans = []
    for (let j in arr) {
        if (!(+j === +i)) {
            ans.push(arr[j])
        }
    }
    return +(ans.join(''))
  }

    let mainArr = []
    for (let i in arr) {
        mainArr.push(func(arr, i))
    }
    return Math.max.apply(null, mainArr)
}

module.exports = {
  deleteDigit
};
