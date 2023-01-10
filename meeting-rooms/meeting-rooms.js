/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function (intervals) {
  let can = true;
  const max = intervals.length;
  if (max < 2) return can;
  intervals.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < max - 1; ++i) {
    const [a, b] = intervals[i];
    const [x] = intervals[i + 1];
    if (a <= x && x < b) {
      can = false;
      break;
    }
  }
  console.log(intervals);
  return can;
};

// [[6,15],[13,20],[6,17]]

console.log(
  canAttendMeetings([
    [13, 15],
    [1, 13],
  ])
);

// console.log(
//   canAttendMeetings([
//     [7, 10],
//     [2, 4],
//   ])
// );
