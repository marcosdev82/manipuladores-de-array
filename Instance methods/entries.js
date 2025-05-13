// O método entries() retorna um novo objeto Array Iterator que contém os pares chave/valor para cada índice no array.

// ( Array Iterator) O que é um iterador de array? 
// Um iterador de array é um objeto que permite percorrer os elementos de um array de forma sequencial, 
// // sem precisar conhecer a estrutura interna do array. Ele fornece métodos para acessar os elementos do array um por um, 
// facilitando a iteração e manipulação dos dados contidos no array.

var arr = ["a", "b", "c"];
console.log(arr);
var eArr = arr.entries(); // retorna um novo objeto Array Iterator que contém os pares chave/valor para cada índice no array

for (let e of eArr) {
  console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']