const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  arrToSort = []
    indexes = []
  for (let i in arr) {
      if (!(arr[i]==-1)){
          arrToSort.push(arr[i])
      }else{
          indexes.push(i)
      }
  }
  let sorted = arrToSort.sort((a, b) => a - b )

  for (const i of indexes) {
      sorted.splice(i, 0, -1)
  }
  return sorted
}

module.exports = {
  sortByHeight
};
