/**
 * @param {number[]} cards
 * @return {number}
 */
var minimumCardPickup = function (cards) {
  const buffer = {};
  const stack = [];
  for (let card of cards) {
    stack.push(card);
    if (buffer[card]) {
      break;
    } else {
      buffer[card] = card;
    }
  }
  return stack.length === cards.length ? -1 : stack.length;
};

console.log(minimumCardPickup([3, 4, 2, 3, 4, 7]));
