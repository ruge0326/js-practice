const auxIsHappy = (n, buffer) => {
  const sum = [...String(n)].reduce((acc, curr) => acc + Math.pow(curr, 2), 0);
  if (buffer[sum]) return false;
  if (sum === 1) return true;
  return auxIsHappy(sum, { ...buffer, [sum]: true });
};

/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
  return auxIsHappy(n, {});
};

console.log(isHappy(16));
