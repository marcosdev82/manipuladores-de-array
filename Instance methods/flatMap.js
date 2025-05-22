// O método flatMap() mapeia cada elemento e achata o resultado em um novo array de profundidade 1.

// Exemplo de uso:
const numeros = [1, 2, 3, 4];

// Para cada número, retorna um array com o número e seu dobro
const resultado = numeros.flatMap(num => [num, num * 2]);

console.log(resultado); // [1, 2, 2, 4, 3, 6, 4, 8]

// Exemplo prático: separar palavras de frases
const frases = ["Olá mundo", "FlatMap é útil"];
const palavras = frases.flatMap(frase => frase.split(" "));

console.log(palavras); // ["Olá", "mundo", "FlatMap", "é", "útil"]
 

// Map e flatMap
var arr1 = [1, 2, 3, 4];

console.log(arr1.map((x) => [x * 2]));
// [[2], [4], [6], [8]]

console.log(arr1.flatMap((x) => [x * 2]));
// [2, 4, 6, 8]

//  Só o primeiro nível
console.log(arr1.flatMap((x) => [[x * 2]]));
// [[2], [4], [6], [8]]
