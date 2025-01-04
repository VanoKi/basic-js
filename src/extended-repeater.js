const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  str = String(str)
  const addition = options.addition !== undefined ? String(options.addition) : ''
  const additionRepeatTimes = options.additionRepeatTimes || 1
  const additionSeparator = options.additionSeparator || '|'
  const repeatTimes = options.repeatTimes || 1
  const separator = options.separator || '+'
  let inner = str + Array.from({length:additionRepeatTimes})
      .fill(addition)
      .join(additionSeparator)
  return Array.from({length:options.repeatTimes})
      .fill(inner)
      .join(options.separator)
}

module.exports = {
  repeater
};
