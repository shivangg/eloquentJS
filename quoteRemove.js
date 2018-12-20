let text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
// \W(')|(')\W
let exp = /^'|(\W)'|'(\W)/g;
console.log( exp.exec(text) );



console.log(text.replace( exp, '$1"$2'));
// → "I'm the cook," he said, "it's my job."