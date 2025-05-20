// 1. Concatenar as duas listas em uma única lista.
// 2. Adicionar um novo aluno ao final da lista.
// 3. Exibir o primeiro e o último aluno da nova lista utilizando `at()`.
// 4. Iterar sobre a lista usando `for..in`, exibindo o índice e o nome do aluno.
// 5. Utilizar `Object.entries()` para transformar o array em pares `[índice, nome]` e imprimir cada par.

// 1. Arrays iniciais de alunos
let alunosTurmaA = ["Ana", "Bruno", "Carlos"];
let alunosTurmaB = ["Diana", "Eduardo", "Fernanda"];

// let todosAlunos = alunosTurmaA.concat(alunosTurmaB)
// console.log(todosAlunos) 

// let novoAluno = todosAlunos.push('marcos')
// console.log(todosAlunos) 
// console.log(todosAlunos.at(0))
// console.log(todosAlunos[0])
// console.log(todosAlunos.at(-1))
// console.log(todosAlunos[todosAlunos.length - 1])

// for(let indice in todosAlunos) {
//   console.log(`indice: ${indice}, nome: ${todosAlunos[indice]}`)
// }
// for(let [index, nome] of Object.entries(todosAlunos)) {
//   console.log(`indice: ${index}, nome: ${nome}`)
// }

// 1. Concatenar as duas listas em uma única lista.
const allAlunos = alunosTurmaA.concat(alunosTurmaB)
console.log(allAlunos)

// 2. Adicionar um novo aluno ao final da lista.
allAlunos.push('Marcos')
console.log(allAlunos)
// 3. Exibir o primeiro e o último aluno da nova lista utilizando `at()`.
console.log(allAlunos.at(0) + ' - ' + allAlunos.at(-1))

// 4. Iterar sobre a lista usando `for..in`, exibindo o índice e o nome do aluno.
for (let key in allAlunos) {
  console.log(`O indice do(a) ${allAlunos[key]} é ${key}`)
}
// 5. Utilizar `Object.entries()` para transformar o array em pares `[índice, nome]` e imprimir cada par.
for(let [index, nome] of Object.entries(allAlunos)) {
  console.log([index, nome])
}