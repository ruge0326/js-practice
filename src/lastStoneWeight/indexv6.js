function lastStoneWeight(weights) {
  while (weights.length > 1) {
    weights.sort((a, b) => a - b);
    const a = weights.pop();
    const b = weights.pop();
    if (a !== b) weights.push(a - b);
  }
  return weights.length === 0 ? 0 : weights[0];
}

console.log(lastStoneWeight([1, 2, 3, 6, 7, 7])); // 0
console.log(lastStoneWeight([2, 4, 5])); // 1

// //const [a, b, ...rest] = weights;
