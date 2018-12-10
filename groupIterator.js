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
  [Symbol.iterator]() {
    this.runningLength = -1;
    return this;
  }

  next() {
    if (this.runningLength + 1 === this.value.length) {
      return {
        done: true,
        value: null
      };
    } else {
      this.runningLength += 1;
      return {
        done: false,
        value: this.value[this.runningLength]
      };
    }
  }
}
// make Group iterable
// make a groupIterator class to generate a groupIterator Object

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c