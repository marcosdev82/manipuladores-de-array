// O método copyWithin() copia parte de um array para outra localização no mesmo array e o retorna sem alterar seu tamanho.

const array1 = ['a', 'b', 'c', 'd', 'e'];
console.log(array1);

// copia os elementos de 0 a 3 para o indice 3  
array1.copyWithin(0, 3, 4)
console.log(array1); // ['a', 'b', 'c', 'a', 'b']