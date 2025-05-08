// O método every() testa se todos os elementos do array passam pelo teste implementado pela função fornecida. 
// Este método retorna um valor booleano.

const estaAbaixoDoLimite = (currentValue) => currentValue === false;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(estaAbaixoDoLimite));
// Expected output: true