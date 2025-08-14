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

// //1 - Combinar dois arrays usando `concat`
// const allGupo = grupo1.concat(grupo2)
// console.log(allGupo)

// //2 - Filtrar idade que não seja null com `filter`
// const obterIdade = allGupo.filter((pessoa) => pessoa.idade)
// console.log(obterIdade)

// //3 - Verificar uma condição com `every`
// const maioIdade = allGupo.every((pessoa) => pessoa.idade !== null)
// console.log(maioIdade)


// //4 - Adicionar novos elementos com `push`
// const newGrupo = allGupo.push({ nome: 'Marcos', idade: 42 })
// console.log(allGupo)

// ---------------------------------------------

//1 - Combinar dois arrays usando `concat`
const newGrupo = grupo1.concat(grupo2)
console.log(newGrupo)

//2 - Filtrar idade que não seja null com `filter`
const notNull = newGrupo.filter((pessoa) => pessoa.idade !== null)
console.log(notNull)

//3 - Verificar uma condição com `every`
const isNull = newGrupo.every((pessoa) => pessoa.idade !== null)
console.log(isNull)

//4 - Adicionar novos elementos com `push`
const novoElemento = newGrupo.push({nome: "João", idade: 23})
console.log(novoElemento)
console.log(newGrupo)