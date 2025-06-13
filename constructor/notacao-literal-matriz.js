const fruits = ["Apple", "Banana"];

console.log(fruits.length); // 2
console.log(fruits[0]); // "Apple"
console.log(Array('2').length)  // inseri um valor na primeira posição do array [ '2' ]


// Três forma de transformar uma string em array
console.log(Array.from('marcos'))
console.log([...'marcos'])
console.log('marcos'.split(''))