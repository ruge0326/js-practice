function lastStoneWeight(weights) {
  while (weights.length >= 2) {
    //console.log({ weights });
    weights.sort((a, b) => b - a);
    const [a, b, ...rest] = weights;
    const next = a - b;
    //console.log({ a, b, next, rest });
    if (rest.length === 0 && next === 0) {
      weights = [0];
      break;
    } else if (next === 0) {
      weights = [...rest];
    } else {
      weights = [next, ...rest];
    }
  }
  return weights[0];
}

console.log(lastStoneWeight([1, 2, 3, 6, 7, 7])); // 0
console.log(lastStoneWeight([2, 4, 5])); // 1
