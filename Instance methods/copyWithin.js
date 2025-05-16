// O método copyWithin() copia parte de um array para outra localização no mesmo array e o retorna sem 
// alterar seu tamanho.

// Substituir partes de um array com outras partes dele mesmo.
// Útil para manipulação de dados em arrays grandes, sem alocar nova memória.

// | Parâmetro          | Descrição                                                                         |
// | ------------------ | --------------------------------------------------------------------------------- |
// | `target`           | Índice para onde copiar os elementos.                                             |
// | `start`            | Índice inicial de onde copiar os elementos.                                       |
// | `end` *(opcional)* | Índice final (não incluso) até onde copiar. Se omitido, vai até o final do array. |


const array1 = ['a', 'b', 'c', 'd', 'e'];
console.log(array1);

// copia os elementos de 0 a 3 para o indice 3  
array1.copyWithin(0, 3, 4)
console.log(array1); // ['a', 'b', 'c', 'a', 'b']

