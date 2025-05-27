// O método Array.from() cria uma nova instância de um Array quando for passado um array-like ou um iterable object como argumento.

console.log(Array.from('foo'));
// Expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], (x) => x + x));
// Expected output: Array [2, 4, 6]

// Usando um arrow function como função map para
// manipular os elementos
console.log(Array.from([1, 2, 3], (x) => x + x));