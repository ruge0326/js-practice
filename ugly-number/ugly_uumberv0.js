const gen = (counter = 0, base, next, list = []) => {
  console.log({ counter, base, next, list });
  let multiple = (counter + 1) * base;
  while (multiple < next) {
    if (!list.includes(multiple)) list.push(multiple);
    ++counter;
    multiple = (counter + 1) * base;
  }
  return list;
};
/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
const nthUglyNumber = function (n, a, b, c) {
  // const base = {
  //   [a]: a,
  //   [b]: b,
  //   [c]: c,
  // };
  const base = [a, b, c];
  const iterators = [0, 0, 0];
  const ugly = [];
  base.forEach((curr, i) => {
    gen(n, curr, iterators[i]);
  });
  console.log(base);
};

console.log(gen(0, 2, 5, []));
console.log(gen(0, 3, 5, []));

// console.log(nthUglyNumber(10, 2, 3, 5));
