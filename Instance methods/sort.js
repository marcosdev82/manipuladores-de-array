
// O método de ordenação pode convenientemente ser usada com funções anônimas (e closures):

// Ordenar números

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers);

// ORDENANDO COM MAPA

// o array a ser ordenado
var list = ["Delta", "alpha", "CHARLIE", "bravo"];

// array temporário que armazena os objetos com o índice e o valor para ordenação
var mapped = list.map(function (el, i) {
  return { index: i, value: el.toLowerCase() };
});

// ordenando o array mapeado contendo os dados resumidos
mapped.sort(function (a, b) {
  return +(a.value > b.value) || +(a.value === b.value) - 1;
});

// container para o resultado ordenado
var result = mapped.map(function (el) {
  return list[el.index];
});

console.log(result); // [ "alpha", "bravo", "CHARLIE", "Delta" ]