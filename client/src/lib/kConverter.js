/**
 * Converts a number to a string with 'k' for thousands (e.g., 1500 -> '1.5k').
 * If the number is less than 1000, returns the number as a string.
 * @param {number} num
 * @returns {string}
 */
export function kConverter(num) {
  if (num >= 1000) {
    return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + "k";
  }
  return num.toString();
}
