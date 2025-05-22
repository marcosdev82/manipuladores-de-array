

const colors = ["red", "yellow", "blue"];
colors[5] = "purple";

// obter chaves
const iterator = colors.keys();
console.log(iterator)

// cria um iterator
const obtemChave = Object.keys(colors);
console.log(obtemChave)

// obtem procido 
// console.log(iterator.next())

for (const key of iterator) {
    console.log(`${key}: ${colors[key]}`);
}
// Output
// 0: red
// 1: yellow
// 2: blue
// 3: undefined
// 4: undefined
// 5: purple

// const newColors = colors.toReversed(); // ['purple', undefined, undefined, 'blue', 'yellow', 'red']