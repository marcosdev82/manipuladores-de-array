// O método entries() retorna um novo objeto Array Iterator que contém os pares chave/valor para cada índice no array.

var arr = ["a", "b", "c"];
console.log(arr);
var eArr = arr.entries();

for (let e of eArr) {
  console.log(e);
}
// [0, 'a']
// [1, 'b']
// [2, 'c']