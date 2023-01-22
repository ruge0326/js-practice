function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  return Number([...String(x)].reverse().join("")) === x;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
