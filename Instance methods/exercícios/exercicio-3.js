// Você tem uma lista de nomes. O objetivo é:

// 1. Exibir cada nome com seu índice usando forEach.
// 2. Verificar se todos os nomes possuem mais de 3 letras usando `every()` . 
// 3. Ordenar os nomes em ordem alfabética.
// 4. Exibir o primeiro e o último nome da lista usando `.at()`.
// 5. Mostrar uma substring com os 3 primeiros caracteres de cada nome.
// 6. Reverter a lista e exibi-la.
// 7. Exibir cada nome usando `for...of`.

// const nomes = ["Carlos", "Ana", "Beatriz", "Daniel", "Eduardo"];

// // 1. Exibir cada nome com seu índice.
// nomes.forEach((nome, indice) => console.log(`Nome: ${nome}, Indice: ${indice}`))

// // 2. Verificar se todos os nomes possuem mais de 3 letras.
// // let maiorTres = nomes.filter((nome) => nome.length > 3 )
// let maiorTres = nomes.every((nome) => nome.length > 3 )

// // 4. Exibir o primeiro e o último nome da lista usando `.at()`.
// console.log(nomes.at(0))
// console.log(nomes.at(-1))

// // 5. Mostrar uma substring com os 3 primeiros caracteres de cada nome.
// let subStr = nomes.map((nome) => nome.substr(0,3))
// console.log(subStr)

// // 6. Reverter a lista e exibi-la.
// console.log(nomes.reverse())

// // 7. Exibir cada nome usando `for...of`
// for (let key in nomes) {
//     console.log(nomes[key])
// }

// // 3. Ordenar os nomes em ordem alfabética.
// nomes.sort()
// console.log(nomes);

const nomes = ["Carlos", "Ana", "Beatriz", "Daniel", "Eduardo"];
// 1. Exibir cada nome com seu índice usando forEach.
nomes.forEach((value, index) => {
    console.log(`Indice: ${index}, Valor: ${value}`)
})
// 2. Verificar se todos os nomes possuem mais de 3 letras usando `every()` . 
console.log(nomes.every((nome) => nome.length > 3))
// 3. Ordenar os nomes em ordem alfabética.
console.log(nomes.sort())
// 4. Exibir o primeiro e o último nome da lista usando `.at()`.
console.log(nomes.at(0))
console.log(nomes.at(-1))
// 5. Mostrar uma substring com os 3 primeiros caracteres de cada nome.
const str = nomes.map((nome) => nome.substring(0,3)).join(',')
console.log(str)
// 6. Reverter a lista e exibi-la.
console.log(nomes.reverse())
// 7. Exibir cada nome usando `for...of`.
for (let values of nomes) {
    console.log(values)
}