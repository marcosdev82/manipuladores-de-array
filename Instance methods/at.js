// O método at() recebe um valor inteiro e retorna o item referente ao index dele, 
// permitindo valores positivos ou negativos. Valores negativos contam apartir do último item do array.

const array1 = [5, 12, 8, 130, 44];
const array2 = ['a', 'b', 'c', 'd'];

let index = 2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of 2 returns 8"

index = -2;

console.log(`An index of ${index} returns ${array1.at(index)}`);
// Expected output: "An index of -2 returns 130"


index = 3
console.log(`An index of ${index} returns ${array2.at(index)}`);