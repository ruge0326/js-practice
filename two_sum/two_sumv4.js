/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  while (nums.length > 0) {
    const index = nums.indexOf(target - nums.pop());
    if (index !== -1) {
      return [index, nums.length];
    }
  }
};
