const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(s) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // let dict = {}
  // for (let i of s) {
  //     if (i in dict){
  //         dict[i] += 1
  //     }else{
  //         dict[i] = 1
  //     }
  // }
  //
  // let str = ''
  // for (let i in dict) {
  //     if (dict[i] > 1) {
  //         str += dict[i] + i
  //     }else{
  //         str += i
  //     }
  // }
  // return str
}

module.exports = {
  encodeLine
};
