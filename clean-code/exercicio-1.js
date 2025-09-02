
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

let primeiroNumero = 10;
let segundoNumero = 20;
let somaValores = primeiroNumero + segundoNumero;
console.log(somaValores)

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

const data = [
    {'nome': 'maria', 'active': true},
    {'nome': 'carlos'},
    {'nome': 'fabio', 'active': true},
]

// filtra pessoas ativas
function filtrarAtivos(data) {
    return data.filter(pessoa => pessoa.active)
}

// converte nome de pessoas ativa para maiúsculo
function mappedPessoas(data) {
    return data.map((pessoa) => pessoa.nome.toUpperCase());
}

const pessoaAtivas = filtrarAtivos(data);
const nomesMapeados = mappedPessoas(pessoaAtivas)

console.log(nomesMapeados)


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

const isActive = status === "active"
console.log(isActive)

// const status = "inative";

// Seu código está correto, mas a expressão pode ser simplificada. Usar o operador ternário para retornar um valor booleano é desnecessário, 
// pois a expressão já avalia para um valor booleano. Aqui está uma versão mais clara e concisa:

// const isActive = (status === "active");

// ### **Exercício 5 – Evitar números mágicos**

// Transforme o código abaixo usando **constantes com nomes claros**:

// ```js
// if (age > 18) {
//   console.log("Adulto");
// }
// ``
// `

const idade = 19
const idadeMinimaParaAdultos = 18

if (idade > idadeMinimaParaAdultos) {
    console.log('Adulto')
}

// Agora, o código é mais claro e fácil de entender, pois a constante 
// idadeMinimaParaAdulto explica o significado do número 18.

// ---

// ### **Exercício 6 – Evitar duplicação (DRY)**

// Reescreva o código evitando **repetição de lógica**:

// ```js
// console.log("O valor é: " + value1);
// console.log("O valor é: " + value2);
// console.log("O valor é: " + value3);
// ```


function imprimirValor(valor) {
    console.log("O valor é: " + valor);
}

const value1 = 10;
const value2 = 20;
const value3 = 30;

imprimirValor(value1);
imprimirValor(value2);
imprimirValor(value3);

// ---

// ### **Exercício 7 – Estrutura de dados clara**

// Reescreva usando **objetos ou arrays** ao invés de múltiplas variáveis soltas:

// ```js
// const nome1 = "Alice";
// const nome2 = "Bob";
// const nome3 = "Carol";
// ```

const pessoa = [{'nome': 'Alice'},{'nome': 'Bob'},{'nome': 'Carol'}]

const nomes = ['Alice', 'Bob', 'Carol'];

// ---


// ### **Exercício 9 – Retorno consistente**

// Reescreva a função para **retornar valores consistentes** e evitar múltiplos tipos de retorno:

// ```js
// function getStatus(user) {
//   if (!user) return null;
//   if (user.active) return true;
//   return "inactive";
// }
// ``

// Minhas versão
function getStatus(user) {
    return (user && user.active)
}

// Versão 1 – Retorno booleano (simples e consistente)
function getStatus(user) {
    return !!(user && user.active);
}

// Versão 2 – Retorno semântico (mais legível)
function getStatus(user) {
    if (!user) return "unknown";
    return user.active ? "active" : "inactive";
}

console.log(getStatus(null));            // "unknown"
console.log(getStatus({ active: true })); // "active"
console.log(getStatus({ active: false })); // "inactive"

// O seu código está correto se a intenção for só trabalhar com true/false.
// Mas se o exercício pede consistência + clareza, a segunda versão é a mais indicada.

// ---

// ### **Exercício 10 – Evitar complexidade desnecessária**

// Simplifique o seguinte código mantendo o mesmo comportamento:

// ```js
// if (x === true) {
//   return true;
// } else {
//   return false;
// }
//```


return (x && true)