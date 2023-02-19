const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
    const sum = (row) => {
    let summ = 0
    for (const i of row) {
        summ += i
    }
    return summ
    }
    let matrix2 = []
    for (let i of matrix) {
        matrix2.push(i[0])
    }

    let summ = 0
        lastIndex = matrix2.includes(0) ? (matrix2.lastIndexOf(0)) : matrix.length - 1
    for (const i of matrix.slice(0, lastIndex + 1)) {
        summ += sum(i)
    }
      return summ
}

module.exports = {
  getMatrixElementsSum
};
