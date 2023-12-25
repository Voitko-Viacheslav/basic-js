const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let number = String(n).slice(1);

  for (i = 1; i < String(n).length; i += 1) {
    let result = String(n).substring(0, i) + String(n).substring(i + 1);

    if (result > number) {
      number = result;
    }
  }

  return Number(number);
}

module.exports = {
  deleteDigit,
};
