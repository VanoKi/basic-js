const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let arr = []
  for (let string of domains) {
      arr.push(string.split('.').reverse())
  }
  let exp = (arrItem) => {
      expAns = []
      for (let i = 0; i <= arrItem.length; i++) {
          expAns.push('.' + (arrItem.slice(0, i)).join('.'))
      }
      return expAns
  }

  let d = {}
  for (let arrElement of arr) {
      for (let expElement of exp(arrElement).slice(1,)) {
          if (expElement in d){
              d[expElement] += 1
          } else {
              d[expElement] = 1
          }
      }
  }
  return d
}

module.exports = {
  getDNSStats
};
