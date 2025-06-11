// 1. Concatenar as duas listas em uma única lista.
// 2. Adicionar um novo aluno ao final da lista.
// 3. Exibir o primeiro e o último aluno da nova lista utilizando `at()`.
// 4. Iterar sobre a lista usando `for..in`, exibindo o índice e o nome do aluno.
// 5. Utilizar `Object.entries()` para transformar o array em pares `[índice, nome]` e imprimir cada par.

// 1. Arrays iniciais de alunos
let alunosTurmaA = ["Ana", "Bruno", "Carlos"];
let alunosTurmaB = ["Diana", "Eduardo", "Fernanda"];

// 1. Concatenar as duas listas em uma única lista.
const allAlunos = alunosTurmaA.concat(alunosTurmaB)
console.log(allAlunos)

// 2. Adicionar um novo aluno ao final da lista.
const newAlunos = allAlunos.push('Marcos')
console.log(newAlunos, allAlunos)

// 3. Exibir o primeiro e o último aluno da nova lista utilizando `at()`.
console.log(allAlunos.at(0))
console.log(allAlunos.at(-1))

// 4. Iterar sobre a lista usando `for..in`, exibindo o índice e o nome do aluno.
for (let aluno in allAlunos) {
  console.log(`indice: ${aluno}, nome: ${allAlunos[aluno]}` )
}
// 5. Utilizar `Object.entries()` para transformar o array em pares `[índice, nome]` e imprimir cada par.
console.log(Object.entries(allAlunos))