const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!'
  }
  if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length > 0) {
    throw new Error('Invalid date!')
  }
  let month = date.getMonth()
  const year = {'winter': [11, 0, 1], 'spring': [2, 3, 4], 'summer': [5, 6, 7], 'autumn': [8, 9, 10]}
  for (const season in year) {
    for (const seasonElement of year[season]) {
      if (seasonElement === month) return season;
    }
  }
}

module.exports = {
  getSeason
};
