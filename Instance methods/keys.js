// O método keys() retorna um novo Array Iterator que contém as chaves para cada index do array.
var arr = ["a", "b", "c"];
var iterator = arr.keys();

// console.log(iterator.next()); // { value: 0, done: false }
// console.log(iterator.next()); // { value: 1, done: false }
// console.log(iterator.next()); // { value: 2, done: false }
// console.log(iterator.next()); // { value: undefined, done: true }


// keys iterator não ignora lacunas

var arr = ["a", , "c"];
var sparseKeys = Object.keys(arr);
var denseKeys = [...arr.keys()];

console.log(sparseKeys); // [0, 2]
console.log(denseKeys); // [0, 1, 2]