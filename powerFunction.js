/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n < 0) {
    n = -n;
    x = 1 / x;
  }
  if (n === 0) {
    return 1;
  } else if (n % 2 === 0) {
    return myPow(x * x, Math.floor(n / 2));
  } else {
    return x * myPow(x * x, Math.floor(n / 2));
  }
};

console.log(myPow(1.00001, 123456));
// 3.4368447520988745
console.log(myPow(2.00000, 0));
// 1
