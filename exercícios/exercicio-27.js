// ## 📘 Exercícios de Conversão em JavaScript com Soluções

// ### 1. Array → Objeto

// **Enunciado:**
// Dado o array abaixo:

// ```js
// const frutas = ["maçã", "banana", "laranja"];
// ```

// 👉 Transforme-o em um objeto onde o índice é a chave e a fruta é o valor.

// **Solução:**

// ```js
// const frutasObj = Object.fromEntries(frutas.map((fruta, i) => [i, fruta]));
// console.log(frutasObj);
// // { 0: "maçã", 1: "banana", 2: "laranja" }
// ```

// ---

// ### 2. Objeto → Array

// **Enunciado:**
// Dado o objeto abaixo:

// ```js
// const cores = { 0: "vermelho", 1: "azul", 2: "verde" };
// ```

// 👉 Converta-o para um array simples.

// **Solução:**

// ```js
// const coresArray = Object.values(cores);
// console.log(coresArray);
// // ["vermelho", "azul", "verde"]
// ```

// ---

// ### 3. Array Bidimensional → Objeto

// **Enunciado:**
// Dado o array:

// ```js
// const pares = [["nome", "João"], ["idade", 25], ["cidade", "São Paulo"]];
// ```

// 👉 Converta em um objeto com chave/valor.

// **Solução:**

// ```js
// const paresObj = Object.fromEntries(pares);
// console.log(paresObj);
// // { nome: "João", idade: 25, cidade: "São Paulo" }
// ```

// ---

// ### 4. Objeto com Objetos → Array

// **Enunciado:**
// Dado o objeto:

// ```js
// const usuarios = {
//   user1: { nome: "Ana", idade: 20 },
//   user2: { nome: "Carlos", idade: 30 },
//   user3: { nome: "Maria", idade: 25 }
// };
// ```

// 👉 Converta em um array apenas com os valores.

// **Solução:**

// ```js
// const usuariosArray = Object.values(usuarios);
// console.log(usuariosArray);
// /*
// [
//   { nome: "Ana", idade: 20 },
//   { nome: "Carlos", idade: 30 },
//   { nome: "Maria", idade: 25 }
// ]
// */
// ```

// ---

// ### 5. Desafio Extra 🚀

// **Enunciado:**
// Pegue o objeto do exercício 4 e converta em um array de strings no formato:

// ```js
// ["Ana - 20 anos", "Carlos - 30 anos", "Maria - 25 anos"]
//


// **Solução:**

// ```js
// const usuariosStrings = Object.values(usuarios).map(
//   (u) => `${u.nome} - ${u.idade} anos`
// );
// console.log(usuariosStrings);
// // ["Ana - 20 anos", "Carlos - 30 anos", "Maria - 25 anos"]
// ```

console.log('-----------------------------')

// ## 📘 Exercícios de Conversão em JavaScript com Soluções

// ### 1. Array → Objeto

// **Enunciado:**
// Dado o array abaixo:

// ```js
const frutas = ["maçã", "banana", "laranja"];
console.log(Object.fromEntries(frutas.map((fruta, index) => [index, fruta])))

// ---

// ### 2. Objeto → Array

// **Enunciado:**
// Dado o objeto abaixo:

// ```js
const cores = { 0: "vermelho", 1: "azul", 2: "verde" };
console.log(Object.entries(cores))
console.log(Array.isArray(Object.entries(cores)))

// ### 3. Array Bidimensional → Objeto

// **Enunciado:**
// Dado o array:

// ```js
const pares = [["nome", "João"], ["idade", 25], ["cidade", "São Paulo"]];
console.log(Object.fromEntries(pares))

// ### 4. Objeto com Objetos → Array

// **Enunciado:**
// Dado o objeto:

// ```js
const usuarios = {
  user1: { nome: "Ana", idade: 20 },
  user2: { nome: "Carlos", idade: 30 },
  user3: { nome: "Maria", idade: 25 }
};
// ```
const arrUser = Object.values(usuarios)
console.log(arrUser)

// ### 5. Desafio Extra 🚀

// **Enunciado:**
// Pegue o objeto do exercício 4 e converta em um array de strings no formato:

// ```js
// ["Ana - 20 anos", "Carlos - 30 anos", "Maria - 25 anos"]
//
console.log(arrUser.map((user) => user.nome + ' - ' + user.idade))
