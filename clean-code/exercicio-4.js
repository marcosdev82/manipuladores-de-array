// ### **Exercício 22 – Funções puras**


// Reescreva a função abaixo para que seja **pura** (não altere variáveis externas):

// O problema da função original é que ela modifica uma variável externa (total), então não é pura.

// Uma função pura não deve ter efeitos colaterais e sempre retorna o mesmo valor para os mesmos argumentos.

// ```js
// let total = 0;
// function addValue(x) {
//   total += x;
//   return total;
// }
// ```

// ---

// ### **Exercício 23 – Evitar funções anônimas excessivas**

// Transforme o código usando **funções nomeadas** em vez de anônimas para melhorar a legibilidade:

// ```js
// [1,2,3].forEach(function(n){ console.log(n); });
// ```

// ---

// ### **Exercício 24 – Parametrização de valores**

// Substitua valores fixos por **parâmetros** em uma função:

// ```js
// function calculateDiscount(price) {
//   return price * 0.9;
// }
// ```

// ---

// ### **Exercício 25 – Separar lógica de apresentação**

// O código abaixo mistura lógica e apresentação:

// ```js
// function showUser(user) {
//   if(user.active) {
//     console.log("Usuário ativo: " + user.name);
//   } else {
//     console.log("Usuário inativo");
//   }
// }
// ```

// **Tarefa:** Separe a **lógica de decisão** da **exibição**.

// ---

// ### **Exercício 26 – Evitar variáveis temporárias desnecessárias**

// Simplifique o código abaixo mantendo a mesma funcionalidade:

// ```js
// const x = 5;
// const y = x * 2;
// console.log(y);
// ```

// ---

// ### **Exercício 27 – Função com múltiplos retornos claros**

// Reescreva a função abaixo para que **cada retorno seja claro e consistente**:

// ```js
// function checkValue(val) {
//   if(!val) return false;
//   if(val > 10) return "maior";
//   return 0;
// }
// ```

// ---

// ### **Exercício 28 – Objetos claros**

// Transforme o seguinte array de arrays em um **array de objetos** com nomes de propriedades significativos:

// ```js
// const data = [
//   [1, "Alice", 20],
//   [2, "Bob", 25]
// ];
// ```

// ---

// ### **Exercício 29 – Evitar encadeamento longo de if**

// Refatore o código abaixo usando **early return** ou **if encadeado** mais limpo:

// ```js
// if(user) {
//   if(user.active) {
//     if(user.age > 18) {
//       console.log("Adulto ativo");
//     }
//   }
// }
// ```

// ---

// ### **Exercício 30 – Função com responsabilidade única**

// Separe a função abaixo em **duas funções**, cada uma com uma responsabilidade:

// ```js
// function processOrder(order) {
//   validate(order);
//   calculateTotal(order);
//   console.log("Total calculado");
// }
// ```

// ---

// ### **Exercício 31 – Nomes de variáveis descritivos**

// Dado este código:

// ```js
// let a = [1,2,3];
// let b = a.map(n => n*2);
// ```

// **Tarefa:** Reescreva usando **nomes descritivos** para `a` e `b`.
 

console.log('-----')

// ### **Exercício 22 – Funções puras**

// Reescreva a função abaixo para que seja **pura** (não altere variáveis externas):

// O problema da função original é que ela modifica uma variável externa (total), então não é pura.

// Uma função pura não deve ter efeitos colaterais e sempre retorna o mesmo valor para os mesmos argumentos.

// ```js
// let total = 0;
// function addValue(x) {
//   total += x;
//   return total;
// }
// ```

let total = 0

function addValue(total, x) {
    return  total + x
}

// function addValue(x) {
//   total += x;
//   return total;
// }

console.log(addValue(10, 1));
console.log(total)

// ### **Exercício 23 – Evitar funções anônimas excessivas**

// Transforme o código usando **funções nomeadas** em vez de anônimas para melhorar a legibilidade:

// ```js
// [1,2,3].forEach(function(n){ console.log(n); });
// ```

function showNumber(n) {console.log(n)}

[1,2,3].forEach(showNumber);