const gen = (i, x, y, acc) => {
  let n = i;
  const result = [];
  while (result.length == 0 || result[result.length - 1] < y) {
    const next = x * n;
    ++n;
    if (acc.includes(next) || result.includes(next)) continue;
    if (next > y) {
      if (!result.includes(y) || !result.includes(y)) result.push(y);
      result.push(next);
    } else {
      result.push(next);
    }
  }
  return acc.concat(result);
};

// console.log("--");
// const A = gen(1, 2, 3, []);
// console.log({ A });
// const B = gen(1, 3, 5, A);
// console.log({ B });

/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
const nthUglyNumber = function (n, a, b, c) {
  const base = [a, b, c];
  let result = [];
  let baseIndex = 1;
  let iterator = 1;
  do {
    result = gen(iterator, base[baseIndex - 1], base[baseIndex], result);
    ++baseIndex;
    if (baseIndex > 2) {
      baseIndex = 1;
      ++iterator;
    }
  } while (result.length < n);
  console.log(result);
  return result[n - 1];
};

console.log(nthUglyNumber(10, 2, 3, 5));
