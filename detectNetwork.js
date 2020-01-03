// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {

  const prefix1 = parseInt(cardNumber.slice(0, 1));
  const prefix2 = parseInt(cardNumber.slice(0, 2));
  const prefix3 = parseInt(cardNumber.slice(0, 3));
  const prefix4 = parseInt(cardNumber.slice(0, 4));
  const prefix6 = parseInt(cardNumber.slice(0, 6));
  const length = cardNumber.length;

  if ((prefix2 === 38 || prefix2 === 39) && length === 14) {
    return `Diner's Club`;
  }

  if ((prefix2 === 34 || prefix2 === 37) && length === 15) {
    return 'American Express';
  }

  if ((prefix2 >= 51 && prefix2 <= 55) && length === 16) {
    return 'MasterCard';
  }

  if ((prefix4 === 6011 || (prefix3 >= 644 && prefix3 <= 649) || prefix2 === 65) && (length === 16 || length === 19)) {
    return 'Discover';
  }

  if ((prefix4 === 5018 || prefix4 === 5020 || prefix4 === 5038 || prefix4 === 6304) && (length >= 12 && length <= 19)) {
    return 'Maestro';
  }

  if (((prefix6 >= 622126 && prefix6 <= 622925) || (prefix3 >= 624 && prefix3 <= 626) || (prefix4 >= 6282 && prefix4 <= 6288)) && (length >= 16 && length <= 19)) {
    return 'China UnionPay';
  }

  if ((prefix4 === 4903 || prefix4 === 4905 || prefix4 === 4911 || prefix4 === 4936 || prefix6 === 564182 || prefix6 === 633110 || prefix4 === 6333 || prefix4 === 6759) && (length === 16 || length === 18 || length === 19)) {
    return 'Switch';
  }

  if (prefix1 === 4 && (length === 13 || length === 16 || length === 19)) {
    return 'Visa';
  }

  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


// SLOWER TEST TIMES

// .startsWith --> slower
// mix of for loops and if statements --> slower