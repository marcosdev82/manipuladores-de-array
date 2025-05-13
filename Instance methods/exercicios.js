const arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['a', 'b', 'c', 'd', 'e'];
const arr3 = ['f', 'g', 'h', 'i', 'j'];

// console.log(arr.at(0))
// console.log(arr2.at(-1))
// ----------------------------------------------------

// crua um novo array com os valores de arr, arr2 e arr3
// console.log(arr.concat(arr2, arr3))

//-----------------------------------------------------

console.log(arr.entries()) // Object [Array Iterator] {}

arrIterator = arr.entries()
let novoArray = []
for (let e of arrIterator) {
  novoArray.push(e)
}   
console.log(novoArray)
// novoArray.concat(arr2)
// console.log(novoArray.concat(arr2).entries())