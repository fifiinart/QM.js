const Minterm = require("./minterm.js");

/**
 * Converts a value from decimal to binary
 *
 * @param {number} value The value to convert to binary
 * @returns {string} The binary representation
 */
const decToBin = value => (value >>> 0) // Get Uint32 value
  .toString(2);

/**
 * Returns whether or not a value is in an array
 *
 * @template T
 * @param {T} value The value to look for in an array
 * @param {T[]} array The array to look for a value in
 * 
 */
function valueIn(value, array) {
  for (const compare of array) {
    if (compare == value) {
      return true;
    }

    if (value instanceof Minterm) {
      if (compare.equals(value)) {
        return true;
      }
    }
  }
  return false;
}

module.exports = {
  decToBin,
  valueIn
};