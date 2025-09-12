//  ### **Exercício 1 – Avaliação de saldo**

// Crie uma função `checkBalance(saldo)` que:

// * Se o saldo for **falsy** (`0`, `null`, `undefined`), imprima `"Saldo zerado ou inválido"`.
// * Se o saldo for **positivo**, imprima `"Saldo positivo"`.
// * Se o saldo for **negativo**, imprima `"Saldo negativo"`.

// **Teste com:** `0`, `150`, `-20`, `null`.

// ---

// ### **Exercício 2 – Avaliação de nota**

// Escreva uma função `gradeScore(nota)` que:

// * Se `nota` for falsy ou menor que 0, imprima `"Nota inválida"`.
// * Se `nota` for maior ou igual a 90, imprima `"Excelente"`.
// * Se `nota` for maior ou igual a 70, imprima `"Bom"`.
// * Se `nota` for maior ou igual a 50, imprima `"Regular"`.
// * Caso contrário, imprima `"Insuficiente"`.

// **Dica:** Use **if encadeado** (`if ... else if ... else`) e atenção à **precedência dos sinais**.

// ---

// ### **Exercício 3 – Classificação de temperatura**

// Crie uma função `temperatureLevel(temp)` que:

// * Se `temp` for falsy (`0`, `null`, `undefined`), imprima `"Temperatura inválida"`.
// * Se `temp > 30`, imprima `"Quente"`.
// * Se `temp >= 20`, imprima `"Agradável"`.
// * Se `temp >= 10`, imprima `"Frio"`.
// * Caso contrário, imprima `"Muito frio"`.

// ---

// ### **Exercício 4 – Operações matemáticas e precedência**

// Crie uma função `calculate(a, b)` que:

// * Se `a` ou `b` forem falsy, imprima `"Valores inválidos"`.
// * Se `a + b > 100`, imprima `"Soma maior que 100"`.
// * Se `a * b > 100`, imprima `"Produto maior que 100"`.
// * Caso contrário, imprima `"Valores dentro do limite"`.

// **Dica:** Teste diferentes combinações para perceber **como a precedência de `+` e `*` afeta o resultado**.

// ---

// ### **Exercício 5 – Verificação de usuário**

// Escreva uma função `checkUser(user)` onde `user` é um objeto `{name, age, active}`:

// * Se `user` for falsy, imprima `"Usuário inválido"`.
// * Se `user.active` for falsy, imprima `"Usuário inativo"`.
// * Se `user.age < 18`, imprima `"Usuário menor de idade"`.
// * Caso contrário, imprima `"Usuário ativo e maior de idade"`.

console.log('--------')


// Crie uma função `checkBalance(saldo)` que:

// * Se o saldo for **falsy** (`0`, `null`, `undefined`), imprima `"Saldo zerado ou inválido"`.
// * Se o saldo for **positivo**, imprima `"Saldo positivo"`.
// * Se o saldo for **negativo**, imprima `"Saldo negativo"`.

// **Teste com:** `0`, `150`, `-20`, `null`.

function checkBalance(saldo) {
    if (saldo === 0 || saldo === null || saldo === undefined) {
        return "Saldo zerado ou inválido";
    } else if (saldo > 0) {
        return "Saldo positivo";
    } else if (saldo < 0) {
        return "Saldo negativo";
    }
}
console.log(checkBalance(0))
console.log(checkBalance(150))
console.log(checkBalance(-20))
console.log(checkBalance(null))

// código simplificado

// function checkBalance(saldo) {
//   if (!saldo) {
//     return "Saldo zerado ou inválido";
//   } else if (saldo > 0) {
//     return "Saldo positivo";
//   } else {
//     return "Saldo negativo";
//   }
// }