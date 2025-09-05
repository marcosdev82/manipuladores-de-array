// ### **Exercício 1 – Autenticação de usuário**

// Crie uma função `authenticate(user)` que receba um objeto `{ username, password, active }` e faça:

// * Se `user` for falsy, retorne `"Usuário não encontrado"`.
// * Se `user.active` for falsy, retorne `"Usuário inativo"`.
// * Se `username` ou `password` forem falsy, retorne `"Credenciais incompletas"`.
// * Caso contrário, retorne `"Autenticado"`.

// ---

// ### **Exercício 2 – Comparação de números com precedência**

// Crie uma função `compareNumbers(a, b, c)` que:

// * Retorne `"Maior que todos"` se `a + b * c > 100`.
// * Retorne `"Maior que dois"` se `a + b > c`.
// * Caso contrário, retorne `"Nenhuma condição satisfeita"`.

// Teste com diferentes combinações para perceber **precedência de operadores**.

// ---

// ### **Exercício 3 – Checagem de formulário**

// Crie uma função `validateForm(form)` que receba um objeto `{ name, email, age }` e:

// * Se qualquer campo for falsy, retorne `"Formulário incompleto"`.
// * Se `age < 18`, retorne `"Menor de idade"`.
// * Se todos os campos forem válidos, retorne `"Formulário válido"`.

// ---

// ### **Exercício 4 – Classificação de números negativos, zero ou positivos**

// Crie uma função `classifyNumber(num)` que:

// * Retorne `"Número inválido"` se `num` for falsy ou `NaN`.
// * Retorne `"Negativo"` se `num < 0`.
// * Retorne `"Zero"` se `num === 0`.
// * Retorne `"Positivo"` caso contrário.

// ---

// ### **Exercício 5 – Avaliação de sinais em uma expressão**

// Crie uma função `evaluateExpression(x, y)` que:

// * Retorne `"Sinal positivo"` se `x - y > 0`.
// * Retorne `"Sinal negativo"` se `x - y < 0`.
// * Retorne `"Zero"` se `x - y === 0`.

// Teste com diferentes valores para `x` e `y` para entender a **precedência do operador `-`**.

// ---

// ### **Exercício 6 – Prioridade em cálculo de idade**

// Crie uma função `checkAge(birthYear)` que calcule a idade usando `2025 - birthYear` e:

// * Se o resultado for falsy ou maior que 120, retorne `"Idade inválida"`.
// * Se idade < 18, retorne `"Menor de idade"`.
// * Se idade >= 18 e <= 65, retorne `"Adulto"`
// * Caso contrário, retorne `"Idoso"`

// ---

// ### **Exercício 7 – Checagem de múltiplos de 3 e 5**

// Crie uma função `checkMultiple(num)` que:

// * Se `num` for falsy ou `NaN`, retorne `"Número inválido"`.
// * Se `num` for múltiplo de 3 **e** 5, retorne `"Múltiplo de 3 e 5"`.
// * Se `num` for múltiplo de 3 apenas, retorne `"Múltiplo de 3"`.
// * Se `num` for múltiplo de 5 apenas, retorne `"Múltiplo de 5"`.
// * Caso contrário, retorne `"Não é múltiplo de 3 ou 5"`.

// ---

// ### **Exercício 8 – Status de pedido**

// Crie uma função `orderStatus(order)` que receba `{ paid, shipped, delivered }` e:

// * Se `order` for falsy, retorne `"Pedido inexistente"`.
// * Se `paid` for falsy, retorne `"Aguardando pagamento"`.
// * Se `shipped` for falsy, retorne `"Aguardando envio"`.
// * Se `delivered` for falsy, retorne `"Aguardando entrega"`.
// * Caso contrário, retorne `"Pedido concluído"`.

// ---

// ### **Exercício 9 – Avaliação de intervalo numérico**

// Crie uma função `checkRange(num)` que:

// * Retorne `"Inválido"` se `num` for falsy ou `NaN`.
// * Retorne `"Entre 0 e 10"` se `num > 0 && num <= 10`.
// * Retorne `"Entre 11 e 20"` se `num > 10 && num <= 20`.
// * Retorne `"Acima de 20"` se `num > 20`.
// * Retorne `"Menor ou igual a 0"` caso contrário.

// ---

// ### **Exercício 10 – Prioridade lógica em descontos**

// Crie uma função `calculateFinalPrice(price, coupon, vip)` que:

// * Retorne `"Preço inválido"` se `price` for falsy.
// * Se `vip` **e** `coupon` forem truthy, aplique 30% de desconto.
// * Se apenas `coupon` for truthy, aplique 15% de desconto.
// * Se apenas `vip` for truthy, aplique 10% de desconto.
// * Caso contrário, retorne o preço normal.