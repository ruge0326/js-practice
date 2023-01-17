/**
 * @param {string} s
 * @return {string}
 */

var removeDuplicates = function (s) {
  const stack = [];
  for (let char of s) {
    if (char !== stack[0]) {
      stack.unshift(char);
    } else {
      stack.shift();
    }
  }
  return stack.reverse().join("");
};
