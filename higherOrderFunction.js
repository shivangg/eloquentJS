let loop = ( value, test, update, action ) => {
  while ( test( value )){
    action( value );
    value = update( value );
  } 
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

function every(array, test) {
  // return !array.map(test).some(x => x === false);
  return !array.some(x => !test(x))
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true