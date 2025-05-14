# Manipuladores de Array / Instance methods
# 🧠 Exercício de JavaScript: Manipulação de Arrays

Este repositório contém um exercício prático em JavaScript com foco em manipulação de arrays e iteração de dados. O exercício utiliza os seguintes recursos da linguagem:

- `for..in`
- `concat()`
- `at()`
- `push()`
- `Object.entries()`

## 📋 Descrição do Exercício

Você tem duas listas (arrays) com nomes de alunos de duas turmas diferentes. O desafio é realizar as seguintes operações:

1. Concatenar as duas listas em uma única lista.
2. Adicionar um novo aluno ao final da lista.
3. Exibir o primeiro e o último aluno da nova lista utilizando `at()`.
4. Iterar sobre a lista usando `for..in`, exibindo o índice e o nome do aluno.
5. Utilizar `Object.entries()` para transformar o array em pares `[índice, nome]` e imprimir cada par.

## 🧪 Código do Exercício

```javascript
// 1. Arrays iniciais de alunos
let alunosTurmaA = ["Ana", "Bruno", "Carlos"];
let alunosTurmaB = ["Diana", "Eduardo", "Fernanda"];

// 2. Concatenar os arrays
let todosAlunos = alunosTurmaA.concat(alunosTurmaB);

// 3. Adicionar novo aluno
todosAlunos.push("Gustavo");

// 4. Exibir o primeiro e o último aluno usando at()
console.log("Primeiro aluno:", todosAlunos.at(0));
console.log("Último aluno:", todosAlunos.at(-1));

// 5. Iterar com for..in
console.log("\nLista de alunos (for..in):");
for (let index in todosAlunos) {
  console.log(`Índice ${index}: ${todosAlunos[index]}`);
}

// 6. Usar Object.entries para exibir pares [índice, nome]
console.log("\nLista de alunos (Object.entries):");
for (let [index, nome] of Object.entries(todosAlunos)) {
  console.log(`Par [${index}, ${nome}]`);
}
