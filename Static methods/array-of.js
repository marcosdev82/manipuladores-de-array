console.log(Array.of('foo', 2, 'bar', true));

console.log(Array.of());

// Diferenaça entre array of e array construtor

// A diferença entre Array.of()e o Array()construtor está no tratamento de argumentos únicos: Array.of(7) cria uma matriz com um único elemento
// , 7, enquanto Array(7) cria uma matriz vazia com uma lengthpropriedade de 7. (Isso implica uma matriz de 7 slots vazios, não slots com undefinedvalores reais.)

Array.of(7); // [7]
Array(7); // Array com 7 slotes vazil.

Array.of(1, 2, 3); // [1, 2, 3]
Array(1, 2, 3); // [1, 2, 3]
