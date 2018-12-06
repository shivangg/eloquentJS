function deepEqual(val1, val2) {
  if (typeof val1 === "object" && typeof val2 === "object") {
    if (Object.keys(val1).length === Object.keys(val2).length) {
      for(let property of (Object.keys(val1))){
        if (!deepEqual(val1[property], val2[property]) ){
          return false;
        }
      }
    }
  } else if(val1 !== val2){
    return false;
  } 
  return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// true
