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
const str = "arroz,feijão,carne,leite,carne,pão";
console.log(str)

// 2. Converta essa string para um array usando `split()`.
const alimentos = str.split(',')
console.log(alimentos)

// 3. Use `map()` para colocar todos os itens em letras maiúsculas.
const alimentosUppercase = alimentos.map((alimento) => alimento.toUpperCase())
console.log(alimentosUppercase)

// 4. Use `indexOf()` e `lastIndexOf()` para descobrir a posição do primeiro e do último item "CARNE".
console.log(alimentos.indexOf('carne'))
console.log(alimentos.lastIndexOf('carne'))

// 5. Use `some()` para verificar se existe algum item chamado "ARROZ".
console.log(alimentosUppercase.some((alimento) => alimento === "ARROZ"))

// 6. Use `pop()` para remover o último item da lista.
console.log(alimentosUppercase.pop())
console.log(alimentosUppercase)

// 7. Use `copyWithin()` para copiar os dois primeiros itens para as últimas duas posições do array.
console.log(alimentosUppercase.copyWithin(0, 1, 4))

// 8. Por fim, use `join()` para transformar o array novamente em uma string, separando os itens com `" | "`.
console.log(alimentosUppercase.join(' | '))