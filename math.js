
// An example of a module exporting functions.

// Flips a number's sign to Negative
function flipToNegative(n) {
  if (Math.sign(n) == 1) {
    return n * -1;
  }
  else {
    return n;
  }
}

module.exports = {
  // Returns x given a, b, and c according to the Quadratic formula.
  quadratic: function (a, b, c) {
    var result = {};

    result.x1 = (flipToNegative(b) + (Math.sqrt((Math.pow(b, 2)) - 4 * a * c))) / (2*a);
    result.x2 = (flipToNegative(b) - (Math.sqrt((Math.pow(b, 2)) - 4 * a * c))) / (2*a);

    return result;

  }
}