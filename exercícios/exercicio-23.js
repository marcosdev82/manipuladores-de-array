
// ## 📝 Exercícios

// ### 1. **Array.from()**

// Crie uma função que receba uma string e retorne um array com cada caractere em maiúsculo.
// Exemplo: `"js"` → `["J", "S"]`.

// ---

// ### 2. **Array.of()**

// Use `Array.of` para criar um array com os números `10, 20, 30`.
// Depois, multiplique cada elemento por 2.

// ---

// ### 3. **Array.prototype.fill()**

// Crie um array com 5 posições e preencha todas com a palavra `"vazio"`.
// Depois, substitua apenas da posição 2 até a 4 com `"ocupado"`.

// ---

// ### 4. **Array.prototype.splice()**

// Dado o array `["a", "b", "c", "d"]`:

// * Remova o elemento na posição 2.
// * Adicione `"x"` e `"y"` no lugar.
//   Resultado esperado: `["a", "b", "x", "y", "d"]`.

// ---

// ### 5. **Array.prototype.reverse()**

// Dado o array `[1, 2, 3, 4, 5]`, use `reverse()` para inverter a ordem.
// Depois, use um loop para imprimir cada elemento na nova ordem.

// ---

// ### 6. **Array.prototype.toLocaleString()**

// Dado o array `[1000, 2000, 3000]`, use `toLocaleString("pt-BR")` para formatar os números como valores brasileiros.
// Resultado esperado: `"1.000,2.000,3.000"`.

// ---

// ### 7. **Array.isArray()**

// Crie uma função que receba um valor qualquer e verifique se ele é um array.
// Teste com:

// * `[]`
// * `{}`
// * `"texto"`

// ---

// ### 8. **Desafio extra com Array.from()**

// Use `Array.from({ length: 10 }, (_, i) => i + 1)` para criar um array de 1 até 10.
// Depois, filtre apenas os números pares.

// ---

// ### 1. **Array.from()**

// Crie uma função que receba uma string e retorne um array com cada caractere em maiúsculo.
// Exemplo: `"js"` → `["J", "S"]`.

const strJs = "js"

console.log(Array.from(strJs, (char) => {
    return char.toUpperCase()
}))

// ---

// ### 2. **Array.of()**

// Use `Array.of` para criar um array com os números `10, 20, 30`.
// Depois, multiplique cada elemento por 2.
const numbers = Array.of(10, 20, 30)
console.log(numbers)
const multiplos = numbers.map(num => num * 2)
console.log(multiplos)