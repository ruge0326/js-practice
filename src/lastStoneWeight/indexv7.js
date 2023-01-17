function lastStoneWeight(weights) {
  while (weights.length > 1) {
    weights.sort((a, b) => b - a);
    const [a, b, ...rest] = weights;
    weights = a === b ? rest : rest.concat(a - b);
  }
  return weights[0] || 0;
}
console.log(lastStoneWeight([1, 2, 3, 6, 7, 7])); // 0
console.log(lastStoneWeight([2, 4, 5])); // 1

// //const [a, b, ...rest] = weights;
