
// ## 🔹 Exercícios com `Object.assign()`

// ### 1. Combinar objetos

// Dado:

// ```js
// const obj1 = {a: 1, b: 2};
// const obj2 = {c: 3, d: 4};
// ```

// 👉 Use `Object.assign()` para criar um objeto `novoObj` que contenha todas as propriedades de `obj1` e `obj2`.

// ---

// ### 2. Clonar objeto

// Dado:

// ```js
// const usuario = {nome: "Marcos", idade: 28};
// ```

// 👉 Crie uma cópia independente desse objeto usando `Object.assign()`.
// Depois, altere a propriedade `idade` na cópia e verifique se o objeto original foi alterado ou não.

// ---

// ### 3. Sobrescrever propriedades

// Dado:

// ```js
// const base = {nome: "Marcos", idade: 28};
// const update = {idade: 29, cidade: "Fortaleza"};
// ```

// 👉 Use `Object.assign()` para atualizar o objeto `base` com as informações de `update`.

// ---

// ## 🔹 Exercícios com `Object.fromEntries()`

// ### 4. Array de pares para objeto

// Dado:

// ```js
// const entries = [["nome", "Ana"], ["idade", 30], ["cidade", "São Paulo"]];
// ```

// 👉 Converta o array acima em um objeto usando `Object.fromEntries()`.

// ---

// ### 5. Converter array em objeto com índices

// Dado:

// ```js
// const frutas = ["maçã", "banana", "laranja"];
// ```

// 👉 Use `map()` junto com `Object.fromEntries()` para criar um objeto onde as chaves sejam os índices do array e os valores sejam as frutas.
// Resultado esperado:

// ```js
// {0: "maçã", 1: "banana", 2: "laranja"}
// ```

 