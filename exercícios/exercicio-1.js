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

const turmasAB = alunosTurmaA.concat(alunosTurmaB)
console.log(turmasAB)

// 2. Adicionar um novo aluno ao final da lista.
const turmasABatualizada = turmasAB.push('Marcos')
console.log(turmasAB)

// 3. Exibir o primeiro e o último aluno da nova lista utilizando `at()`.
console.log('Último aluno: ' + turmasAB.at(-1))
console.log('Primeiro aluno: ' + turmasAB.at(0))
// outra forma
console.log('--------- outra forma --------')

console.log('Último aluno: ' + turmasAB[turmasAB.length - 1])
console.log('Primeiro aluno: ' + turmasAB[0])

// 4. Iterar sobre a lista usando `for..in`, exibindo o índice e o nome do aluno.

for (let key in turmasAB) {
    console.log(`Indice: ${key}, Nome: ${turmasAB[key]}`)
}

// 5. Utilizar `Object.entries()` para transformar o array em pares `[índice, nome]` e imprimir cada par.
console.log(Object.entries(turmasAB))