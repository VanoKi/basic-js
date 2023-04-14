const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let ans = []
    for (let i of JSON.stringify(a)) {
      if (i !== '['  && i !== ']'){
          ans.push('')
      } else {
          ans.push(i)
      }
    }
    let sortedArr = ans.join('').split(']').sort((a, b) => a.length - b.length)
    return sortedArr[sortedArr.length - 1].length + 1
  }
}

module.exports = {
  DepthCalculator
};
