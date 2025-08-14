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

// --------------------------------------------------------------------