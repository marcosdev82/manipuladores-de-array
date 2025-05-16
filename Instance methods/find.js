// O método find() retorna o valor do primeiro elemento do array que satisfizer a função de teste provida. Caso contrario, undefined é retornado.

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);
console.log(found); // expected output: 12

const array2 = [5, 12, 8, 130, null];

const found2 = array2.find(element => element === null)
console.log(found2)

const array3 = [
  { id: 1, nome: "Maria" },
  { id: 2, nome: null },
  { id: 3, nome: null }
];

// Encontrar o primeiro objeto onde a chave `nome` é null
const found3 = array3.find(element => element.nome === null);

console.log(found3);
// Saída: { id: 2, nome: null }
