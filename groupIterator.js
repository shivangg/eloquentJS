class Group{
  constructor(arr){
    this.value = [];
    for(let element of arr){
      this.add(element);
    }
  }
  static from(arr){
    return new Group(arr);
  }
  add(element){
    if ( !this.has( element ) ) {
      this.value.push(element);
    }
  }
  delete(element){
    if( this.has( element ) ){
      this.value = this.value.filter(x => x !== element);
    }
  }
  has(element){
    return this.value.indexOf(element) >= 0;
  }
}
// make Group iterable
// make a groupIterator class to generate a groupIterator Object
class groupIterator{
  constructor( group ) {
    this.runningLength = -1;
    this.arr = group.value;
  }

  next() {
    if ( this.runningLength + 1 === this.arr.length ) {
      return {done: true, value: null};
    } else {
      this.runningLength += 1;
      return {done:false, value: this.arr[ this.runningLength ] };
    }
  }
}

Group.prototype[Symbol.iterator] = function () {
  return new groupIterator(this);
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c