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

// Encontre o primeiro usuário ativo usando find().
let usuarioAtivo = usuarios.find((usuario) => usuario.ativo === true )
console.log(usuarioAtivo)

// Encontre o índice do primeiro usuário inativo usando findIndex().
let usuarioInativo = usuarios.findIndex((usuario) => usuario.ativo === false)
console.log(usuarioInativo)

// Encontre o último usuário ativo usando findLast().
let ultimoAtivo = usuarios.findLast((usuario) => usuario.ativo === true)

// Encontre o índice do último usuário inativo usando findLastIndex().
let ultimoInativo = usuarios.findLastIndex((usuario) => usuario.ativo === false)
console.log(ultimoInativo)
