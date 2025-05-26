// Exercício: Análise de Notas com JavaScript
// Você recebeu um array com as notas de vários alunos de uma turma. Seu objetivo é:

// const notas = [8, 7.5, 9, 6, 5.5, 10, 4, 8.5, 6.5, 9.5];
// filter – Crie um novo array apenas com as notas maiores ou iguais a 7 (alunos aprovados).

// some – Verifique se algum aluno tirou nota abaixo de 5 (recuperação crítica).

// every – Verifique se todos os alunos tiveram nota maior que 4 (ninguém zerou a prova).

// includes – Verifique se algum aluno tirou nota 10.

// reduce – Calcule a média da turma.

// fill – Suponha que a nota do 4º aluno foi perdida. Substitua a nota da posição 3 por 0 usando .fill().

// const notas = [8, 7.5, 9, 6, 5.5, 10, 4, 8.5, 6.5, 9.5];
// filter – Crie um novo array apenas com as notas maiores ou iguais a 7 (alunos aprovados).
const notas = [8, 7.5, 9, 6, 5.5, 10, 4, 8.5, 6.5, 9.5];

const result = notas.filter((nota) => nota >= 7)
console.log('Alunos aprovados:', result); // Resultado esperado: [8, 7.5, 9, 10, 8.5, 9.5]

// some – Verifique se algum aluno tirou nota abaixo de 5 (recuperação crítica).
const notaAbaixoDeCinco = result.some((nota) => nota < 5)
console.log('Algum aluno tirou nota abaixo de 5:', notaAbaixoDeCinco); // Resultado esperado: false

// every – Verifique se todos os alunos tiveram nota maior que 4 (ninguém zerou a prova).
const notaMaiorQueQuatro = result.every((nota) => nota > 4)
console.log('Todos os alunos tiveram nota maior que 4:', notaMaiorQueQuatro); // Resultado esperado: true
// includes – Verifique se algum aluno tirou nota 10.
const notaDez = result.includes(10)
console.log('Algum aluno tirou nota 10:', notaDez); // Resultado esperado: true

// reduce – Calcule a média da turma.
const media = notas.reduce((acc, curr) => acc + curr, 0) / notas.length
console.log('Média da turma:', media.toFixed(2)); // Resultado esperado: 7.55

// fill – Suponha que a nota do 4º aluno foi perdida. Substitua a nota da posição 3 por 0 usando .fill().
let novoArray = [...notas]
let arr = novoArray.fill(0, 3, 4)
console.log('Novo array com a nota do 4º aluno substituída por 0:', arr); // Resultado esperado: [8, 7.5, 9, 0, 5.5, 10, 4, 8.5, 6.5, 9.5]

