// 🎯 Objetivo:
// Encontre o primeiro usuário ativo usando find().

// Encontre o índice do primeiro usuário inativo usando findIndex().

// Encontre o último usuário ativo usando findLast().

// Encontre o índice do último usuário inativo usando findLastIndex().

const usuarios = [
  { id: 1, nome: "Ana", ativo: false },
  { id: 2, nome: "Bruno", ativo: true },
  { id: 3, nome: "Carlos", ativo: false },
  { id: 4, nome: "Daniela", ativo: true },
  { id: 5, nome: "Eduarda", ativo: false }
];

// // Encontre o primeiro usuário ativo usando find().
// console.log(usuarios.find((usuario) => usuario.ativo === true))

// // Encontre o índice do primeiro usuário inativo usando findIndex().
// console.log(usuarios.findIndex((usuario) => usuario.ativo === false))

// // Encontre o último usuário ativo usando findLast().
// console.log(usuarios.findLast((usuario) => usuario.ativo === true))

// // Encontre o índice do último usuário inativo usando findLastIndex().
// console.log(usuarios.findLastIndex((usuario) => usuario.ativo === true ))


// Encontre o primeiro usuário ativo usando find().
console.log(usuarios.find((usuario) => usuario.ativo === true))

// Encontre o índice do primeiro usuário inativo usando findIndex().
console.log(usuarios.findIndex((usuario) => usuario.ativo === false))

// Encontre o último usuário ativo usando findLast().
console.log(usuarios.findLast((usuario) => usuario.ativo === true))

// Encontre o índice do último usuário inativo usando findLastIndex().
console.log(usuarios.findLastIndex((usuario) => usuario.ativo === false))
console.log(usuarios.findLastIndex((usuario) => usuario.ativo === false))

