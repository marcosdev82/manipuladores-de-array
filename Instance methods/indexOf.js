// O indexOf() método de Arrayinstâncias retorna o primeiro índice no qual um determinado 
// elemento pode ser encontrado na matriz, ou -1 se ele não estiver presente.

const beasts = ["ant", "bison", "camel", "duck", "bison"];

console.log(beasts.indexOf("bison"));
// Expected output: 1

// Start from index 2 
console.log(beasts.indexOf("bison", 2));
// Expected output: 4

console.log(beasts.indexOf("giraffe"));
// Expected output: -1

console.log('----------------------')

const array = [2, 9, 9, 9, 3];
console.log(array.indexOf(2)); // 0
console.log(array.indexOf(7)); // -1
console.log(array.indexOf(9, 2)); // 2
console.log(array.indexOf(2, -1)); // -1
console.log(array.indexOf(2, -3)); // 0
