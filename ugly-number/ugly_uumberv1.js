const nthUglyNumber = function (n, a, b, c) {
  const result = [];
  const base = [a, b, c];
  base.sort((a, b) => a - b);
  console.log({ base });
  let curr = base[0];
  while (result.length < n) {
    if (
      (curr % a === 0 || curr % b === 0 || curr % c === 0) &&
      !result.includes(curr)
    ) {
      result.push(curr);
    }
    ++curr;
  }
  // console.log(result);
  return result[n - 1];
};

console.log("----> ", nthUglyNumber(5, 2, 11, 13));
