console.log(Array.of('foo', 2, 'bar', true));

console.log(Array.of());

// Diferenaça entre array of e array construtor

Array.of(7); // [7]
Array(7); // Array com 7 slotes vazil.

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3); // [1, 2, 3]
