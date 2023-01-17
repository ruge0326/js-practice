/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  console.log({ s });
  const letters = s.split("");
  let pending = false;
  let result = {
    value: s,
  };
  do {
    result = letters.reduce(
      (acc, curr) => {
        const subLetters = acc.value.split("");
        const last = subLetters.pop() || "";
        if (curr !== last)
          return {
            pending: false,
            value: acc.value + curr,
          };
        return {
          pending: true,
          value: subLetters.join(""),
        };
      },
      {
        pending: false,
        value: "",
      }
    );
    pending = result.pending && result.value.length !== 0;
    console.log({ result });
  } while (pending);

  return result.value;
};

// console.log(removeDuplicates("abbaca"));
console.log(removeDuplicates("aaaaaaaa"));
