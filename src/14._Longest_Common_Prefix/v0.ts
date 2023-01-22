// let result = ["abc", "aa", "kk", "bb", "aaaaa"].sort();
// result = ["abc", "aa", "kk", "bb", "aaaaa"].sort((a, b) => {
//   if (a.length > b.length) return 1;
//   if (a.length < b.length) return -1;
//   return 0;
// });
// console.log({ result });

function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 1) return strs[0];
  const words = strs
    .map((s) => [...s])
    .sort((a, b) => {
      return a.length - b.length;
    });
  const first = words.shift() || [""];
  let common = "";
  first.every((s, i) => {
    if (words.every((word) => word[i] === s)) {
      return (common += s);
    }
    return false;
  });
  return common;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));
