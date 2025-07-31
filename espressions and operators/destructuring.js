// A sintaxe de desestruturação é uma sintaxe JavaScript que permite descompactar valores de arrays, ou propriedades de objetos, em variáveis distintas. 
// Ela pode ser usada em locais que recebem dados (como o lado esquerdo de uma atribuição ou em qualquer lugar que crie novas vinculações de identificadores).

let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// Expected output: Array [30, 40, 50]

const obj = { d, e, f };
const { d, e, f } = obj;
// Equivalent to:
// const a = obj.a, b = obj.b, c = obj.c;

const obj2 = { prop1: x, prop2: y, prop3: z };
const { prop1: x, prop2: y, prop3: z } = obj;
// Equivalent to:
// const x = obj.prop1, y = obj.prop2, z = obj.prop3;

const foo = ["one", "two", "three"];

const [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"
