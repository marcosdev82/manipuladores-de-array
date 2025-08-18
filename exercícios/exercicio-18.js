// Cada exercício exige **raciocínio lógico** e conhecimento de ES6+.

// ---

// ### 💻 Estrutura base (em todos os exercícios):

// ```js
// const produtos = [
//   { id: 1, nome: 'Notebook', preco: 3500, estoque: 12 },
//   { id: 2, nome: 'Smartphone', preco: 2200, estoque: 0 },
//   { id: 3, nome: 'Monitor', preco: 1200, estoque: 7 },
//   { id: 4, nome: 'Teclado', preco: 150, estoque: 24 },
//   { id: 5, nome: 'Mouse', preco: 100, estoque: 30 },
// ];
// ```

// ---

// ## 🧠 Exercício 1 — Usando `.some()`

// **Verifique se existe algum produto sem estoque e retorne uma mensagem apropriada.**

// ```js
// // Exercício 1
// const temSemEstoque = produtos.some(produto => produto.estoque === 0);

// console.log(
//   temSemEstoque
//     ? 'Há pelo menos um produto sem estoque.'
//     : 'Todos os produtos estão disponíveis.'
// );
// ```

// ---

// ## 🔄 Exercício 2 — Usando `.map()`

// **Crie um novo array com os produtos, incluindo uma nova propriedade chamada `disponivel`, que será `true` se o estoque for maior que 0.**

// ```js
// // Exercício 2
// const produtosComDisponibilidade = produtos.map(produto => ({
//   ...produto,
//   disponivel: produto.estoque > 0
// }));

// console.log(produtosComDisponibilidade);
// ```

// ---

// ## ⛔ Exercício 3 — Usando `break`

// **Percorra os produtos com um `for` e pare a execução quando encontrar o primeiro produto com estoque 0. Exiba seu nome.**

// ```js
// // Exercício 3
// for (let i = 0; i < produtos.length; i++) {
//   if (produtos[i].estoque === 0) {
//     console.log(`Produto sem estoque encontrado: ${produtos[i].nome}`);
//     break;
//   }
// }
// ```

// ---

// ## 🧮 Exercício 4 — Combinação avançada (`map` + lógica extra)

// **Crie um array com os nomes dos produtos, mas se o preço for maior que 2000, adicione " (caro)" ao nome.**

// ```js
// // Exercício 4
// const nomesComClassificacao = produtos.map(produto => {
//   const ehCaro = produto.preco > 2000;
//   return ehCaro ? `${produto.nome} (caro)` : produto.nome;
// });

// console.log(nomesComClassificacao);
// ```

// ---

// ## 🧠 Exercício 5 — Usando `.every()`

// **Verifique se todos os produtos têm estoque acima de 5 unidades.**

// ```js
// // Exercício 5
// const todosComEstoqueSuficiente = produtos.every(produto => produto.estoque > 5);

// console.log(
//   todosComEstoqueSuficiente
//     ? 'Todos os produtos têm estoque acima de 5.'
//     : 'Algum produto tem estoque igual ou abaixo de 5.'
// );
// ```

// ---

// ## 💰 Exercício 6 — Usando `.reduce()`

// **Calcule o valor total de todos os produtos no estoque (preço \* estoque).**

// ```js
// // Exercício 6
// const valorTotalEstoque = produtos.reduce((total, produto) => {
//   return total + (produto.preco * produto.estoque);
// }, 0);

// console.log(`Valor total em estoque: R$ ${valorTotalEstoque}`);
// ```

// ---

// ## 🔍 Exercício 7 — Usando `.filter()`

// **Crie um novo array com apenas os produtos que custam menos de R\$1000.**

// ```js
// // Exercício 7
// const produtosBaratos = produtos.filter(produto => produto.preco < 1000);

// console.log('Produtos com preço abaixo de R$1000:', produtosBaratos);
// ```

// ---

// ## 🎯 Exercício 8 — Usando `.find()`

// **Encontre o primeiro produto com mais de 20 unidades em estoque.**

// ```js
// // Exercício 8
// const produtoComMuitoEstoque = produtos.find(produto => produto.estoque > 20);

// if (produtoComMuitoEstoque) {
//   console.log('Produto com estoque > 20 encontrado:', produtoComMuitoEstoque.nome);
// } else {
//   console.log('Nenhum produto com estoque acima de 20.');
// }
// ```

// --------------------------------------------------------------------

// ### 💻 Estrutura base (em todos os exercícios):


const produtos = [
    { id: 1, nome: 'Notebook', preco: 3500, estoque: 12 },
    { id: 2, nome: 'Smartphone', preco: 2200, estoque: 0 },
    { id: 3, nome: 'Monitor', preco: 1200, estoque: 7 },
    { id: 4, nome: 'Teclado', preco: 150, estoque: 24 },
    { id: 5, nome: 'Mouse', preco: 100, estoque: 30 },
];


// Exercício 1 — Usando `.some()`

// Verifique se existe algum produto sem estoque e retorne uma mensagem apropriada.

const hasStoque = produtos.some((produto) => produto.estoque === 0)

if (hasStoque) {
    console.log(`Há produto sem estoque`)
}


// ## 🔄 Exercício 2 — Usando `.map()`

// **Crie um novo array com os produtos, incluindo uma nova propriedade chamada `disponivel`, que será `true` se o estoque for maior que 0.**

const novoArray = produtos.map((produto) => ({
    ...produto,
    disponivel: produto.estoque > 0
}))
console.log(novoArray)

// ## ⛔ Exercício 3 — Usando `break`

// **Percorra os produtos com um `for` e pare a execução quando encontrar o primeiro produto com estoque 0. Exiba seu nome.**

for(let produto of produtos) {
    if (produto.estoque === 0){
        console.log(produto.nome)
        break
    }
}

// ## 🧮 Exercício 4 — Combinação avançada (`map` + lógica extra)

// **Crie um array com os nomes dos produtos, mas se o preço for maior que 2000, adicione " (caro)" ao nome.**
const produtosBaratos = produtos.map((produto) => {
    return `${produto.nome} ${(produto.preco > 2000)? '(caro)' : ''}`
})
console.log(produtosBaratos)

// ## 🧠 Exercício 5 — Usando `.every()`

// **Verifique se todos os produtos têm estoque acima de 5 unidades.**
console.log(produtos.every((produto) => produto.estoque > 5))

// ## 💰 Exercício 6 — Usando `.reduce()`

// **Calcule o valor total de todos os produtos no estoque (preço \* estoque).**

const total = produtos.reduce((total, produto) => total + produto.preco , 0).toFixed(2)
console.log(`Valor total é R$ ${total}`)

// ## 🔍 Exercício 7 — Usando `.filter()`

// **Crie um novo array com apenas os produtos que custam menos de R\$1000.**

const arrayAcima = produtos.filter((produto) => produto.preco > 1000)
console.log(arrayAcima)

// ## 🎯 Exercício 8 — Usando `.find()`

// **Encontre o primeiro produto com mais de 20 unidades em estoque.**
const unidade = produtos.find((produto)=> produto.estoque > 20)
console.log(unidade)