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

let arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3);
// Copia os elementos a partir do índice 3 (valor 4) até o fim e cola no início

console.log(arr); // [4, 5, 3, 4, 5]


let arr2 = [10, 20, 30, 40, 50];
arr2.copyWithin(1, 3, 5); 
// Copia os elementos de índice 3 (40) até 5 (exclusivo), e cola a partir do índice 1

console.log(arr2); // [10, 40, 50, 40, 50]


