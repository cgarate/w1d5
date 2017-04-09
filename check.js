
// Write a function check, which, given a number, returns whether it is valid or not (according to the Luhn Algorithm).

function sum(arr) {
  var theSum = 0;

  for (i = 0; i < arr.length; i++) {
    theSum += Number(arr[i]);
  }

  return theSum;
}

function mod10(n) {
  if (n % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

function check(n) {
  var account = {};
  account.number = String(n).split(" ");
  account.arr = {};
  account.arr.one = [];
  account.arr.two = [];

  account.arr.one = String(n).split("").map( function(x) {
    return parseInt(x, 10);
  });
  account.arr.two = String(n).split("").map( function(x) {
    return parseInt(x, 10);
  });

  for (var i = account.arr.one.length-2; i >= 0; i-=2 ) {

    doubled = (account.arr.one[i] * 2);
    //console.log(splitted[i]);
    //console.log(doubled);
    if (doubled > 9 ) {
      account.arr.two[i] = doubled - 9;
    } else {
      account.arr.two[i] = doubled;
    }
  }

  account.sumDigits = sum(account.arr.two);
  account.valid = mod10(account.sumDigits);
  return account;
}

console.log(check("79927398711"));
console.log(check("79927398712"));
console.log(check("79927398713"));
console.log(check("4552550042581922"));
console.log(check("4552550042581923"));
console.log(check("4552550042581924"));

