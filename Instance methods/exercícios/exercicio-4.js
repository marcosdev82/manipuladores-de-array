// ##  Exercício 3: Filtrar produtos disponíveis e listar nomes ordenados

// Você tem um **objeto de produtos**, onde cada chave é um código do produto e o valor é um objeto com `nome`, `preco` e `disponivel`.

// ### Objetivo

// 1. Obter as **chaves** dos produtos usando `Object.keys()`
// 2. **Filtrar** os produtos disponíveis (`disponivel: true`) usando `filter()`
// 3. Obter apenas os **nomes** dos produtos disponíveis
// 4. **Ordenar** os nomes em ordem alfabética usando `sort()`
// 5. Usar um **iterator** e `next()` para exibir os nomes um a um

const produtos = {
    p01: { nome: "Camisa", preco: 79.9, disponivel: true },
    p02: { nome: "Calça", preco: 129.9, disponivel: false },
    p03: { nome: "Tênis", preco: 199.9, disponivel: true },
    p04: { nome: "Boné", preco: 49.9, disponivel: true },
};
console.log(produtos)

// // 1. Obter as **chaves** dos produtos usando `Object.keys()`
// const codigos = Object.keys(produtos);
// console.log(codigos)

// // 2. **Filtrar** os produtos disponíveis (`disponivel: true`) usando `filter()`
// const disponivel = codigos.map((codigo) => produtos[codigo])
// console.log(disponivel)
// console.log(disponivel.filter((produto) => produto.disponivel == true))

// // 3. Obter apenas os **nomes** dos produtos disponíveis
// const nomes = disponivel.map((produto) => produto.nome)
// console.log(nomes)

// // 4. **Ordenar** os nomes em ordem alfabética usando `sort()`
// console.log(nomes.sort())

// // 5. Usar um **iterator** e `next()` para exibir os nomes um a um
// // console.log(produtos.next())


// // 1. Obter as **chaves** dos produtos usando `Object.keys()`
const codigos = Object.keys(produtos)
console.log(codigos)

// // 2. **Filtrar** os produtos disponíveis (`disponivel: true`) usando `filter()`
const produtosFiltrados = codigos.map((codigo) => produtos[codigo])
console.log(produtosFiltrados)
const disponivel = produtosFiltrados.filter((produto) => produto.disponivel === true)
console.log(disponivel)
// // 3. Obter apenas os **nomes** dos produtos disponíveis
const nomesProdutos = produtosFiltrados.map((produto) => produto.nome )
console.log(nomesProdutos)
// // 4. **Ordenar** os nomes em ordem alfabética usando `sort()`
console.log(nomesProdutos.sort())
// // 5. Usar um **iterator** e `next()` para exibir os nomes um a um
const iterator = nomesProdutos.values()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
