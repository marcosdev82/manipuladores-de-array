
// ## 📝 Exercícios práticos

// ### 1. `Object.entries`

// Dado o objeto:

// ```js
// const produto = { nome: "Notebook", preco: 2500, estoque: 10 };
// ```

// 👉 Converta esse objeto em um array de pares `[chave, valor]`.
// Depois, percorra esse array e imprima no console algo como:

// ```
// nome: Notebook
// preco: 2500
// estoque: 10
// ```

// ---

// ### 2. `Object.fromEntries`

// Dado o array:

// ```js
// const arr = [["marca", "Nike"], ["tamanho", 42], ["cor", "preto"]];
// ```

// 👉 Transforme-o em um objeto usando `Object.fromEntries`.
// Resultado esperado:

// ```js
// { marca: "Nike", tamanho: 42, cor: "preto" }
// ```

// ---

// ### 3. `Object.values`

// Dado:

// ```js
// const pessoa = { nome: "Ana", idade: 28, cidade: "São Paulo" };
// ```

// 👉 Use `Object.values` para pegar só os valores e mostre no console:

// ```
// ["Ana", 28, "São Paulo"]
// ```

// ---

// ### 4. `Object.keys`

// Dado:

// ```js
// const config = { darkMode: true, version: "1.0.3", cache: false };
// ```

// 👉 Pegue apenas as chaves com `Object.keys`.
// Resultado esperado:

// ```
// ["darkMode", "version", "cache"]
// ```

// ---

// ### 5. `Object.assign`

// Dado:

// ```js
// const defaultConfig = { darkMode: false, cache: true };
// const userConfig = { darkMode: true, version: "2.0.0" };
// ```

// 👉 Use `Object.assign` para unir os dois objetos em um novo.
// Resultado esperado:

// ```js
// { darkMode: true, cache: true, version: "2.0.0" }
// ```

// ---

// ### 🔥 6. Desafio final (usar todos juntos)

// 1. Pegue o objeto:

//    ```js
//    const carro = { marca: "Ford", modelo: "Ka", ano: 2015 };
//    ```
// 2. Transforme em pares com `Object.entries`.
// 3. Adicione um novo par `["cor", "prata"]` no array.
// 4. Converta de volta em objeto com `Object.fromEntries`.
// 5. Extraia só os valores com `Object.values`.
// 6. Pegue as chaves com `Object.keys`.
// 7. Mescle com outro objeto `{ revisado: true }` usando `Object.assign`.

// 👉 No final, você terá praticado todos de uma vez.

console.log('---------')


// ## 📝 Exercícios práticos

// ### 1. `Object.entries`

// Dado o objeto:

// ```js
const produto = { nome: "Notebook", preco: 2500, estoque: 10 };
// ```

// 👉 Converta esse objeto em um array de pares `[chave, valor]`.
// Depois, percorra esse array e imprima no console algo como:

// ```
// nome: Notebook
// preco: 2500
// estoque: 10
// ``

const arrProduto = Object.entries(produto)
console.log(arrProduto)
for(let [k,v] of arrProduto) {
    console.log(`${k}: ${v}`)
}

// ---

// ### 2. `Object.fromEntries`

// Dado o array:

// ```js
const arr = [["marca", "Nike"], ["tamanho", 42], ["cor", "preto"]];
// ```

// 👉 Transforme-o em um objeto usando `Object.fromEntries`.
// Resultado esperado:

// ```js
// { marca: "Nike", tamanho: 42, cor: "preto" }
// ```

const obj = Object.fromEntries(arr)
console.log(obj)

// ---

// ### 3. `Object.values`

// Dado:

// ```js
const pessoa = { nome: "Ana", idade: 28, cidade: "São Paulo" };
// ```

// 👉 Use `Object.values` para pegar só os valores e mostre no console:

// ```
// ["Ana", 28, "São Paulo"]
// ```

console.log(Object.values(pessoa))

// ---

// ### 4. `Object.keys`

// Dado:

// ```js
const config = { darkMode: true, version: "1.0.3", cache: false };
// ```

// 👉 Pegue apenas as chaves com `Object.keys`.
// Resultado esperado:

// ```
// ["darkMode", "version", "cache"]
// ```

console.log(Object.keys(config))

// ### 🔥 6. Desafio final (usar todos juntos)

// 1. Pegue o objeto:

//    ```js
   const carro = { marca: "Ford", modelo: "Ka", ano: 2015 };
//    ```
// 2. Transforme em pares com `Object.entries`.
// 3. Adicione um novo par `["cor", "prata"]` no array.
// 4. Converta de volta em objeto com `Object.fromEntries`.
// 5. Extraia só os valores com `Object.values`.
// 6. Pegue as chaves com `Object.keys`.
// 7. Mescle com outro objeto `{ revisado: true }` usando `Object.assign`.

// 👉 No final, você terá praticado todos de uma vez.

const arrCarro = Object.entries(carro)
console.log(arrCarro)
arrCarro.push(["cor", "prata"])
console.log(arrCarro)
let obj2 = Object.fromEntries(arrCarro)
console.log(obj2)
console.log(Object.values(obj2))
console.log(Object.keys(obj2))
console.log(Object.assign(obj2, { revisado: true }))