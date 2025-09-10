 // ## 🔹 1. `includes()`

// 👉 Verifica se um valor existe dentro de um array ou string.

// **Exercício:**
// Crie um array com nomes de frutas.  verificar se ela a fruta especificada está no array.

// ```javascript
// const frutas = ["maçã", "banana", "uva", "laranja"];

 
// // Verifique se está no array
// console.log(frutas.includes(fruta));
// ```

// ---

// ## 🔹 2. `fromEntries()`

// 👉 Converte uma lista de pares `[chave, valor]` em um objeto.

// **Exercício:**
// Dado o array de pares, converta-o em objeto com `fromEntries`.

// ```javascript
// const pares = [["nome", "Ana"], ["idade", 22], ["cidade", "Fortaleza"]];

// // Converta em objeto
// const pessoa = Object.fromEntries(pares);

// console.log(pessoa);
// // { nome: "Ana", idade: 22, cidade: "Fortaleza" }
// ```

// ---

// ## 🔹 3. `unshift()`

// 👉 Adiciona um ou mais elementos no **início** de um array.

// **Exercício:**
// Crie um array de números `[2, 3, 4]` e adicione o número `1` no início usando `unshift()`.

// ```javascript
// let numeros = [2, 3, 4];
// numeros.unshift(1);
// console.log(numeros); // [1, 2, 3, 4]
// ```

// ---

// ## 🔹 4. `item()`

// 👉 Método usado em `NodeList` e `HTMLCollection` para acessar elementos pelo índice.

// **Exercício (HTML):**
// Pegue os parágrafos da página e exiba o texto do segundo usando `item()`.

// ```html
// <p>Primeiro</p>
// <p>Segundo</p>
// <p>Terceiro</p>

// <script>
//   const paragrafos = document.querySelectorAll("p");
//   console.log(paragrafos.item(1).textContent); // "Segundo"
// </script>
// ```

// ---

// ## 🔹 5. `keys()`

// 👉 Retorna um iterador com os índices de um array.

// **Exercício:**
// Crie um array com três cores e percorra os índices usando `keys()`.

// ```javascript
// const cores = ["vermelho", "azul", "verde"];

// for (let indice of cores.keys()) {
//   console.log(indice);
// }
// ```

// ---

// ## 🔹 6. `values()`

// 👉 Retorna um iterador com os valores de um array.

// **Exercício:**
// Usando o mesmo array `cores`, percorra apenas os valores.

// ```javascript
// for (let valor of cores.values()) {
//   console.log(valor);
// }
// ```

// ---

// ## 🔹 7. `map()`

// 👉 Cria um novo array a partir de uma transformação.

// **Exercício:**
// Dado um array `[1, 2, 3, 4]`, crie um novo array com cada número ao quadrado.

// ```javascript
// const numeros = [1, 2, 3, 4];
// const quadrados = numeros.map(n => n * n);
// console.log(quadrados); // [1, 4, 9, 16]
// ```

// ---

// ## 🔹 8. `forEach()`

// 👉 Executa uma função para cada item do array (não retorna novo array).

// **Exercício:**
// Percorra um array de nomes e exiba cada um em maiúsculas.

// ```javascript
// const nomes = ["ana", "joão", "maria"];

// nomes.forEach(nome => {
//   console.log(nome.toUpperCase());
// });
// ```
console.log('-------------------------------')

 // ## 🔹 1. `includes()`

// 👉 Verifica se um valor existe dentro de um array ou string.

// **Exercício:**
// Crie um array com nomes de frutas.  verificar se ela a fruta especificada está no array.

// ```javascript
const frutas = ["maçã", "banana", "uva", "laranja"];
const strFrutas = frutas.toString()
console.log(strFrutas.includes('maçã'))
console.log(frutas.includes("banana"))

// ## 🔹 2. `fromEntries()`

// 👉 Converte uma lista de pares `[chave, valor]` em um objeto.

// **Exercício:**
// Dado o array de pares, converta-o em objeto com `fromEntries`.

// ```javascript
const pares = [["nome", "Ana"], ["idade", 22], ["cidade", "Fortaleza"]];
console.log(Object.entries(pares))

// ## 🔹 3. `unshift()`

// 👉 Adiciona um ou mais elementos no **início** de um array.

// **Exercício:**
// Crie um array de números `[2, 3, 4]` e adicione o número `1` no início usando `unshift()`.

const arrNumber = [2, 3, 4];
console.log(arrNumber.unshift(1))
console.log(arrNumber)

// ## 🔹 5. `keys()`

// 👉 Retorna um iterador com os índices de um array.

// **Exercício:**
// Crie um array com três cores e percorra os índices usando `keys()`.

const cores = ['red', 'green', 'blue']
console.log()
for(let indice of Object.keys(cores)) {
    console.log(cores[indice])
}

// ## 🔹 6. `values()`

// 👉 Retorna um iterador com os valores de um array.

// **Exercício:**
// Usando o mesmo array `cores`, percorra apenas os valores.
for(let v of cores.values()) {
    console.log(v)
}

// ## 🔹 7. `map()`

// 👉 Cria um novo array a partir de uma transformação.

// **Exercício:**
// Dado um array `[1, 2, 3, 4]`, crie um novo array com cada número ao quadrado.

const quadrado = [1, 2, 3, 4];
console.log(quadrado.map((num) => num ** 2));
console.log(quadrado.map((num) => num  * num));


// ## 🔹 8. `forEach()`

// 👉 Executa uma função para cada item do array (não retorna novo array).

// **Exercício:**
// Percorra um array de nomes e exiba cada um em maiúsculas.

// ```javascript
const nomes = ["ana", "joão", "maria"];
nomes.forEach((nome) => {
    console.log(nome.toUpperCase())
})
