 

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

// //  8. Agrupar objetos por uma propriedade

// const pessoas = [
//     { nome: 'Ana', idade: 20 },
//     { nome: 'João', idade: 20 },
//     { nome: 'Maria', idade: 30 }
// ];
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
 

 