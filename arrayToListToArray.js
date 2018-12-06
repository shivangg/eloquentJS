function arrayToList(arr) {
  if (arr.length === 1) {
    list = {
      "value": arr[0],
      "rest": null
    };
  } else {
    list = {
      "value": arr[0],
      "rest": arrayToList(arr.slice(1))
    };
  }
  return list;
}

function listToArray(list) {
  let arr = [];
  while (list !== null) {
    arr.push(list["value"]);
    list = list.rest;
  }
  return arr;
}

function prepend(element, list) {
  return {
    "value": element,
    "rest": list
  };
}

function nth(list, number) {
  if (list === null) {
    return undefined;
  } else if(number === 0) {
    return list.value;
  } else {
    return nth(list.rest, number - 1);
  }
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([101, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));
