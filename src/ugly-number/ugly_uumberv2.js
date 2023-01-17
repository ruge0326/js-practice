const gen = (round, number, limit, list = []) => {
  let next = 0;
  let result = [];
  while (next < limit) {
    next += (round + 1) * number;
    console.log("next", next);
    if (list.includes(next)) continue;
    result.push(next);
  }
  return result;
};

const nthUglyNumber = function (n, a, b, c) {
  let base = [a, b, c];
  let round = 0;
  let result = [a, b, c];
  do {
    base.forEach((value) => {
      const max = Math.max(...result);
      result = [...result, ...gen(round, value, max, result)];
    });
    ++round;
  } while (result.length < n);
  result.sort((a, b) => a - b);
  return result[n - 1];
};

console.log("----> ", nthUglyNumber(1000000000, 2, 217983653, 336916467));
