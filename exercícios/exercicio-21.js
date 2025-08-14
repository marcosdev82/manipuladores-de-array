// Excelente! Abaixo estão **10 exercícios avançados de lógica em JavaScript**, agora combinando:

// * **Curto-circuito lógico** (`&&`, `||`)
// * **`if/else`**
// * **Operador ternário**
// * **Loops (`for`, `while`, `for...of`)**

// Esses exercícios simulam **situações reais** e exigem **raciocínio lógico** com manipulação de dados.

// ---

// ## 🔁 10 Exercícios Avançados com Lógica + Loops

// ---

// ### ✅ 1. **Soma total de preços com verificação de estoque**

// Some apenas os preços dos produtos que têm estoque > 0.

// ```js
// const produtos = [
//   { nome: "Notebook", preco: 3500, estoque: 12 },
//   { nome: "Celular", preco: 2200, estoque: 0 },
//   { nome: "Teclado", preco: 150, estoque: 5 },
// ];

// let total = 0;

// for (const p of produtos) {
//   p.estoque > 0 && (total += p.preco);
// }

// console.log(`Total em estoque: R$ ${total}`);
// ```

// ---

// ### ✅ 2. **Contar quantos produtos estão em promoção**

// Produtos com preço menor que R\$1000 estão em promoção.

// ```js
// let promocaoCount = 0;

// for (let i = 0; i < produtos.length; i++) {
//   if (produtos[i].preco < 1000) {
//     promocaoCount++;
//   }
// }

// console.log(`Produtos em promoção: ${promocaoCount}`);
// ```

// ---

// ### ✅ 3. **Parar o loop ao encontrar um produto caro (usando `break`)**

// ```js
// for (const p of produtos) {
//   if (p.preco > 3000) {
//     console.log(`Produto caro encontrado: ${p.nome}`);
//     break;
//   }
// }
// ```

// ---

// ### ✅ 4. **Verificar se todos os produtos têm nome (loop + curto-circuito)**

// ```js
// let todosTemNome = true;

// for (const p of produtos) {
//   if (!p.nome) {
//     todosTemNome = false;
//     break;
//   }
// }

// console.log(todosTemNome ? "Todos têm nome." : "Algum produto está sem nome.");
// ```

// ---

// ### ✅ 5. **Aplicar desconto com `for` e `if/else`**

// Produtos acima de R\$2000 recebem 10% de desconto.

// ```js
// for (const p of produtos) {
//   if (p.preco > 2000) {
//     const novoPreco = (p.preco * 0.9).toFixed(2);
//     console.log(`${p.nome}: R$${novoPreco} com desconto`);
//   } else {
//     console.log(`${p.nome}: sem desconto`);
//   }
// }
// ```

// ---

// ### ✅ 6. **Validar lista de senhas com `while` e ternário**

// ```js
// const senhas = ["1234", "admin123", "secreta", "senhaFraca"];
// let i = 0;

// while (i < senhas.length) {
//   const segura = senhas[i].length >= 6 ? "Segura" : "Fraca";
//   console.log(`Senha "${senhas[i]}": ${segura}`);
//   i++;
// }
// ```

// ---

// ### ✅ 7. **Gerar relatório de produtos com ternário**

// ```js
// for (const p of produtos) {
//   const status = p.estoque > 0 ? "Disponível" : "Indisponível";
//   console.log(`${p.nome}: ${status}`);
// }
// ```

// ---

// ### ✅ 8. **Mostrar o primeiro número par da lista (curto-circuito + `break`)**

// ```js
// const numeros = [1, 3, 5, 8, 10];

// for (const n of numeros) {
//   n % 2 === 0 && (console.log(`Primeiro par: ${n}`), break);
// }
// ```

// ---

// ### ✅ 9. **Somar os números até atingir 100 (usando `while`)**

// ```js
// const valores = [10, 20, 30, 25, 15, 5];
// let soma = 0;
// let i = 0;

// while (soma < 100 && i < valores.length) {
//   soma += valores[i];
//   i++;
// }

// console.log(`Soma acumulada: ${soma}`);
// ```

// ---

// ### ✅ 10. **Listar notas e classificar com ternário dentro do loop**

// ```js
// const notas = [6, 8.5, 9.7, 4.3, 7];

// for (const nota of notas) {
//   const status = nota >= 7 ? "Aprovado" : nota >= 5 ? "Recuperação" : "Reprovado";
//   console.log(`Nota ${nota}: ${status}`);
// }
// ```

// ---
