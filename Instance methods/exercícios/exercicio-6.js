// ## 📌 Instruções

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



//  1. Crie uma string com os seguintes itens separados por vírgula:
const str = "arroz,feijão,carne,leite,carne,pão"

// 2. Converta essa string para um array usando `split()`.
const arr = str.split(',');
console.log(arr)

// 3. Use `map()` para colocar todos os itens em letras maiúsculas.
const maiusculas = arr.map((palavra) => palavra.toUpperCase())
console.log(maiusculas)

// 4. Use `indexOf()` e `lastIndexOf()` para descobrir a posição do primeiro e do último item "CARNE".
console.log(arr.indexOf('carne')) // retorna o indice da primeira aparição
console.log(arr.lastIndexOf('carne')) // retorna o indice da ultima aparição

// 5. Use `some()` para verificar se existe algum item chamado "ARROZ".
const ocorrencia = arr.some((elemento) => elemento === "arroz")
console.log(ocorrencia)

// 6. Use `pop()` para remover o último item da lista.
console.log(arr.pop())

// 7. Use `copyWithin()` para copiar os dois primeiros itens para as últimas duas posições do array.
// console.log(arr.copyWithin(1, 3, 4))
console.log(arr.join('|'))