// Perfeito! Vamos transformar esse assunto de **iterators, `.values()`, `.keys()` e `.entries()`** em exercícios práticos para você treinar 🚀

// ---

// ## 📝 Exercícios – Iteradores e coleções

// ### 1. Iterando com `values()`

// Dado o array:

// ```js
// const frutas = ["🍎", "🍌", "🍊"];
// ```

// **Tarefas:**

// 1. Crie um iterador usando `frutas.values()`.
// 2. Use o método `.next()` para imprimir cada fruta até acabar a lista.
// 3. Verifique o que acontece quando você chama `.next()` após o iterador terminar.

// ---

// ### 2. Usando `keys()`

// Dado o array:

// ```js
// const frutas = ["🍎", "🍌", "🍊"];
// ```

// **Tarefas:**

// 1. Pegue apenas os índices do array usando `frutas.keys()`.
// 2. Use `for...of` para imprimir:

// ```
// Índice 0: 🍎
// Índice 1: 🍌
// Índice 2: 🍊
// ```

// ---

// ### 3. Trabalhando com `entries()`

// Dado:

// ```js
// const frutas = ["🍎", "🍌", "🍊"];
// ```

// **Tarefas:**

// 1. Crie um iterador com `frutas.entries()`.
// 2. Use `for...of` para imprimir cada par `[índice, valor]` no formato:

// ```
// 0 → 🍎
// 1 → 🍌
// 2 → 🍊
// ```

// ---

// ### 4. Iteradores com `Map`

// Dado:

// ```js
// const precos = new Map([
//   ["banana", 5],
//   ["maçã", 3],
//   ["laranja", 4],
// ]);
// ```

// **Tarefas:**

// 1. Use `precos.keys()` para imprimir só as frutas.
// 2. Use `precos.values()` para imprimir só os preços.
// 3. Use `precos.entries()` para imprimir cada fruta com seu preço:

// ```
// banana → 5
// maçã → 3
// laranja → 4
// ```

// ---

// ### 5. Desafio final – combinar iteradores

// Dado:

// ```js
// const alunos = ["Ana", "Carlos", "Maria"];
// const notas = [9, 7, 10];
// ```

// **Tarefas:**

// 1. Crie um iterador para os alunos e outro para as notas.
// 2. Imprima cada aluno com sua nota usando um loop (`for...of`) e `.next()` dos iteradores:

// ```
// Ana: 9
// Carlos: 7
// Maria: 10
// ```
