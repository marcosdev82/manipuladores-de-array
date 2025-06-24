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

// 8. Por fim, use `join()` para transformar o array novamente em uma string, separando os itens com `" | "`.

// ---



// 1. Crie uma string com os seguintes itens separados por vírgula:
const str = "arroz,feijão,carne,leite,carne,pão"

// 2. Converta essa string para um array usando `split()`.
const food = str.split(',')
console.log(food)

// 3. Use `map()` para colocar todos os itens em letras maiúsculas.
const foodUppercase = food.map((item) => {
    return item.toUpperCase()
})
console.log(foodUppercase)

// 4. Use `indexOf()` e `lastIndexOf()` para descobrir a posição do primeiro e do último item "CARNE".
console.log(foodUppercase.indexOf('ARROZ'))
console.log(foodUppercase.lastIndexOf('CARNE'))

// 5. Use `some()` para verificar se existe algum item chamado "ARROZ".
const foodExist = foodUppercase.some((item) => item === "ARROZ")
console.log(foodExist)

// 6. Use `pop()` para remover o último item da lista.
const lastItem = foodUppercase.pop()
console.log(lastItem, foodUppercase)

// 7. Use `copyWithin()` para copiar os dois primeiros itens para as últimas duas posições do array.
const positionChange = foodUppercase.copyWithin(1, 3, 4)
console.log(positionChange)