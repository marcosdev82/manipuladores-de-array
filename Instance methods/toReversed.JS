// O toReversed() método de Arrayinstâncias é a contraparte de cópia do reverse() método. 
// Ele retorna um novo array com os elementos em ordem inversa.

const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]

// | Método         | Mutável?                              | Retorna novo array?                          | Requisitos                |
// | -------------- | ------------------------------------- | -------------------------------------------- | ------------------------- |
// | `reverse()`    | ✅ **Sim** (modifica o array original) | ❌ **Não** (retorna o mesmo array modificado) | Padrão                    |
// | `toReversed()` | ❌ **Não** (não altera o original)     | ✅ **Sim** (retorna um novo array invertido)  | ECMAScript 2023+ (ES2023) |

const numeros = [1, 2, 3];

// reverse() modifica o array original
const invertido1 = numeros.reverse();
console.log(invertido1); // [3, 2, 1]
console.log(numeros);    // [3, 2, 1] ← foi alterado

// toReversed() cria uma cópia invertida, sem alterar o original
const numeros2 = [1, 2, 3];
const invertido2 = numeros2.toReversed();
console.log(invertido2); // [3, 2, 1]
console.log(numeros2);   // [1, 2, 3] ← permanece intacto

