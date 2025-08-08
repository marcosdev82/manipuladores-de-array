// // 1. Use `flatMap` para transformar e achatar o array.
// // transforme em [[1, 2], [2, 4], [3, 6]] e depois em [1, 2, 2, 4, 3, 6]
// const numeros2 = [1, 2, 3];

// const transforme = numeros2.flatMap((num) => [[num, num * 1]])
// console.log(transforme.flat())

// // 2. Liste as entradas (chave e valor) do objeto abaixo.
// const produto = { nome: "Notebook", preco: 2500 };

// for (let [nome, preco] of Object.entries(produto)) {
//     console.log(`${nome}: ${preco}`)
// }

// // 3. `flatMap` – Normalizar lista de pedidos com produtos**

// // Você tem uma lista de pedidos, e cada pedido tem múltiplos produtos. Crie um único array com todos os produtos de todos os pedidos, contendo também o ID do pedido.

// const pedidos = [
//     { id: 1, produtos: ["Mouse", "Teclado"] },
//     { id: 2, produtos: ["Monitor"] },
//     { id: 3, produtos: ["HD", "SSD"] }
// ];

// const arrPedidos = pedidos.flatMap((pedido) => {
//     return pedido.produtos.map(produto => ({
//         pedidoId: pedido.id,
//         produto: produto
//     }))
// })
// console.log(arrPedidos)

// // 4. filtrar um array bidimensional onde o id for diferente de 2
// const dados = [
//   [1, 'João'],
//   [2, 'Maria'],
//   [3, 'Carlos']
// ];

// console.log(dados.filter((pessoa, index) => pessoa[0] !== 2))

// // 5. Encontre a Maria usando o Array bidimencional

// console.log(dados.find((pessoa) => pessoa[1] === 'Maria'))
// console.log(dados.find(([id, nome]) => nome === 'Maria'))

// // 6. Conectando arrays - produtos a seus usuários
// const usuarios = [
//   { id: 1, nome: 'Ana' },
//   { id: 2, nome: 'Bruno' }
// ];

// const produtos = [
//   { nome: 'Notebook', userId: 1 },
//   { nome: 'Celular', userId: 2 },
//   { nome: 'Fone', userId: 1 }
// ];

// const carrinho = produtos.map((produto) => {
//   const userProd = usuarios.find((usuario) => usuario.id === produto.userId)
//   return {...produto, 'usuario': userProd?.nome}
// })
// console.log(carrinho)

// // 7. Converter array em objeto
// const array = [['a', 1], ['b', 2], ['c', 3]];
// console.log(Object.fromEntries(array))

// console.log(array.reduce((obj, [key, value]) => {
//     obj[key] = value
//     return obj
// }, {}))

// const obj2 = {}
// for(let key in array) {
//     obj2[array[key][0]] = array[key][1]
// }
// console.log(obj2)

// const obj3 = {}
// for(let v of array) {
//     obj3[v[0]] = v[1]
// }
// console.log(obj3)

// //  8. Agrupar objetos por uma propriedade

// const pessoas = [
//     { nome: 'Ana', idade: 20 },
//     { nome: 'João', idade: 20 },
//     { nome: 'Maria', idade: 30 }
// ];
//
// const agrupado = pessoas.reduce((acc, pessoa) => {
//     const chave = pessoa.idade;
//     acc[chave] = acc[chave] || [];
//     acc[chave].push(pessoa);
//     return acc;
// }, {});

// Resultado:
// {
//   20: [{nome: 'Ana'...}, {nome: 'João'...}],
//   30: [{nome: 'Maria'...}]
// }

// 9. Ordenar os nomes em ordem alfabética e idade.

// const pessoas2 = [
//     { nome: "João", idade: 25 },
//     { nome: "Ana", idade: 19 },
//     { nome: "Carlos", idade: 32 },
//     { nome: "Beatriz", idade: 28 }
// ];

// console.log(pessoas2.sort((a,b) => a.idade - b.idade)) // crescente
// console.log(pessoas2.sort((a,b) => a.nome.localeCompare(b.nome)))


// -------------------------------------------------


// 1. Use `flatMap` para transformar e achatar o array.
// transforme em [[1, 2], [2, 4], [3, 6]] e depois em [1, 2, 2, 4, 3, 6]
const numeros2 = [1, 2, 3];

const arrQuadrado = numeros2.flatMap((arr) => {
    return [[arr, arr * 2]]
})
console.log(arrQuadrado)
console.log(arrQuadrado.flat())


// 2. Liste as entradas (chave e valor) do objeto abaixo.
const produto = { nome: "Notebook", preco: 2500 };

for (let [key, value] of Object.entries(produto)) {
    console.log(`${key}: ${value}`)
}

// 3. `flatMap` – Normalizar lista de pedidos com produtos**
// Você tem uma lista de pedidos, e cada pedido tem múltiplos produtos. Crie um único array com todos os produtos de todos os pedidos, 
// contendo também o ID do pedido.

const pedidos = [
    { id: 1, produtos: ["Mouse", "Teclado"] },
    { id: 2, produtos: ["Monitor"] },
    { id: 3, produtos: ["HD", "SSD"] }
];

const produtos = pedidos.flatMap((pedido) => {
    return pedido.produtos.map((produto) => ({
        id: pedido.id,
        produto,
    }))
})
console.log(produtos)


// 4. filtrar um array bidimensional onde o id for diferente de 2
const dados = [
    [1, 'João'],
    [2, 'Maria'],
    [3, 'Carlos']
];

console.log(dados.filter(([k,v]) => k !== 2 ))

// 5. Encontre a Maria usando o Array bidimencional
console.log(dados.find(([k,v]) => v === "Maria"))

// 6. Conectando arrays - produtos a seus usuários
const usuarios = [
    { id: 1, nome: 'Ana' },
    { id: 2, nome: 'Bruno' }
];

const produtos2 = [
    { nome: 'Notebook', userId: 1 },
    { nome: 'Celular', userId: 2 },
    { nome: 'Fone', userId: 1 }
];

const prodPedidos = produtos2.map((produto) => {
    const prodUser = usuarios.find((user) => user.id === produto.userId)
    return {...produto, 'usuario': prodUser} 
}) 
console.log(prodPedidos)

// 7. Converter array em objeto
const array = [['a', 1], ['b', 2], ['c', 3]];
console.log(Object.fromEntries(array))
const obj = array.reduce((obj, arr) => {
    obj[arr[0]] = arr[1]
    return obj
}, {})
console.log(obj)

const obj2 = {}
for(let key in array) {
    obj2[array[key][0]] = array[key][1]
}
console.log(obj2)

const obj3 = {}
for(let v of array) {
    obj3[v[0]] = v[1]
}
console.log(obj3)

//  8. Agrupar objetos por uma propriedade

const pessoas = [
    { nome: 'Ana', idade: 20 },
    { nome: 'João', idade: 20 },
    { nome: 'Maria', idade: 30 }
];

const agrupado = pessoas.reduce((obj, pessoa) => {
    const idade = pessoa.idade
    obj[idade] = obj[idade] || []
    obj[idade].push(pessoa)
    return obj;
}, {})
console.log(agrupado)


// 9. Ordenar os nomes em ordem alfabética.

const pessoas2 = [
    { nome: "João", idade: 25 },
    { nome: "Ana", idade: 19 },
    { nome: "Carlos", idade: 32 },
    { nome: "Beatriz", idade: 28 }
];

console.log(pessoas2.sort((a,b) => a.nome.localeCompare(b.nome)))