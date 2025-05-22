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
  { nome: 'Marcos', idade: null },
];

// // - Combinar dois arrays usando `concat`
// let allgrupo = grupo1.concat(grupo2)
// console.log(allgrupo)

// // - Filtrar elementos com `filter`
// const idade = allgrupo.filter((pessoa) => pessoa.idade !== null)
// console.log(idade)

// // - Verificar uma condição com `every`
// const isNull = idade.every((idade) => idade.idade !== null )
// console.log(isNull)

// let novoGrupo = allgrupo.push({nome: 'Fabio', idade: 60})
// console.log(novoGrupo)
// console.log(allgrupo)

// Combinar dois arrays usando `concat`
const allgrupo = grupo1.concat(grupo2)
console.log(allgrupo)

// - Filtrar elementos com `filter`
console.log(allgrupo.filter((pessoa) => pessoa.idade >= 30))

// Verificar uma condição com `every`
console.log(allgrupo.every((pessoa) => typeof pessoa.idade === 'number'))

// Adicionar novos elementos com `push`
allgrupo.push({nome: 'Fabio Biba', idade: 90})
console.log(allgrupo)
