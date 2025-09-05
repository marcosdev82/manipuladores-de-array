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

// ```js
// function process(data) {
//   const filtered = data.filter(d => d.active);
//   const mapped = filtered.map(d => d.name.toUpperCase());
//   console.log(mapped);
// }
// ```

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

// Função principal que organiza o fluxo
// function processOrder(order) {
//   if (!validateOrder(order)) {
//     throw new Error("Pedido inválido");
//   }

//   const total = calculateTotal(order.items);
//   const finalOrder = applyDiscount(order, total);

//   sendConfirmation(finalOrder);
// }

// // Valida o pedido
// function validateOrder(order) {
//   return order && order.items && order.items.length > 0;
// }

// // Calcula o total do pedido
// function calculateTotal(items) {
//   return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
// }

// // Aplica desconto no pedido
// function applyDiscount(order, total) {
//   const discount = order.discount || 0;
//   return {
//     ...order,
//     total: total - discount
//   };
// }

// // Envia a confirmação do pedido
// function sendConfirmation(order) {
//   console.log(`Confirmação enviada para o cliente:`, order);
// }


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

// -----------------------------------

// ### **Exercício 1 – Nomes claros de variáveis**

// Reescreva o seguinte código usando **nomes de variáveis claros e significativos**:

// ```js
// let x = 10;
// let y = 20;
// let z = x + y;
// console.log(z);
// ```

let numero1 = 10;
let numero2 = 20;
let soma = numero1 + numero2
console.log(soma)

// ---

// ### **Exercício 2 – Funções pequenas**

// Transforme o código abaixo em **funções pequenas com responsabilidade única**:

// Função principal que organiza o fluxo
function processOrder(order) {
    if (!validateOrder(order)) {
        throw new Error("Pedido inválido");
    }

    const total = calculateTotal(order.items);
    const finalOrder = applyDiscount(order, total);

    sendConfirmation(finalOrder);
}

// Valida o pedido
function validateOrder(order) {
    return order && order.items && order.items.length > 0;
}

// Calcula o total do pedido
function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

// Aplica desconto no pedido
function applyDiscount(order, total) {
    const discount = order.discount || 0;
    return {
        ...order,
        total: total - discount
    };
}

// Envia a confirmação do pedido
function sendConfirmation(order) {
    console.log(`Confirmação enviada para o cliente:`, order);
}

// ### **Exercício 4 – Condicional limpa**

// Reescreva usando **if encadeado ou operador ternário de forma clara**:

// ```js
// if (status === "active") {
//   return true;
// } else {
//   return false;
// }
// ```
const status = "inative"
const isActive = status === "active"

// forma com ternário
// const status = "inative"
// const isActive = status === "active" ? true : false

// Mas essa forma é redundante, porque o próprio === já retorna true ou false.

// ### **Exercício 5 – Evitar números mágicos**

// Transforme o código abaixo usando **constantes com nomes claros**:

// ```js
// if (age > 18) {
//   console.log("Adulto");
// }
// ```

const idade = 18;
const idadeMinimaParaAdulto = 18

if (idade > idadeMinimaParaAdulto) {
    console.log('Adulto')
}


// ### **Exercício 6 – Evitar duplicação (DRY)**

// Reescreva o código evitando **repetição de lógica**:

// ```js
// console.log("O valor é: " + value1);
// console.log("O valor é: " + value2);
// console.log("O valor é: " + value3);
// ```

// ---
function getValues(value) {
    return "O valor é: " + value;
}
console.log(getValues(10))

// ### **Exercício 7 – Estrutura de dados clara**

// Reescreva usando **objetos ou arrays** ao invés de múltiplas variáveis soltas:

// ```js
// const nome1 = "Alice";
// const nome2 = "Bob";
// const nome3 = "Carol";
// ```
const nomes = ['Alice','Bob','Carol']


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
    return (user && user.active)? "active" : "inactive"
}

// ### **Exercício 10 – Evitar complexidade desnecessária**

// Simplifique o seguinte código mantendo o mesmo comportamento:

// ```js
// if (x === true) {
//   return true;
// } else {
//   return false;
// }
// ```

return x