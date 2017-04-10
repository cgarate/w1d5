

var arr = [45,24,35,31,40,38,11];
var profit = 0;
var temp = 0;

console.log(arr);

var result = arr.map( function (v, i, a) {
  profit = 0;
  for (var x = i+1; x < a.length; x++) {

    temp = v - a[x];
    if (temp < profit) {
      profit = temp;
    }
  }
  return profit;

})


console.log(result);