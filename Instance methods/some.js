// O some() método de Array instâncias testa se pelo menos um elemento no array passa no teste 
// implementado pela função fornecida. Retorna verdadeiro se, no array, encontrar um elemento 
// para o qual a função fornecida retorna verdadeiro; caso contrário, retorna falso. 
// Ele não modifica o array.

const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true

