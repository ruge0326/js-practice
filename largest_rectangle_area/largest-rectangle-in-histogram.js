/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  const max = heights.length - 1;
  if (max === 0) return heights[0];
  return heights.reduce((acc, _, index, array) => {
    if (index === max) return acc;
    const a = array[index];
    const b = array[index + 1];
    let area = a > b ? 2 * b : 2 * a;
    if (a === 0 || b === 0) {
      area = a > b ? a : b;
    }
    if (area > acc) {
      return area;
    }
    return acc;
  }, 0);
};

// Pending
