// Claro! Aqui está um exercício que **integra todos os métodos e estruturas** que você pediu: 
// `reduceRight`, `slice`, `shift`, `sort`, `splice`, `while`, `for...of`, e `every`.

// ---

// ## 🧠 **Exercício: Gerenciamento de Estoque de Produtos**

// Você tem um array de produtos com os nomes e quantidades disponíveis em estoque. 
// Faça as seguintes operações, utilizando os métodos e estruturas especificadas:

// ```javascript
// const estoque = [
//     { nome: "Camiseta", quantidade: 10 },
//     { nome: "Calça", quantidade: 5 },
//     { nome: "Boné", quantidade: 0 },
//     { nome: "Tênis", quantidade: 3 },
//     { nome: "Jaqueta", quantidade: 8 },
//     { nome: "Meias", quantidade: 0 }
// ];
// ```

// ---

// ### ✨ Regras do exercício:

// 1. **Remova o primeiro item do array** usando `shift`.
// 2. **Crie um novo array com apenas os 4 primeiros itens restantes** usando `slice`.
// 3. **Ordene os itens por quantidade crescente** usando `sort`.
// 4. **Remova o item de menor quantidade usando `splice`**.
// 5. **Verifique se todos os produtos restantes têm estoque disponível (`quantidade > 0`) usando `every`**.
// 6. **Use `for...of` para exibir o nome e a quantidade de cada produto restante.**
// 7. **Use `reduceRight` para somar as quantidades de todos os produtos e exibir o total**.
// 8. **Use `while` para simular uma contagem regressiva do total de estoque até 0, diminuindo de 5 em 5.**

// ---

// ### 🧪 Resultado esperado (saída no console):

// ```plaintext
// Produtos no estoque:
// - Calça: 5
// - Jaqueta: 8
// - Tênis: 3

// Todos os produtos têm estoque? true

// Quantidade total: 16

// Contando estoque:
// 16
// 11
// 6
// 1
// ```

// ---

// ### 🧩 Código de referência (resolução):

// ```javascript
// const estoque = [
//   { nome: "Camiseta", quantidade: 10 },
//   { nome: "Calça", quantidade: 5 },
//   { nome: "Boné", quantidade: 0 },
//   { nome: "Tênis", quantidade: 3 },
//   { nome: "Jaqueta", quantidade: 8 },
//   { nome: "Meias", quantidade: 0 }
// ];

// // 1. Remover o primeiro item
// estoque.shift(); // remove "Camiseta"

// // 2. Pegar os 4 primeiros itens restantes
// let novaLista = estoque.slice(0, 4);

// // 3. Ordenar por quantidade (crescente)
// novaLista.sort((a, b) => a.quantidade - b.quantidade);

// // 4. Remover o item com menor quantidade
// novaLista.splice(0, 1); // remove o primeiro (menor)

// // 5. Verificar se todos têm quantidade > 0
// const todosTemEstoque = novaLista.every(item => item.quantidade > 0);

// // 6. Mostrar os produtos
// console.log("Produtos no estoque:");
// for (const produto of novaLista) {
//   console.log(`- ${produto.nome}: ${produto.quantidade}`);
// }

// // 7. Somar as quantidades com reduceRight
// const total = novaLista.reduceRight((soma, item) => soma + item.quantidade, 0);
// console.log("\nTodos os produtos têm estoque?", todosTemEstoque);
// console.log("Quantidade total:", total);

// // 8. Contagem regressiva com while
// console.log("\nContando estoque:");
// let contador = total;
// while (contador > 0) {
//   console.log(contador);
//   contador -= 5;
// }
// ```

// ---------------------------------------

const estoque = [
    { nome: "Camiseta", quantidade: 10 },
    { nome: "Calça", quantidade: 5 },
    { nome: "Boné", quantidade: 0 },
    { nome: "Tênis", quantidade: 3 },
    { nome: "Jaqueta", quantidade: 8 },
    { nome: "Meias", quantidade: 0 }
];

// 1. **Remova o primeiro item do array** usando `shift`.
console.log(estoque.shift())
console.log(estoque)

// 2. Pegar os 4 primeiros itens restantes
console.log(estoque.slice(0,4))
// 3. Ordenar por quantidade (crescente)
console.log(estoque.sort((a,b) => a.quantidade - b.quantidade))
// 4. Remover o item com menor quantidade
console.log(estoque.splice(0,1))
console.log(estoque)

// 5. Verificar se todos têm quantidade > 0
console.log(estoque.every((produto) => produto.quantidade > 0))

// 6. Mostrar os produtos
for(let produto of estoque) {
    console.log(`${produto.nome}`)
}
// 7. Somar as quantidades com reduceRight
const total = estoque.reduceRight((total, produto) => total + produto.quantidade, 0)
console.log(total)