const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let count = 0
  for (const i of matrix) {
      for (const j of i) {
          if (typeof j === "string") {
              if (j === '^^') {
                  count += 1
              }
          }
      }
  }
  return count
}

module.exports = {
  countCats
};
