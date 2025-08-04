// - Combinar dois arrays usando `concat`
// - Filtrar elementos com `filter`
// - Verificar uma condição com `every`
// - Adicionar novos elementos com `push`

// Arrays de usuários
const grupo1 = [
  { nome: 'Ana', idade: 28 },
  { nome: 'Carlos', idade: 34 },
];

const grupo2 = [
  { nome: 'Bruna', idade: 22 },
  { nome: 'Diego', idade: 30 },
  { nome: 'Marcos', idade: null  },
];

// // - Combinar dois arrays usando `concat`
// const allGupo = grupo1.concat(grupo2)
// console.log(allGupo)

// // - Filtrar elementos com `filter`
// const obterIdade = allGupo.filter((pessoa) => pessoa.idade)
// console.log(obterIdade)

// // - Verificar uma condição com `every`
// const maioIdade = allGupo.every((pessoa) => pessoa.idade !== null)
// console.log(maioIdade)


// // - Adicionar novos elementos com `push`
// const newGrupo = allGupo.push({ nome: 'Marcos', idade: 42 })
// console.log(allGupo)

// - Combinar dois arrays usando `concat`
const grupo3 = grupo1.concat(grupo2)
console.log(grupo3)

// - Filtrar elementos com `filter`
const notNull = grupo3.filter((pessoa) => pessoa.idade !== null)
console.log(notNull)

// - Verificar uma condição com `every`
const menorTrinta = notNull.every((pessoa) => pessoa.idade < 30)
console.log(menorTrinta)

// - Adicionar novos elementos com `push`
notNull.push({ nome: 'Thiago', idade: 39})
console.log(notNull)
