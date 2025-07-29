// new Array()

// console.log(new Array(2))
// new Array(element1, element2)
// new Array(element1, element2, /* …, */ elementN)
// new Array(arrayLength)

// Array()
// Array(element1)
// Array(element1, element2)
// Array(element1, element2, /* …, */ elementN)
// Array(arrayLength)

// Construtor de array com um único parâmetro
// console.log('-------- Construtor de array com um único parâmetro ---------')

const arrayEmpty = new Array(5);
console.log(arrayEmpty)

console.log(arrayEmpty.length); // 2
console.log(arrayEmpty[0]); // undefined; actually, it is an empty slot
console.log(0 in arrayEmpty); // false -> o in está verificando os indices
console.log(1 in arrayEmpty); // false


// const arrayOfOne = new Array("2"); // Not the number 2 but the string "2"

// console.log(arrayOfOne.length); // 1
// console.log(arrayOfOne[0]); // "2"
