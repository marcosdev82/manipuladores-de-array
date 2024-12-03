// Construtor de array com um único parâmetro
// Arrays podem ser criados usando um construtor com um único parâmetro numérico. 
// Um array é criado com sua lengthpropriedade definida para esse número, e os elementos do array são slots vazios.

const arrayEmpty = new Array(2);

console.log(arrayEmpty.length); // 2
console.log(arrayEmpty[0]); // undefined; actually, it is an empty slot
console.log(0 in arrayEmpty); // false
console.log(1 in arrayEmpty); // false


const arrayOfOne = new Array("2"); // Not the number 2 but the string "2"

console.log(arrayOfOne.length); // 1
console.log(arrayOfOne[0]); // "2"
