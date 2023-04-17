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
    if (!Array.isArray(arr)){
      return 0
    }
    let depth = 1
    for (let i of arr) {
      let itemDepth = 1 + this.calculateDepth(i)
      if (itemDepth > depth){
        depth = itemDepth
      }
    }
    return depth
  }
}
const depthCalc = new DepthCalculator();

module.exports = {
  DepthCalculator
};
