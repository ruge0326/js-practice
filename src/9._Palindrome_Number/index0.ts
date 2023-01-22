function isPalindrome(x: number): boolean {
  let isRealPalindrome = true;
  const digits = [...String(x)];
  while (digits.length > 0) {
    if (digits.length === 1) {
      isRealPalindrome = true;
      break;
    }
    const [first, last] = [digits.shift(), digits.pop()];
    if (first !== last) {
      isRealPalindrome = false;
      break;
    }
  }
  return isRealPalindrome;
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
