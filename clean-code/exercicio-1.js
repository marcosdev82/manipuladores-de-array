
// ### **Exercício 1 – Nomes claros de variáveis**

// Reescreva o seguinte código usando **nomes de variáveis claros e significativos**:

// ```js
// let x = 10;
// let y = 20;
// let z = x + y;
// console.log(z);
// ```

// ---

// ### **Exercício 2 – Funções pequenas**

// Transforme o código abaixo em **funções pequenas com responsabilidade única**:

// const data = [
//     {'nome': 'maria', 'active': true},
//     {'nome': 'carlos'},
//     {'nome': 'fabio', 'active': true},
// ]

// ```js
// function process(data) {
//   const filtered = data.filter(d => d.active);
//   const mapped = filtered.map(d => d.name.toUpperCase());
//   console.log(mapped);
// }
// ```

// const data = [
//     {'nome': 'maria', 'active': true},
//     {'nome': 'carlos'},
//     {'nome': 'fabio', 'active': true},
// ]

// // filtra pessoas ativas
// function filtrarAtivos(data) {
//     return data.filter(pessoa => pessoa.active)
// }

// // converte nome de pessoas ativa para maiúsculo
// function mappedPessoas(data) {
//     return data.map((pessoa) => pessoa.nome.toUpperCase());
// }

// const pessoaAtivas = filtrarAtivos(data);
// const nomesMapeados = mappedPessoas(pessoaAtivas)

// console.log(nomesMapeados)

// ---

// ### **Exercício 3 – Evitar comentários óbvios**

// Reescreva este código **removendo comentários desnecessários**, mantendo a legibilidade:

// ```js
// // Adiciona 1 a cada elemento do array
// const arr = [1,2,3];
// const newArr = arr.map(x => x + 1);
// ```

// ---

// ### **Exercício 4 – Condicional limpa**

// Reescreva usando **if encadeado ou operador ternário de forma clara**:

// ```js
// if (status === "active") {
//   return true;
// } else {
//   return false;
// }
// ```

// ---

// ### **Exercício 5 – Evitar números mágicos**

// Transforme o código abaixo usando **constantes com nomes claros**:

// ```js
// if (age > 18) {
//   console.log("Adulto");
// }
// ```

// ---

// ### **Exercício 6 – Evitar duplicação (DRY)**

// Reescreva o código evitando **repetição de lógica**:

// ```js
// console.log("O valor é: " + value1);
// console.log("O valor é: " + value2);
// console.log("O valor é: " + value3);
// ```

// ---

// ### **Exercício 7 – Estrutura de dados clara**

// Reescreva usando **objetos ou arrays** ao invés de múltiplas variáveis soltas:

// ```js
// const nome1 = "Alice";
// const nome2 = "Bob";
// const nome3 = "Carol";
// ```

// ---

// ### **Exercício 8 – Evitar funções longas**

// Divida a função abaixo em **funções menores**:

// ```js
// function processOrder(order) {
//   validateOrder(order);
//   calculateTotal(order.items);
//   applyDiscount(order);
//   sendConfirmation(order);
// }
// ```

// ---

// ### **Exercício 9 – Retorno consistente**

// Reescreva a função para **retornar valores consistentes** e evitar múltiplos tipos de retorno:

// ```js
// function getStatus(user) {
//   if (!user) return null;
//   if (user.active) return true;
//   return "inactive";
// }
// ```

// ---

// ### **Exercício 10 – Evitar complexidade desnecessária**

// Simplifique o seguinte código mantendo o mesmo comportamento:

// ```js
// if (x === true) {
//   return true;
// } else {
//   return false;
// }
// ```

// -----------------------------------------------------------


// ### **Exercício 1 – Nomes claros de variáveis**

// Reescreva o seguinte código usando **nomes de variáveis claros e significativos**:

// ```js
// let x = 10;
// let y = 20;
// let z = x + y;
// console.log(z);
// ```

let num1 = 10;
let num2 = 20;
let soma = num1 + num2
console.log(soma)

// ### **Exercício 2 – Funções pequenas**

// Transforme o código abaixo em **funções pequenas com responsabilidade única**:

function filtered(data) {
    return data.filter(d => d.active);
}

function mapped(items) {
    return items.map(d => d.name.toUpperCase());
}

function process(data) {
    return mapped(filtered(data));
}

const data = [
    { name: 'João', active: true },
    { name: 'Maria', active: false },
    { name: 'Pedro', active: true }
];

console.log(process(data));
// Saída: [ 'JOÃO', 'PEDRO' ]


// ### **Exercício 4 – Condicional limpa**

// Reescreva usando **if encadeado ou operador ternário de forma clara**:

// ```js
// if (status === "active") {
//   return true;
// } else {
//   return false;
// }
// ```
const status = "active"
// console.log((status === "active")? true : false)

// simplificando 

console.log(status === "active")


// ### **Exercício 5 – Evitar números mágicos**

// Transforme o código abaixo usando **constantes com nomes claros**:

// ```js
// if (age > 18) {
//   console.log("Adulto");
// }
// ```

const idadeMinima = 18;
const idade = 19;

if (idade >= idadeMinima) {
    console.log("adulto")
}

// ---

// ### **Exercício 6 – Evitar duplicação (DRY)**

// Reescreva o código evitando **repetição de lógica**:

// ```js
// console.log("O valor é: " + value1);
// console.log("O valor é: " + value2);
// console.log("O valor é: " + value3);
// ```

function mostraValor(valor) {
    return `O valor é: ${valor}`;
}

console.log(mostraValor(10))
console.log(mostraValor(20))
console.log(mostraValor(30))

// ---

// ### **Exercício 9 – Retorno consistente**

// Reescreva a função para **retornar valores consistentes** e evitar múltiplos tipos de retorno:

// ```js
// function getStatus(user) {
//   if (!user) return null;
//   if (user.active) return true;
//   return "inactive";
// }
// ```

function getStatus(user) {
    return (user && user.active)? 'active' : 'inactive'
}

// console.log(getStatus(null)) 
// // "inactive"

// console.log(getStatus({ active: true })) 
// // "active"

// console.log(getStatus({ active: false })) 
// // "inactive"


// ---

// ### **Exercício 10 – Evitar complexidade desnecessária**

// Simplifique o seguinte código mantendo o mesmo comportamento:

// ```js
// if (x === true) {
//   return true;
// } else {
//   return false;
// }
// ```

const x = true;

console.log(x === false)

if (x === true) {
    return true;
} else {
    return false;
}
