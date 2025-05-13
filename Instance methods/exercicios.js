let alunosTurmaA = ["Ana", "Bruno", "Carlos"];
let alunosTurmaB = ["Diana", "Eduardo", "Fernanda"];

// uni os arras alunosTurmaA e alunosTurmaB
let allAlunos = alunosTurmaA.concat(alunosTurmaB)
console.log(allAlunos); // ["Ana", "Bruno", "Carlos", "Diana", "Eduardo", "Fernanda"]

// adiciona um aluno ao final do array allAlunos
allAlunos2 = allAlunos.push('Marcos') // outra forma de inserir - allAlunos.concat('Marcos') // 
console.log(allAlunos); // ["Ana", "Bruno", "Carlos", "Diana", "Eduardo", "Fernanda", "Marcos"]

// exibrir o primeiro e o último aluno do array allAlunos
let primeiroALuno = allAlunos[0] // outra forma de pegar - allAlunos.at(0)
console.log(primeiroALuno); // Ana

let ultimoAluno = allAlunos[allAlunos.length - 1] // outra forma de pegar - allAlunos.at(-1)

console.log(ultimoAluno); // Marcos
allAlunos.at(0)

for (let index in allAlunos) {
  console.log(`Índice ${index}: ${allAlunos[index]}`);
}
console.log('------------------');

for (let [aluno, index] of allAlunos.entries()){
  console.log(`Índice ${index}: ${aluno}`);
}