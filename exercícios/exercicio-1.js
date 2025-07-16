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

// 1. Arrays iniciais de alunos
let alunosTurmaA = ["Ana", "Bruno", "Carlos"];
let alunosTurmaB = ["Diana", "Eduardo", "Fernanda"];

const todasAsTurmas = alunosTurmaA.concat(alunosTurmaB)
console.log(todasAsTurmas)

// 2. Adicionar um novo aluno ao final da lista.
let novaListaAlunos = todasAsTurmas.push("Marcos")
console.log(todasAsTurmas)

// 3. Exibir o primeiro e o último aluno da nova lista utilizando `at()`.
console.log(todasAsTurmas.at(0) + ', ' + todasAsTurmas.at(-1))

// 4. Iterar sobre a lista usando `for..in`, exibindo o índice e o nome do aluno.
for (let key in todasAsTurmas) {
  console.log(todasAsTurmas[key])
}

// 5. Utilizar `Object.entries()` para transformar o array em pares `[índice, nome]` e imprimir cada par.
const entries = Object.entries(todasAsTurmas);
console.log(entries)