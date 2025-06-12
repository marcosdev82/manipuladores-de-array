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


// Objetivo: Some todos os números do array.
let num = [1, 2, 3, 4, 5];

const soma1 = num.reduce((acc, cur) =>{
   return acc + cur
},0)
console.log(soma1)

// Exercício 2 – Contar ocorrências de uma palavra
const respostas2 = ['sim', 'não', 'sim', 'sim', 'não', 'sim'];

const ocorrencia = respostas2.reduce((acc, curr) => { // 4
   return curr == 'sim' ? acc + 1 : acc;
}, 0)
console.log(ocorrencia)

// Exercício 3 – Transformar array em objeto
// Objetivo: Transforme o array em um objeto onde a chave é o número e o valor é seu quadrado.
const quadrado = [1, 2, 3, 4];

const obj = quadrado.reduce((obj, num) => { 
   obj[num] = num * num
   return obj
}, {})

console.log(obj)