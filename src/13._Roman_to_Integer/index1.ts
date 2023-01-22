const symbols: Record<string, number> = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s: string): number {
  const size = s.length;
  let lastValue = symbols[s[size - 1]];
  let total = lastValue;
  for (let i = size - 2; i >= 0; --i) {
    const currentValue = symbols[s[i]];
    if (currentValue < lastValue) {
      total -= currentValue;
    } else {
      total += currentValue;
    }
    lastValue = currentValue;
  }
  return total;
}

console.log(romanToInt("MCMXCIV"));
