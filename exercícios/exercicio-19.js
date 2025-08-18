// ### 🔧 Array base para todos os exercícios:

// ```js
// const produtos = [
//   { id: 1, nome: 'Notebook', preco: 3500.5, estoque: 12 },
//   { id: 2, nome: 'Smartphone', preco: 2200.99, estoque: 0 },
//   { id: 3, nome: 'Monitor', preco: 1200.75, estoque: 7 },
//   { id: 4, nome: 'Teclado', preco: 150.4, estoque: 24 },
//   { id: 5, nome: 'Mouse', preco: 100.1, estoque: 30 },
// ];
// ```

// ---

// ### ✅ Exercício 1 — Usando `.some()`

// **Verifique se existe algum produto com preço superior a R\$ 3000.**

// ```js
// const temProdutoCaro = produtos.some(p => p.preco > 3000);
// console.log(temProdutoCaro ? 'Existe produto caro.' : 'Nenhum produto acima de R$3000.');
// ```

// ---

// ### ✅ Exercício 2 — Usando `break`

// **Percorra o array com `for` e pare ao encontrar um produto com estoque 0. Mostre o nome.**

// ```js
// for (let i = 0; i < produtos.length; i++) {
//   if (produtos[i].estoque === 0) {
//     console.log(`Produto sem estoque: ${produtos[i].nome}`);
//     break;
//   }
// }
// ```

// ---

// ### ✅ Exercício 3 — Usando `.map()`

// **Crie um novo array contendo apenas nome e preço formatado com `toFixed(2)` (em reais).**

// ```js
// const nomesEPrecos = produtos.map(p => ({
//   nome: p.nome,
//   preco: `R$ ${p.preco.toFixed(2)}`
// }));
// console.log(nomesEPrecos);
// ```

// ---

// ### ✅ Exercício 4 — Usando `.sort()` por nome

// **Ordene os produtos alfabeticamente pelo nome.**

// ```js
// const ordenadosPorNome = [...produtos].sort((a, b) => a.nome.localeCompare(b.nome));
// console.log(ordenadosPorNome);
// ```

// ---

// ### ✅ Exercício 5 — Usando `.sort()` por valor

// **Ordene os produtos do mais barato para o mais caro.**

// ```js
// const ordenadosPorPreco = [...produtos].sort((a, b) => a.preco - b.preco);
// console.log(ordenadosPorPreco);
// ```

// ---

// ### ✅ Exercício 6 — Usando `.toReversed()`

// **Crie uma cópia do array de produtos na ordem inversa (sem modificar o original).**

// ```js
// const produtosReverso = produtos.toReversed();
// console.log(produtosReverso);
// ```

// ---

// ### ✅ Exercício 7 — Usando `.splice()`

// **Remova os dois últimos produtos do array original e exiba os removidos.**

// ```js
// const produtosCopy = [...produtos]; // para não modificar o original
// const removidos = produtosCopy.splice(-2);
// console.log('Removidos:', removidos);
// console.log('Restantes:', produtosCopy);
// ```

// ---

// ### ✅ Exercício 8 — Combinação: `map()` + `some()`

// **Verifique se existe algum produto com o nome contendo a palavra "Note" (case insensitive).**

// ```js
// const temNote = produtos.some(p => p.nome.toLowerCase().includes("note"));
// console.log(temNote ? 'Existe produto com "Note".' : 'Nenhum produto com "Note".');
// ```

// ---

// ### ✅ Exercício 9 — Combinação: `map()` + `toFixed()`

// **Crie um array apenas com os preços formatados para 2 casas decimais.**

// ```js
// const precosFormatados = produtos.map(p => p.preco.toFixed(2));
// console.log(precosFormatados);
// ```

// ---

// ### ✅ Exercício 10 — Combinação: `sort()` + `toReversed()`

// **Ordene os produtos do mais caro para o mais barato, sem modificar o array original.**

// ```js
// const doMaisCaroAoMaisBarato = [...produtos]
//   .sort((a, b) => a.preco - b.preco)
//   .toReversed();

// console.log(doMaisCaroAoMaisBarato);
// ```
// // ------------------------------------------------------------------


const produtos = [
    { id: 1, nome: 'Notebook', preco: 3500.5, estoque: 12 },
    { id: 2, nome: 'Smartphone', preco: 2200.99, estoque: 0 },
    { id: 3, nome: 'Monitor', preco: 1200.75, estoque: 7 },
    { id: 4, nome: 'Teclado', preco: 150.4, estoque: 24 },
    { id: 5, nome: 'Mouse', preco: 100.1, estoque: 30 },
];


// ### Exercício 1 — Usando `.some()`
// **Verifique se existe algum produto com preço superior a R\$ 3000.**
console.log(produtos.some((produto) => produto.preco > 3000))

// ### Exercício 2 — Usando `break`
// **Percorra o array com `for` e pare ao encontrar um produto com estoque 0. Mostre o nome.**
for (let produto of produtos) {
    if (produto.estoque === 0) {
        console.log(produto.nome)
        break
    }
}

// ###  Exercício 3 — Usando `.map()`
// **Crie um novo array contendo apenas nome e preço formatado com `toFixed(2)` (em reais).**
const valores = produtos.map((produto) => ({
    nome: produto.nome,
    preco: produto.preco.toFixed(2)
}))
console.log(valores)

// ### Exercício 4 — Usando `.sort()` por nome
// **Ordene os produtos alfabeticamente pelo nome.**
console.log(produtos.sort((a,b) => a.nome.localeCompare(b.nome)))

// ### Exercício 5 — Usando `.sort()` por valor
// **Ordene os produtos do mais barato para o mais caro.**
console.log(produtos.sort((a,b) => a.preco - b.preco))

// ### Exercício 6 — Usando `.toReversed()`

// **Crie uma cópia do array de produtos na ordem inversa (sem modificar o original).**
console.log(produtos.toReversed())