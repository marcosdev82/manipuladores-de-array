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

// filter – Crie um novo array apenas com as notas maiores ou iguais a 7 (alunos aprovados).
console.log(notas.filter((nota) => nota >= 7))

// some – Verifique se algum aluno tirou nota abaixo de 5 (recuperação crítica).
console.log(notas.some((nota) => nota < 5 ))

// every – Verifique se todos os alunos tiveram nota maior que 4 (ninguém zerou a prova).
console.log(notas.every((nota) => nota > 4))

// includes – Verifique se algum aluno tirou nota 10.
console.log(notas.includes(10))

// reduce – Calcule a média da turma.
const media = notas.reduce((acc, curr) => {
    return acc + curr
}, 0) 
console.log(media / notas.length)

// fill – Suponha que a nota do 4º aluno foi perdida. Substitua a nota da posição 3 por 0 usando .fill().
console.log(notas.fill(0, 3,4))

// filter – Crie um novo array apenas com as notas maiores ou iguais a 7 (alunos aprovados).

console.log(notas.filter((nota) => nota >= 7))
