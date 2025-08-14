// Você tem uma lista de nomes. O objetivo é:

// 1. Exibir cada nome com seu índice usando forEach.
// 2. Verificar se todos os nomes possuem mais de 3 letras usando `every()` . 
// 3. Ordenar os nomes em ordem alfabética.
// 4. Exibir o primeiro e o último nome da lista usando `.at()`.
// 5. Mostrar uma substring com os 3 primeiros caracteres de cada nome.
// 6. Reverter a lista e exibi-la.
// 7. Exibir cada nome usando `for...of`.

// const nomes = ["Carlos", "Ana", "Beatriz", "Daniel", "Eduardo"];

// // 1. Exibir cada nome com seu índice usando forEach.
// nomes.forEach((pessoa, index) => {
//     console.log(`nome: ${pessoa}, index: ${index}`)
// });

// // 2. Verificar se todos os nomes possuem mais de 3 letras usando `every()` . 
// const strTotal = nomes.every((pessoa) => {
//     return pessoa.length > 3
// })
// console.log(strTotal)

// // 3. Ordenar os nomes em ordem alfabética.
// console.log(nomes.sort())


// const pessoas2 = [
//     { nome: "João", idade: 25 },
//     { nome: "Ana", idade: 19 },
//     { nome: "Carlos", idade: 32 },
//     { nome: "Beatriz", idade: 28 }
// ];

// console.log(pessoas2.sort((a,b) => a.idade - b.idade)) // crescente
// console.log(pessoas2.sort((a,b) => b.idade - a.idade)) // crescente


// // 4. Exibir o primeiro e o último nome da lista usando `.at()`.
// console.log(nomes.at(0), nomes.at(-1))

// // 5. Mostrar uma substring com os 3 primeiros caracteres de cada nome.
// const subString = nomes.map((pessoa) => {
//     return pessoa.substring(0,3)
// })
// console.log(subString)
// // 6. Reverter a lista e exibi-la.
// console.log(nomes.reverse())

// // 7. Exibir cada nome usando `for...of`.
// for (value of nomes) {
//     console.log(value)
// }

// ------------------------------------------------------------

// 1. Exibir cada nome com seu índice usando forEach.
const nomes = ["Carlos", "Ana", "Beatriz", "Daniel", "Eduardo"];

nomes.forEach((nome, index) => {
    console.log(`${index}:${nome}`)
})

// 2. Verificar se todos os nomes possuem mais de 3 letras usando `every()` . 
console.log(nomes.every((nome) => nome.length > 3))