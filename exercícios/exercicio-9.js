// Exercício 1 – Soma de Números
// // Objetivo: Some todos os números do array.
// let numeros1 = [1, 2, 3, 4, 5];
// const soma = numeros1.reduce((acc, curr) => acc + curr, 0);
// console.log('Soma:', soma); // Resultado esperado: 15

// // Exercício 2 – Contar ocorrências de uma palavra
// // Objetivo: Conte quantas vezes a palavra "sim" aparece no array.
// const respostas = ['sim', 'não', 'sim', 'sim', 'não', 'sim'];
// const quantidadeSim = respostas.reduce((acc, palavra) => palavra === 'sim' ? acc + 1 : acc, 0);
// console.log('Quantidade de "sim":', quantidadeSim); // Resultado esperado: 4

// // Exercício 3 – Transformar array em objeto
// // Objetivo: Transforme o array em um objeto onde a chave é o número e o valor é seu quadrado.
// const numeros2 = [1, 2, 3, 4];
// const objetoQuadrados = numeros2.reduce((obj, num) => {
//    obj[num] = num * num;
//    return obj;
// }, {});
// console.log('Objeto com quadrados:', objetoQuadrados); // Resultado esperado: {1: 1, 2: 4, 3: 9, 4: 16}

// // Exercício 4 – Flatten de array
// // Objetivo: Transforme um array de arrays em um único array.
// const arrays = [[1, 2], [3, 4], [5]];
// const arrayUnico = arrays.reduce((acc, curr) => acc.concat(curr), []);
// console.log('Array achatado:', arrayUnico); // Resultado esperado: [1, 2, 3, 4, 5]

// // Exercício 5 – Contar caracteres em uma string
// // Objetivo: Conte a quantidade de vezes que cada letra aparece.
// const palavra = 'banana';
// const contagemLetras = palavra.split('').reduce((acc, letra) => {
//    acc[letra] = (acc[letra] || 0) + 1;
//    return acc;
// }, {});
// console.log('Contagem de letras:', contagemLetras); // Resultado esperado: { b: 1, a: 3, n: 2 }

//  6. Agrupar objetos por uma propriedade

// const pessoas = [
//   { nome: 'Ana', idade: 20 },
//   { nome: 'João', idade: 20 },
//   { nome: 'Maria', idade: 30 }
// ];
// const agrupado = pessoas.reduce((acc, pessoa) => {
//   const chave = pessoa.idade;
//   acc[chave] = acc[chave] || [];
//   acc[chave].push(pessoa);
//   return acc;
// }, {});

//Resultado:
// {
//   20: [{nome: 'Ana'...}, {nome: 'João'...}],
//   30: [{nome: 'Maria'...}]
// }

// 7. Remover duplicatas
// const comDuplicatas = [1, 2, 2, 3];
// const semDuplicatas = comDuplicatas.reduce((acc, val) => {
//   if (!acc.includes(val)) acc.push(val);
//   return acc;
// }, []);
// Resultado: [1, 2, 3]



// Objetivo: Some todos os números do array.
const soma = [1, 2, 3, 4, 5];

const somaArray = soma.reduce((acc, curr) => acc + curr, 0)
console.log(somaArray)

// // Exercício 2 – Contar ocorrências de uma palavra
// // Objetivo: Conte quantas vezes a palavra "sim" aparece no array.
const respostas = ['sim', 'não', 'sim', 'sim', 'não', 'sim'];

const countWords = respostas.reduce((acc, curr) => (curr === 'sim')? acc + 1 : acc, 0)
console.log(countWords)

// // Exercício 3 – Transformar array em objeto
// // Objetivo: Transforme o array em um objeto onde a chave é o número e o valor é seu quadrado.
const numeros2 = [1, 2, 3, 4];

const arrInObj = numeros2.reduce((obj, num) => {
   obj[num] = num * num
   return obj;
}, {})
console.log(arrInObj)

// // Exercício 4 – Flatten de array
// // Objetivo: Transforme um array de arrays em um único array.
const arrays = [[1, 2], [3, 4], [5]];

const flatten = arrays.reduce((arr, num) => {
   return arr.concat(num) 
}, [])
console.log(flatten)

// // Exercício 5 – Contar caracteres em uma string
// // Objetivo: Conte a quantidade de vezes que cada letra aparece.
const palavra = 'banana';

const countLetter = [...palavra].reduce((total, letter) => {
   total[letter] = (total[letter] || 0) + 1
   return total;
}, {})
console.log(countLetter)

//  6. Agrupar objetos por uma propriedade

const pessoas = [
   { nome: 'Ana', idade: 20 },
   { nome: 'João', idade: 20 },
   { nome: 'Maria', idade: 30 }
];
const agrupado = pessoas.reduce((acc, pessoa) => {
   const chave = pessoa.idade;
   acc[chave] = acc[chave] || [];
   acc[chave].push(pessoa);
   return acc;
}, {});

console.log(agrupado)

const string = 'Success';

const strCode = [...string.toLowerCase()].reduce((acc, char, i, arr) => {
   const symbol = arr.indexOf(char) === arr.lastIndexOf(char) ? '(' : ')';
   return acc + symbol;
}, '');
console.log(strCode)