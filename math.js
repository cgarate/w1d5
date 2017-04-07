
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
    result.a = a;
    result.b = b;
    result.c = c;
    result.x1 = 0;
    result.x2 = 0;

    // for (var i = 0; i < arguments.length; i++) {
    //   arguments[i] = Number(arguments[i]);
    // }
    //console.log(arguments);

    var d = b * b - 4 * a * c;
    var base = 2 * a;
    var dsqrd = Math.sqrt(d);
    if (d < 0) {
        console.log("It can't be solved")
    }
    else if (d === 0){
        var dx = (b * (-1)) / (2 * a);
        console.log("Double solution: " + dx)
    }
    else {
      result.x1 = (-b + dsqrd) / base;
      result.x2 = (-b - dsqrd) / base;
    }

    return result;

  }
}