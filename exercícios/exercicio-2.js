// - Combinar dois arrays usando `concat`
// - Filtrar elementos com `filter`
// - Verificar uma condição com `every`
// - Adicionar novos elementos com `push`

  
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

//1 - Combinar dois arrays usando `concat`
let grupo = grupo1.concat(grupo2)
console.log(grupo)

//2 - Filtrar idade > 30 `filter` e retornar o elemento
let filterIdade = grupo.filter((pessoa) => pessoa.idade > 30)
console.log(filterIdade)

//3 - Verificar uma condição com `every`
let maioIdade = grupo.find((pessoa) => pessoa.idade > 30) 

if (maioIdade) {
  console.log(`Há pessoas com mais de 30`)
}

// //4 - Adicionar novos elementos com `push`
grupo.push({
  nome: "Teste",
  idade: 42
})
console.log(grupo)