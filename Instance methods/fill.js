// O método fill() preenche todos os valores do array a partir do 
// índice inicial a um índice final com um valor estático.

// Preencher todo o array:
[1, 2, 3].fill('🍕'); // [4, 4, 4]
//  Preencher a partir de um índice:
['🐕', '🐕', '🐕'].fill('🐶', 1); // [1, 4, 4]
// Preencher entre dois índices:
[1, 2, 3].fill(4, 1, 2); // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1); // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2); // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN); // [1, 2, 3]
Array(3).fill(4); // [4, 4, 4]
[].fill.call({ length: 3 }, 4); // {0: 4, 1: 4, 2: 4, length: 3}

console.log([1, 2, 3].fill('🍕'))
console.log(['🐕', '🐕', '🐕'].fill('🐶', 1))
console.log(Array(3).fill(4))
console.log(Array(3))

console.log(Array(3))
console.log(new Array(3))
console.log([])