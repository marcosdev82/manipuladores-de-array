// // 1.  Dado o objeto abaixo, remova a propriedade `idade` usando `delete`.
// const pessoa = { nome: "Carlos", idade: 28, cidade: "Fortaleza" };

// delete pessoa.idade
// console.log(pessoa)

// // 2. Use destructuring para extrair `nome` e `cidade` da constante `usuario`.
// const usuario = { nome: "Ana", idade: 22, cidade: "Salvador" };

// const {nome, cidade} = usuario
// console.log(nome, cidade)

// // 3. Acesse o número 7 do array bidimensional abaixo.
// const matriz = [
//     [1, 2],
//     [3, 4],
//     [5, 6, 7]
// ];

// console.log(matriz[2][2])

// // 4. Crie um novo array que una os valores de `a` e `b` usando spread.
// const a = [1, 2];
// const b = [3, 4];

// const ab = [...a, ...b]
// console.log(ab)

// // 5. Use um `while` para imprimir os números de 1 a 5 no console.
// let i = 1
// while(i <=5) {
//     console.log(i++)
// }

// // 6. Mostre o número de letras da string abaixo.
// const palavra = "JavaScript";
// console.log(palavra.length)

// // 7. Remova o primeiro item do array usando `shift`.
// const frutas = ["maçã", "banana", "laranja"];

// console.log(frutas.shift())
// console.log(frutas)

// // 8. Usando `reduceRight`, junte os elementos do array de trás para frente.
// const letras = ["a", "b", "c"];
// console.log(letras.reduceRight((str, char) => str.concat(char), []))

// // 9. Preencha um array de tamanho 5 com o valor `0`.

// console.log(new Array(5).fill(0))

// // 10. Verifique se todos os números do array são positivos.
// const numeros = [1, 3, 5, 7];

// console.log(numeros.every((num) => num > 0))

// // 11.  Extraia os 4 primeiros caracteres da string abaixo usando `substr`.
// const texto = "Programador";
// console.log(texto.substr(4,7))

// // 12. Use `flatMap` para transformar e achatar o array.
// // transforme em [[1, 2], [2, 4], [3, 6]] e depois em [1, 2, 2, 4, 3, 6]
// const numeros2 = [1, 2, 3];
// const arrTransform = numeros2.flatMap((num) => {
//     return [[num,2 * num]]
// })
// console.log(arrTransform.flat())

// // 13. Liste as entradas (chave e valor) do objeto abaixo.
// const produto = { nome: "Notebook", preco: 2500 };

// const entradas = Object.entries(produto)

// for (let [chave, valor] of entradas) {
//     console.log(`${chave}: ${valor}`)
// }

// // 14. Liste apenas as chaves do objeto abaixo.
// const carro = { marca: "Toyota", modelo: "Corolla", ano: 2020 };

// console.log(Object.keys(carro))

// 15. Usando `reduceRight`, junte os elementos do array de trás para frente em uma string
// const letras = ["a", "b", "c"];

// const reverseUnionStr = letras.reduceRight((acc, char) => {
//     return acc ? char + ',' + acc : char
// }, '')
// console.log(reverseUnionStr)

// -------------------------

// 1.  Dado o objeto abaixo, remova a propriedade `idade` usando `delete`.
const pessoa = { nome: "Carlos", idade: 28, cidade: "Fortaleza" };
delete pessoa.idade
console.log(pessoa)

// 2. Use destructuring para extrair `nome` e `cidade` da constante `usuario`.
const usuario = { nome: "Ana", idade: 22, cidade: "Salvador" };

const {nome, cidade} = usuario
console.log(nome, cidade) 


// 3. Acesse o número 7 do array bidimensional abaixo.
const matriz = [
    [1, 2],
    [3, 4],
    [5, 6, 7]
];
console.log(matriz[2][2])

// 4. Crie um novo array que una os valores de `a` e `b` usando spread.
const a = [1, 2];
const b = [3, 4];

const ab = [...a, ...b]
console.log(ab)

// 5. Use um `while` para imprimir os números de 1 a 5 no console.
let i = 1;
while(i <= 5) {
    console.log(i++)
}

// 6. Mostre o número de letras da string abaixo.
const palavra = "JavaScript";
console.log(palavra.length)

// 7. Remova o primeiro item do array usando `shift`.
const frutas = ["maçã", "banana", "laranja"];
console.log(frutas.shift())
console.log(frutas)

// 8. Usando `reduceRight`, junte os elementos do array de trás para frente.
const letras = ["a", "b", "c"];

console.log(letras.reduceRight((arr, char) => {
    arr.push(char)
    return arr
}, []))

// 9. Preencha um array de tamanho 5 com o valor `0`.
console.log(Array(5).fill(0))

// 10. Verifique se todos os números do array são positivos.
const numeros = [1, 3, 5, 7];
console.log(numeros.every((num) => num > 0))

// 11.  Extraia os 4 primeiros caracteres da string abaixo usando `substr`.
const texto = "Programador";
console.log(texto.substring(0,4))

// 12. Use `flatMap` para transformar e achatar o array.
// transforme em [[1, 2], [2, 4], [3, 6]] e depois em [1, 2, 2, 4, 3, 6]
const numeros2 = [1, 2, 3];
const transforme = numeros2.flatMap((num) => [[num, num * 2]])
console.log(transforme)
console.log(transforme.flat())

// 13. Liste as entradas (chave e valor) do objeto abaixo.
const produto = { nome: "Notebook", preco: 2500 };

for (let key in produto) {
    console.log(`${key}: ${produto[key]}`)
}


// 14. Liste apenas as chaves do objeto abaixo.
const carro = { marca: "Toyota", modelo: "Corolla", ano: 2020 };
console.log(Object.keys(carro))

for (key in carro) {
    console.log(key)
}

