// ## 🔹 Exercício 1 – Adicionando e exibindo

// 1. Crie um array com `[2, 3, 4]`.
// 2. Use `unshift()` para adicionar `1` no início.
// 3. Use `toString()` para exibir o array como string.

// 👉 Resultado esperado: `"1,2,3,4"`

// ```javascript
// let numeros = [2, 3, 4];
// numeros.unshift(1);
// console.log(numeros.toString());
// ```

// ---

// ## 🔹 Exercício 2 – Trabalhando com valores

// 1. Crie um array `["maçã", "banana", "uva"]`.
// 2. Use `values()` para iterar pelos valores.
// 3. Transforme todos em maiúsculo e junte em uma string usando `join("-")`.

// 👉 Resultado esperado: `"MAÇÃ-BANANA-UVA"`

// ```javascript
// const frutas = ["maçã", "banana", "uva"];
// let lista = [...frutas.values()].map(f => f.toUpperCase()).join("-");
// console.log(lista);
// ```

// ---

// ## 🔹 Exercício 3 – Atualizando com `with()`

// 1. Crie um array `[10, 20, 30]`.
// 2. Use `with()` para trocar o valor da posição 1 para `99`.
// 3. Converta o array resultante em string usando `join("|")`.

// 👉 Resultado esperado: `"10|99|30"`

// ```javascript
// let numeros = [10, 20, 30];
// let novoArray = numeros.with(1, 99);
// console.log(novoArray.join("|"));
// ```

// ---

// ## 🔹 Exercício 4 – Revertendo sem alterar original

// 1. Crie um array `[5, 6, 7]`.
// 2. Use `toReversed()` para criar uma cópia invertida.
// 3. Converta os dois arrays (`original` e `invertido`) em string usando `toString()`.

// 👉 Resultado esperado:

// * Original: `"5,6,7"`
// * Invertido: `"7,6,5"`

// ```javascript
// let numeros = [5, 6, 7];
// let invertido = numeros.toReversed();
// console.log("Original:", numeros.toString());
// console.log("Invertido:", invertido.toString());
// ```

// ---

// ## 🔹 Exercício 5 – Desafio combinando tudo 🚀

// 1. Crie um array `["html", "css"]`.
// 2. Use `unshift()` para adicionar `"js"` no início.
// 3. Use `with()` para substituir o último valor por `"react"`.
// 4. Use `toReversed()` para inverter a ordem.
// 5. Use `join(" + ")` para formar uma string final.

// 👉 Resultado esperado: `"react + css + js"`

// ```javascript
// let stack = ["html", "css"];
// stack.unshift("js");
// let novaStack = stack.with(stack.length - 1, "react");
// let invertida = novaStack.toReversed();
// console.log(invertida.join(" + "));
// ```

console.log('-------------')

// ## 🔹 Exercício 1 – Adicionando e exibindo

// 1. Crie um array com `[2, 3, 4]`.
// 2. Use `unshift()` para adicionar `1` no início.
// 3. Use `toString()` para exibir o array como string.

// 👉 Resultado esperado: `"1,2,3,4"`

const arrFruit = [2, 3, 4]
console.log(arrFruit.unshift(1))
console.log(arrFruit)


// ## 🔹 Exercício 2 – Trabalhando com valores

// 1. Crie um array `["maçã", "banana", "uva"]`.
// 2. Use `values()` para iterar pelos valores.
// 3. Transforme todos em maiúsculo e junte em uma string usando `join("-")`.

// 👉 Resultado esperado: `"MAÇÃ-BANANA-UVA"`

// ```javascript
const frutas = ["maçã", "banana", "uva"];
const iterator = frutas.values()
console.log(iterator)
console.log([...iterator].map((fruit) => fruit.toUpperCase()).join('-'))

// ## 🔹 Exercício 3 – Atualizando com `with()`

// 1. Crie um array `[10, 20, 30]`.
// 2. Use `with()` para trocar o valor da posição 1 para `99`.
// 3. Converta o array resultante em string usando `join("|")`.

// 👉 Resultado esperado: `"10|99|30"`

// ```javascript
let numeros = [10, 20, 30];
console.log(numeros.with(1,99).join("|"))

// ## 🔹 Exercício 4 – Revertendo sem alterar original

// 1. Crie um array `[5, 6, 7]`.
// 2. Use `toReversed()` para criar uma cópia invertida.
// 3. Converta os dois arrays (`original` e `invertido`) em string usando `toString()`.

// 👉 Resultado esperado:

// * Original: `"5,6,7"`
// * Invertido: `"7,6,5"`

// ```javascript
let numeros2 = [5, 6, 7];
let newArr = numeros2.toReversed()
console.log(newArr.toString())
console.log(numeros2.toString())

// ## 🔹 Exercício 5 – Desafio combinando tudo 🚀

// 1. Crie um array `["html", "css"]`.
// 2. Use `unshift()` para adicionar `"js"` no início.
// 3. Use `with()` para substituir o último valor por `"react"`.
// 4. Use `toReversed()` para inverter a ordem.
// 5. Use `join(" + ")` para formar uma string final.

// 👉 Resultado esperado: `"react + css + js"`

// ```javascript
let stack = ["html", "css"];
stack.unshift("js")
console.log(stack)
let newArr2 = stack.with(2,'REACT')
console.log(newArr2.toReversed().join(" + "))

