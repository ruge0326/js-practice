const isVowel = (a) => ["a", "e", "i", "o", "u"].includes(a.toLowerCase());

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const { normalized, vowels } = s.split("").reduce(
    (acc, curr) => {
      if (isVowel(curr)) {
        acc.normalized.push("");
        acc.vowels.unshift(curr);
      } else {
        acc.normalized.push(curr);
      }
      return acc;
    },
    {
      normalized: [],
      vowels: [],
    }
  );
  return normalized
    .map((char) => {
      if (char === "") return vowels.shift();
      return char;
    })
    .join("");
};
