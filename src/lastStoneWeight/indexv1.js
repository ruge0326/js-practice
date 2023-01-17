function lastStoneWeight(weights) {
  if (weights.length < 2) return weights[0];
  weights.sort((a, b) => b - a);
  if (weights.length === 2) {
    const [a, b] = weights;
    return a - b;
  }
  const [a, b, ...rest] = weights;
  const next = a - b;
  if (next === 0) return lastStoneWeight([...rest]);
  return lastStoneWeight([next, ...rest]);
}

console.log(lastStoneWeight([1, 2, 3, 6, 7, 7]));
console.log(lastStoneWeight([2, 4, 5]));
