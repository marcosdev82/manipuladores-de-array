// ## 📝 Exercícios

// ### 1. `Object.keys`

// Dado:

// ```js
// const user = { nome: "Carlos", idade: 30, cidade: "Recife" };
// ```

// 👉 Use `Object.keys` para obter todas as chaves.
// Resultado esperado:

// ```
// ["nome", "idade", "cidade"]
// ```

// ---

// ### 2. `Object.values`

// Dado:

// ```js
// const produto = { nome: "Camiseta", preco: 59.9, estoque: 20 };
// ```

// 👉 Use `Object.values` para pegar os valores.
// Resultado esperado:

// ```
// ["Camiseta", 59.9, 20]
// ```

// ---

// ### 3. `Object.entries`

// Dado:

// ```js
// const config = { darkMode: true, version: "1.2.0" };
// ```

// 👉 Transforme o objeto em array de pares e percorra imprimindo:

// ```
// darkMode → true
// version → 1.2.0
// ```

// ---

// ### 4. `Object.entries` + `map`

// Dado:

// ```js
// const aluno = { nome: "Maria", nota: 9, turma: "3A" };
// ```

// 👉 Crie um array de strings no formato:

// ```
// ["nome: Maria", "nota: 9", "turma: 3A"]
// ```

// ---

// ### 5. `Object.fromEntries`

// Dado:

// ```js
// const arr = [["marca", "Dell"], ["cpu", "i7"], ["ram", "16GB"]];
// ```

// 👉 Converta para objeto.
// Resultado esperado:

// ```
// { marca: "Dell", cpu: "i7", ram: "16GB" }
// ```

// ---

// ### 6. `reduce` para array → objeto

// Dado:

// ```js
// const arr = [["id", 123], ["status", "ativo"], ["admin", true]];
// ```

// 👉 Monte um objeto usando `reduce`.
// Resultado esperado:

// ```
// { id: 123, status: "ativo", admin: true }
// ```

// ---

// ### 7. Desafio Final

// 1. Pegue este objeto:

// ```js
// const livro = { titulo: "JS para Iniciantes", paginas: 250, autor: "João" };
// ```

// 2. Transforme em array de pares (`Object.entries`).
// 3. Use `map` para criar um array de strings no formato `"chave - valor"`.
// 4. Converta o array de pares de volta em objeto usando `Object.fromEntries`.
// 5. Acrescente manualmente a chave `editora: "TechBooks"` usando `reduce` ou `Object.assign`.
