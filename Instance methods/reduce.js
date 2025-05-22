// O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, 
// resultando num único valor de retorno.

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

// Soma de valores de um Objeto de array
var valorInicial = 0;
var soma = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(function (
  acumulador,
  valorAtual,
) {
  return acumulador + valorAtual.x;
}, valorInicial);

console.log(soma); // retorna 6
