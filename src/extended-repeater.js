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
// function repeater(str, options) {
//   const repeatTimes = options.repeatTimes || 1;
//   const separator = options.separator || '+';
//   const addition =
//     options.addition === undefined ? '' : String(options.addition);
//   const additionRepeatTimes = options.additionRepeatTimes || 1;
//   const additionSeparator = options.additionSeparator || '|';

//   const repeatedAddition = Array(additionRepeatTimes)
//     .fill(addition)
//     .join(additionSeparator);
//   const repeatedString = Array(repeatTimes)
//     .fill(str + repeatedAddition)
//     .join(separator);

//   return repeatedString;
// }
function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition =
    options.addition === undefined ? '' : String(options.addition);
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';

  const arrayResult = [];

  for (let i = 0; i < repeatTimes; i++) {
    arrayResult.push(String(str));
    for (let j = 0; j < additionRepeatTimes; j++) {
      arrayResult.push(addition);
      if (j < additionRepeatTimes - 1) {
        arrayResult.push(additionSeparator);
      }
    }
    if (i < repeatTimes - 1) {
      arrayResult.push(separator);
    }
  }
  return arrayResult.join('');
}

module.exports = {
  repeater,
};
