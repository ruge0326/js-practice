const closing: Record<string, string> = {
  "(": ")",
  "[": "]",
  "{": "}",
};

const pairs: Record<string, string> = {
  "(": ")",
  "[": "]",
  "{": "}",
};

function isValid(s: string): boolean {
  if (s.length === 1) return false;
  const letters = [...s];
  const stack: Array<string> = [];
  let valid = true;
  letters.forEach((letter) => {
    if (closing[letter]) {
      stack.push(letter);
    } else if (pairs[stack.pop()!] !== letter) {
      valid = false;
      return;
    }
  });
  return valid && stack.length === 0;
}

console.log(isValid("()[]{}"));
console.log(isValid("(]"));
