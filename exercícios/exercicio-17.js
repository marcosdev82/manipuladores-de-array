 
// 1. `toLocaleString` – Lista de produtos formatada

// Exercício:
// Crie um array com nomes de 3 produtos e exiba-os como uma string formatada para o Brasil.


// const produtos = ["Arroz", "Feijão", "Macarrão"];
// console.log(produtos.toLocaleString("pt-BR")); 
// // Saída esperada: "Arroz, Feijão, Macarrão"

// ---

// 2. `toReversed` – Inverter array sem modificar original

// Exercício:
// Dado o array `[10, 20, 30, 40]`, use `toReversed` para gerar um novo array invertido e exiba os dois arrays.


// const numeros = [10, 20, 30, 40];
// const invertido = numeros.toReversed();

// console.log("Original:", numeros);
// console.log("Invertido:", invertido);


// ---

// 3. `splice` – Remover e adicionar itens

// Exercício:
// Dado o array `["a", "b", "c", "d"]`, remova o item "c" e insira "x" e "y" no lugar.


// const letras = ["a", "b", "c", "d"];
// letras.splice(2, 1, "x", "y");
// console.log(letras); // ["a", "b", "x", "y", "d"]


// ---

// 4. `some` – Verificar se há números negativos

// Exercício:
// Dado o array `[10, -5, 20, 3]`, verifique se existe algum número negativo.


// const numeros = [10, -5, 20, 3];
// const temNegativo = numeros.some(n => n < 0);
// console.log("Tem número negativo?", temNegativo); // true


// ---

// 5. `copyWithin` – Copiar parte do array dentro dele mesmo

// Exercício:
// Dado o array `[1, 2, 3, 4, 5]`, use `copyWithin` para copiar os dois últimos elementos para o início do array.


// const numeros = [1, 2, 3, 4, 5];
// numeros.copyWithin(0, 3, 5);
// console.log(numeros); // [4, 5, 3, 4, 5]


// ---

// 6. `slice` – Criar subarray de frutas

// Exercício:
// Dado o array `["Maçã", "Banana", "Laranja", "Uva"]`, crie um novo array contendo apenas "Banana" e "Laranja".


// const frutas = ["Maçã", "Banana", "Laranja", "Uva"];
// const selecionadas = frutas.slice(1, 3);
// console.log(selecionadas); // ["Banana", "Laranja"]


// ---

// 7. `while` – Somar números até passar de 50

// Exercício:
// Use um loop `while` para somar números consecutivos a partir de 1 até que a soma ultrapasse 50.


// let soma = 0;
// let numero = 1;

// while (soma <= 50) {
//   soma += numero;
//   numero++;
// }

// console.log("Soma final:", soma);

