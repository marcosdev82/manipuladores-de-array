

const colors = ["red", "yellow", "blue"];
colors[5] = "purple";

// // obter chaves]
const keys = colors.keys();
console.log(colors.keys())
// // cria um iterator
for(key of keys) {
    console.log(colors[key])
}

// // obtem proximo 
const iterator = colors.values();
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
 
// Output
// 0: red
// 1: yellow
// 2: blue
// 3: undefined
// 4: undefined
// 5: purple

// const newColors = colors.toReversed(); // ['purple', undefined, undefined, 'blue', 'yellow', 'red']