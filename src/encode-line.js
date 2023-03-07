const {NotImplementedError} = require('../extensions/index.js');

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
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    char = ''
    for (let i of s) {
        if (i == char[char.length - 1]) {
            char += i
        } else {
            char += ('_' + i)
        }
    }

    let ans = char.split('_')
    result = ''
    for (let i of ans) {
        if (i.length > 1) {
            result += (i.length + i[0])
        } else {
            result += i
        }
    }
    return result
}

module.exports = {
    encodeLine
};

