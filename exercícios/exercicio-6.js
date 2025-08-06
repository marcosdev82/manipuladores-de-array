// ## Instruções

// 1. Crie uma string com os seguintes itens separados por vírgula:
//    ```
//    "arroz,feijão,carne,leite,carne,pão"
//    ```

// 2. Converta essa string para um array usando `split()`.

// 3. Use `map()` para colocar todos os itens em letras maiúsculas.

// 4. Use `indexOf()` e `lastIndexOf()` para descobrir a posição do primeiro e do último item "CARNE".

// 5. Use `some()` para verificar se existe algum item chamado "ARROZ".

// 6. Use `pop()` para remover o último item da lista.

// 7. Use `copyWithin()` para copiar os dois primeiros itens para as últimas duas posições do array.

// Explicação:
// copyWithin(target, start, end)

// target = 3: onde começará a cópia (posição 3 → 'LEITE')

// start = 0: índice inicial da cópia (inclusive)

// end = 2: índice final da cópia (exclusivo)

// 8. Por fim, use `join()` para transformar o array novamente em uma string, separando os itens com `" | "`.

// ---

// 1. Crie uma string com os seguintes itens separados por vírgula:
const foods = "arroz,feijão,carne,leite,carne,pão"

// 2. Converta essa string para um array usando `split()`.
const arrFoods = foods.split(',')
console.log(arrFoods)

// 3. Use `map()` para colocar todos os itens em letras maiúsculas.
const uppercaseFood = arrFoods.map((food) => food.toUpperCase())
console.log(uppercaseFood)

// 4. Use `indexOf()` e `lastIndexOf()` para descobrir a posição do primeiro e do último item "CARNE".
console.log(uppercaseFood.indexOf('CARNE'))
console.log(uppercaseFood.lastIndexOf('CARNE'))

// 5. Use `some()` para verificar se existe algum item chamado "ARROZ".
console.log(uppercaseFood.some((food) => food === 'ARROZ'))

// 6. Use `pop()` para remover o último item da lista.
console.log(uppercaseFood.pop())
console.log(uppercaseFood)

// 7. Use `copyWithin()` para copiar os dois primeiros itens para as últimas duas posições do array.
console.log(uppercaseFood.copyWithin(3,0,2))

// 8. Por fim, use `join()` para transformar o array novamente em uma string, separando os itens com `" | "`.
console.log(uppercaseFood.join(' | '))