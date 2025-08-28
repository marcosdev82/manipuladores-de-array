// 1. Concatenar as duas listas em uma única lista.
// 2. Adicionar um novo aluno ao final da lista.
// 3. Exibir o primeiro e o último aluno da nova lista utilizando `at()`.
// 4. Iterar sobre a lista usando `for..in`, exibindo o índice e o nome do aluno.
// 5. Utilizar `Object.entries()` para transformar o array em pares `[índice, nome]` e imprimir cada par.

// // 1. Arrays iniciais de alunos
// let alunosTurmaA = ["Ana", "Bruno", "Carlos"];
// let alunosTurmaB = ["Diana", "Eduardo", "Fernanda"];

// // 1. Concatenar as duas listas em uma única lista.
// let alunosAll = alunosTurmaA.concat(alunosTurmaB)
// console.log(alunosAll)
// // 2. Adicionar um novo aluno ao final da lista.
// let newAlunosList = alunosAll.push('Marcos')
// console.log(alunosAll)
// // 3. Exibir o primeiro e o último aluno da nova lista utilizando `at()`.
// console.log(alunosAll.at(0))
// console.log(alunosAll.at(-1))
// console.log(alunosAll[0])
// console.log(alunosAll[alunosAll.length - 1])

// // 4. Iterar sobre a lista usando `for..in`, exibindo o índice e o nome do aluno.
// for(key in alunosAll) {
//   console.log(`indice: ${key}, nome: ${alunosAll[key]}`)
// }

// // 5. Utilizar `Object.entries()` para transformar o array em pares `[índice, nome]` e imprimir cada par.
// console.log(Object.entries(alunosAll))

//----------------------------------------------------


// 1. Concatenar as duas listas em uma única lista.

// 1. Arrays iniciais de alunos
console.log('---  Arrays iniciais de alunos ---')
let alunosTurmaA = ["Ana", "Bruno", "Carlos"];
let alunosTurmaB = ["Diana", "Eduardo", "Fernanda"];
const alunosAB = alunosTurmaA.concat(alunosTurmaB) // Não modifica array original
console.log(alunosAB)

// 2. Adicionar um novo aluno ao final da lista.
console.log('--- Adicionar um novo aluno ao final da lista ---')
console.log(alunosTurmaA)
console.log(alunosAB.push('Marcos')) // modifica o array original
console.log(alunosAB)

// 3. Exibir o primeiro e o último aluno da nova lista utilizando `at()`.
console.log('--- Exibir o primeiro e o último aluno da nova lista utilizando ---')
console.log(alunosAB.at(0), alunosAB.at(-1))

// 4. Iterar sobre a lista usando `for..in`, exibindo o índice e o nome do aluno.
console.log('--- Iterar sobre a lista usando `for..in`, exibindo o índice e o nome do aluno. ---')
for(let key in alunosAB) {
    console.log(`chave: ${key}, valor: ${alunosAB[key]}`)
}

// 5. Utilizar `Object.entries()` para transformar o array em pares `[índice, nome]` e imprimir cada par.
console.log('-- Utilizar `Object.entries()` para transformar o array em pares `[índice, nome]` e imprimir cada par. --')
const alunos = Object.entries(alunosAB)
// console.log(Array.isArray(alunos))
for(let aluno of alunos) {
    console.log(aluno[1])
}
