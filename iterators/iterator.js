// Boa! Essa é a pergunta chave 🤓 – beleza, já sei que `values()`, `keys()` e `entries()` me dão iteradores... **mas pra que eu usaria isso na prática?**

// Aqui vão alguns cenários reais:

// ---

// ### 1. **Percorrer coleções grandes de forma controlada**

// Se você não quer percorrer um array inteiro de uma vez (com `for` ou `map`), pode usar o iterator manualmente:

// ```js
// const fruits = ["🍎", "🍌", "🍊"];
// const it = fruits.values();

// let step = it.next();
// while (!step.done) {
//   console.log("Comendo fruta:", step.value);
//   step = it.next();
// }
// ```

// ➡️ Isso é útil quando você precisa pausar/retomar uma iteração (stream de dados, por exemplo).

// ---

// ### 2. **Trabalhar com `for...of`**

// Na prática, o `for...of` usa iteradores por baixo dos panos.
// `values()`, `keys()` e `entries()` são jeitos claros de escolher **o que você quer percorrer**:

// ```js
// const fruits = ["🍎", "🍌", "🍊"];

// for (const fruit of fruits.values()) {
//   console.log("Valor:", fruit);
// }

// for (const index of fruits.keys()) {
//   console.log("Índice:", index);
// }

// for (const [index, fruit] of fruits.entries()) {
//   console.log(`${index}: ${fruit}`);
// }
// ```

// ---

// ### 3. **Estruturas como `Map` e `Set`**

// No dia a dia, iteradores brilham mesmo é com `Map` e `Set`.

// ```js
// const prices = new Map([
//   ["banana", 5],
//   ["maçã", 3],
//   ["laranja", 4],
// ]);

// for (const [fruit, price] of prices.entries()) {
//   console.log(`${fruit} custa R$${price}`);
// }
// ```

// ➡️ Aqui você pode pegar **só as chaves** (`keys()`), **só os valores** (`values()`) ou os dois (`entries()`).

// ---

// ### 4. **Gerar dados sob demanda**

// Iterator é útil quando você não quer carregar tudo na memória.
// Ex: ler registros de um banco de dados ou arquivo gigante, um por vez.

// ---

// ⚡ **Resumindo a utilidade prática:**

// * Controlar o fluxo de iteração (parar/retomar)
// * Escolher **chaves**, **valores** ou **pares** de uma coleção
// * Trabalhar com `Map`/`Set` de forma expressiva
// * Processar dados grandes sem carregar tudo de uma vez

// ---

// Quer que eu monte um **mini exemplo prático de vida real** (tipo "lista de tarefas" ou "carrinho de compras") mostrando quando `entries()` facilita a vida em vez de só usar `forEach`?
