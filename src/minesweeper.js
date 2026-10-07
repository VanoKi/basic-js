const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(mine) {
  const ans = JSON.parse(JSON.stringify(mine))
  const sum = (array) => array.map(i => i === undefined ? 0 : i).reduce((acc, i) => acc + i)
  const check = (item) => item !== undefined ? item : false
  for (let i = 0; i < mine.length; i++) {
    let row = check(mine[i])
    let previousRow = check(mine[i - 1])
    let nextRow = check(mine[i + 1])
    for (let j = 0; j < row.length; j++) {
      let previousRowSum = sum([previousRow[j - 1], previousRow[j], previousRow[j + 1]])
      let currentRowSum = sum([row[j - 1], row[j + 1]])
      let nextRowSum = sum([nextRow[j - 1], nextRow[j], nextRow[j + 1]])
      ans[i][j] = sum([previousRowSum, currentRowSum, nextRowSum])
    }
  }
  return ans
}

module.exports = {
  minesweeper
};
