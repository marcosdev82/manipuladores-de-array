// // Exercício 1 – Soma de Números
// // Objetivo: Some todos os números do array.
// const numeros1 = [1, 2, 3, 4, 5];
// const soma = numeros1.reduce((acc, curr) => acc + curr, 0);
// console.log('Soma:', soma); // Resultado esperado: 15

// // Exercício 2 – Contar ocorrências de uma palavra
// // Objetivo: Conte quantas vezes a palavra "sim" aparece no array.
// const respostas = ['sim', 'não', 'sim', 'sim', 'não', 'sim'];
// const quantidadeSim = respostas.reduce((acc, palavra) => palavra === 'sim' ? acc + 1 : acc, 0);
// console.log('Quantidade de "sim":', quantidadeSim); // Resultado esperado: 4

// // Exercício 3 – Transformar array em objeto
// // Objetivo: Transforme o array em um objeto onde a chave é o número e o valor é seu quadrado.
// const numeros2 = [1, 2, 3, 4];
// const objetoQuadrados = numeros2.reduce((obj, num) => {
//     obj[num] = num * num;
//     return obj;
// }, {});
// console.log('Objeto com quadrados:', objetoQuadrados); // Resultado esperado: {1: 1, 2: 4, 3: 9, 4: 16}

// // Exercício 4 – Flatten de array
// // Objetivo: Transforme um array de arrays em um único array.
// const arrays = [[1, 2], [3, 4], [5]];
// const arrayUnico = arrays.reduce((acc, curr) => acc.concat(curr), []);
// console.log('Array achatado:', arrayUnico); // Resultado esperado: [1, 2, 3, 4, 5]

// // Exercício 5 – Contar caracteres em uma string
// // Objetivo: Conte a quantidade de vezes que cada letra aparece.
// const palavra = 'banana';
// const contagemLetras = palavra.split('').reduce((acc, letra) => {
//     acc[letra] = (acc[letra] || 0) + 1;
//     return acc;
// }, {});
// console.log('Contagem de letras:', contagemLetras); // Resultado esperado: { b: 1, a: 3, n: 2 }


// Exercício 1 – Soma de Números
// const numeros1 = [1, 2, 3, 4, 5];
// console.log(numeros1.reduce((acc, curr) =>  acc + curr, 0))

// // Exercício 2 – Contar ocorrências de uma palavra
// const respostas = ['sim', 'não', 'sim', 'sim', 'não', 'sim'];
// console.log(respostas.reduce((acc, curr) => curr === "sim" ? acc + 1 : acc, 0))

// // Exercício 3 – Transformar array em objeto
// const numeros2 = [1, 2, 3, 4];
// const obj = numeros2.reduce((obj, num) => {
//     obj[num] = num * num
//     return obj
// },{})
// console.log(obj)

// Exercício 4 – Flatten de array
// const arrays = [[1, 2], [3, 4], [5]];
// console.log(arrays.reduce((acc, curr) => acc.concat(curr), []))

// const arr = [[1, 2], [3, 4], [5]]
// console.log(arr.flat())

// Exercício 5 – Contar caracteres em uma string
// const palavra = 'banana';
// const totalPalavras = palavra.split('').reduce((acc, letra) => {
//     acc[letra] = (acc[letra] || 0) + 1
//     return acc;
// }, {})

// console.log('--- segunda forma ---')


// const total = {}
// for (let l of palavra) {
//     total[l] = (total[l] || 0) + 1
// }
// console.log(total)

// for (i=0; i < palavra.length; i++) {
//     // console.log(palavra[i])
//     total[palavra[i]] = (total[palavra[i]] || 0) + 1
// }
// console.log(total)

// const palavra = "banana"

// palavra.split('').reduce((acc, curr) => {
//     acc[curr] = (acc[curr] || 0) + 1
//     return acc;
// }, {} )

// const respostas2 = ['sim', 'não', 'sim', 'sim', 'não', 'sim'];

// const retorno = respostas2.reduce((acc, curr) => {
//     return (curr === 'não')? acc + 1 : acc; 
// }, 0)
// console.log(retorno)



// // Exercício 3 – Transformar array em objeto
// // Objetivo: Transforme o array em um objeto onde a chave é o número e o valor é seu quadrado.

 const numeros2 = [1, 2, 3, 4];
 
 const result = numeros2.reduce((obj, num) => {
    obj[num] = num * num
    return obj
 }, {})

 console.log(result)
