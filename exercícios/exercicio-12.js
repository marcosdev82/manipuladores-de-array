// // 1. Filter em array bidimensional onde o id for diferente de 2
// const dados = [
//   [1, 'João', '001'],
//   [2, 'Maria', '002'],
//   [3, 'Carlos', '003']
// ];

// const filtrado = dados.filter(([id, nome]) => id !== 2);
// console.log('Filtrado:', filtrado); // [[1, 'João'], [3, 'Carlos']]

// // 2. Encontre a Maria usando o Array bidimencional
// const encontrado = dados.find(([id, nome]) => nome === 'Maria');
// console.log('Encontrado:', encontrado); // [2, 'Maria']

// // 3. Conectando arrays - produtos a seus usuários
// const usuarios = [
//   { id: 1, nome: 'Ana' },
//   { id: 2, nome: 'Bruno' }
// ];

// const produtos = [
//   { nome: 'Notebook', userId: 1 },
//   { nome: 'Celular', userId: 2 },
//   { nome: 'Fone', userId: 1 }
// ];

// const produtosComUsuarios = produtos.map(produto => {
//   const usuario = usuarios.find(u => u.id === produto.userId);
//   return { ...produto, usuario: usuario?.nome };
// });

// console.log('Produtos com usuários:', produtosComUsuarios);
// /*
// [
//   { nome: 'Notebook', userId: 1, usuario: 'Ana' },
//   { nome: 'Celular', userId: 2, usuario: 'Bruno' },
//   { nome: 'Fone', userId: 1, usuario: 'Ana' }
// ]
// */

// // 4. Converter objeto em array
// const obj = { a: 1, b: 2, c: 3 };
// const emArray = Object.entries(obj);
// console.log('Objeto em array:', emArray); // [['a', 1], ['b', 2], ['c', 3]]

// // 5. Converter array em objeto
// const array = [['a', 1], ['b', 2], ['c', 3]];
// const emObjeto = Object.fromEntries(array);
// console.log('Array em objeto:', emObjeto); // { a: 1, b: 2, c: 3 }


// 1. filtrar um array bidimensional onde o id for diferente de 2
const dados = [
  [1, 'João', '001'],
  [2, 'Maria', '002'],
  [3, 'Carlos', '003']
];
console.log(dados.filter(([id, pessoa]) => id !== 2))

// 2. Encontre a Maria usando o Array bidimencional
console.log(dados.filter(([id, nome]) => nome === 'Maria'))

// 3. Conectando arrays - produtos a seus usuários
const usuarios = [
  { id: 1, nome: 'Ana' },
  { id: 2, nome: 'Bruno' }
];

const produtos = [
  { nome: 'Notebook', userId: 1 },
  { nome: 'Celular', userId: 2 },
  { nome: 'Fone', userId: 1 }
];

const carrinho = produtos.map((produto) => {
    const usuario = usuarios.find((user) => produto.userId === user.id)
    return {'usuario': usuario?.nome, ...produto}
})
console.log(carrinho)

// 4. Converter objeto em array
const obj = { a: 1, b: 2, c: 3 };
const arr = Object.entries(obj).reduce((arr, item) => {
  arr[item[0]] = item[1]
  return arr
}, [])
console.log(arr)
console.log(Array.isArray(arr))

// // 5. Converter array em objeto
const array = [['a', 1], ['b', 2], ['c', 3]];
const arrToObj = Object.fromEntries(array);
console.log(arrToObj)