

const colors = ["red", "yellow", "blue"];
colors[5] = "purple";

// cria um iterator
const iterator = colors.keys();

const obtemChave = Object.keys(colors);

console.log(iterator, obtemChave)
console.log(iterator.next())


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