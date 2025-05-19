// The findLast() method of Array instances iterates the array in reverse order and returns 
// the value of the first element that satisfies the provided testing function. 
// If no elements satisfy the testing function, undefined is returned.

const array1 = [5, 12, 50, 130, 44];

const found = array1.findLast((element) => element > 45);

console.log(found);
// Expected output: 130

// Encontre o último objeto em uma matriz que corresponda às propriedades do elemento
// Este exemplo mostra como você pode criar um teste com base nas propriedades dos elementos da matriz.

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "fish", quantity: 1 },
  { name: "cherries", quantity: 5 },
];

// return true inventory stock is low
function isNotEnough(item) {
  return item.quantity < 2;
}

console.log(inventory.findLast(isNotEnough));
// { name: "fish", quantity: 1 }
