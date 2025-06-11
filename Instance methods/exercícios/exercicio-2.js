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

// - Combinar dois arrays usando `concat`
const grupo = grupo1.concat(grupo2)
console.log(grupo)

// - Filtrar elementos com `filter`
const notNull = grupo.filter((pessoa) => pessoa.idade === null )
console.log(notNull)

// - Verificar uma condição com `every`
const allIdade = grupo.every((nome) => typeof nome.idade ===  "number")
console.log(allIdade)

// - Adicionar novos elementos com `push`
const newArray = grupo.push({nome: 'Thiago', idade: 40})
console.log(newArray, grupo)