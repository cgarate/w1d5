
function max(arr) {
  var theMax = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > arr[theMax]) {
      theMax = i;
    }
  }
  return arr[theMax];

}

function maxProfit(anArray) {

  var profit = 0;
  var temp = 0;

  var result = anArray.map( function (v, i, a) {
  profit = 0;
  for (var x = i+1; x < a.length; x++) {

    temp = v - a[x];
    if (temp < profit) {
      profit = temp;
    }
  }
  // convert number to positive
  return profit * (-1);

  })

  return result;

}

console.log(max(maxProfit([45,24,35,31,40,38,11])));