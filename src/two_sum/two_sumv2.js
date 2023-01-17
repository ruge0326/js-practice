/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const size = nums.length;
  let solution = [-1, -1];
  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      if (nums[i] + nums[j] === target) {
        solution = [i, j];
        break;
      }
    }
  }
  return solution;
};

// // console.log("==============&==============");
// // console.log("==============&==============");
console.log(
  twoSum(
    [
      9912, 9913, 9914, 9915, 9916, 9917, 9918, 9919, 9920, 9921, 9922, 9923,
      9924, 9925, 9926, 9927, 9928, 9929, 9930, 9931, 9932, 9933, 9934, 9935,
      9936, 9937, 9938, 9939, 9940, 9941, 9942, 9943, 9944, 9945, 9946, 9947,
      9948, 9949, 9950, 9951, 9952, 9953, 9954, 9955, 9956, 9957, 9958, 9959,
      9960, 9961, 9962, 9963, 9964, 9965, 9966, 9967, 9968, 9969, 9970, 9971,
      9972, 9973, 9974, 9975, 9976, 9977, 9978, 9979, 9980, 9981, 9982, 9983,
      9984, 9985, 9986, 9987, 9988, 9989, 9990, 9991, 9992, 9993, 9994, 9995,
      9996, 9997, 9998, 9999, 10000,
    ],
    19999
  )
);

// https://leetcode.com/problems/two-sum/solutions/127810/two-sum/

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
