// <!-- Excelente! A seguir estão **10 exercícios de lógica avançada em JavaScript**, combinando:

// * **Tabelas verdade** (valores booleanos e operadores: `&&`, `||`, `!`, `!=`, `==`, `===`, etc)
// * **Precedência de operadores**
// * **Loops** (`for`, `while`, `for...of`)
// * **Condições compostas e aninhadas**

// Em JavaScript, a precedência dos operadores determina a ordem em que os operadores são avaliados. A ordem entre os operadores que temos é:

// ! (negação lógica – mais alta precedência)

// && (E lógico – intermediária)

// || (OU lógico – mais baixa entre os três)

// > Esses exercícios são ótimos para consolidar raciocínio lógico e fluxo de controle.

// ---

// ## 🧠 10 Exercícios — Tabela Verdade + Precedência + Loops

// ---

// ### ✅ 1. **Tabela Verdade com 2 variáveis booleanas**

// Crie um loop que percorre as combinações possíveis de duas variáveis booleanas e imprima o resultado de `A && B` e `A || B`.

// ```js
// const valores = [true, false];

// for (let A of valores) {
//   for (let B of valores) {
//     console.log(`A: ${A}, B: ${B} -> A && B: ${A && B}, A || B: ${A || B}`);
//   }
// }
// ```

// ---

// ### ✅ 2. **Negação e igualdade estrita**

// Dado um array de valores, identifique quais são booleanos `false`, mas não são o valor `false` literal.

// ```js
// const valores = [false, 0, "", null, undefined, NaN, true];

// for (let valor of valores) {
//   if (!valor && valor !== false) {
//     console.log(`"${valor}" é falsy, mas não é literalmente false`);
//   }
// }
// ```

// ---

// ### ✅ 3. **Verifique precedência de operadores**

// Explique e mostre o resultado das expressões abaixo:

// ```js
// const A = true;
// const B = false;
// const C = true;

// const resultado = A || B && !C;

// console.log(resultado); // false? true?
// // Dica: precedência: ! > && > ||
// ```

// ---

// ### ✅ 4. **Contar quantos resultados verdadeiros há em uma matriz de condições**

// ```js
// const condicoes = [
//   true && false,
//   true || false,
//   !false && true,
//   false || false,
//   !(true && false),
// ];

// let count = 0;
// for (let c of condicoes) {
//   c === true && count++;
// }
// console.log(`Total de condições verdadeiras: ${count}`);
// ```

// ---

// ### ✅ 5. **Simular tabela verdade de 3 variáveis**

// ```js
// const valores = [true, false];

// for (let A of valores) {
//   for (let B of valores) {
//     for (let C of valores) {
//       const resultado = A && (B || !C);
//       console.log(`A:${A}, B:${B}, C:${C} => A && (B || !C): ${resultado}`);
//     }
//   }
// }
// ```

// ---

// ### ✅ 6. **Classificação com múltiplas condições lógicas (precedência + loop)**

// Classifique alunos com base em 2 notas e presença.

// ```js
// const alunos = [
//   { nome: "Ana", n1: 7, n2: 8, presenca: 90 },
//   { nome: "Beto", n1: 4, n2: 5, presenca: 80 },
//   { nome: "Carlos", n1: 6, n2: 6, presenca: 50 },
// ];

// for (let a of alunos) {
//   const media = (a.n1 + a.n2) / 2;
//   const aprovado = media >= 6 && a.presenca >= 75;
//   console.log(`${a.nome} está ${aprovado ? "Aprovado" : "Reprovado"}`);
// }
// ```

// ---

// ### ✅ 7. **Encontrar combinações verdadeiras com operador `!=`**

// ```js
// const valores = [true, false];

// for (let A of valores) {
//   for (let B of valores) {
//     console.log(`A != B => ${A} != ${B} => ${A != B}`);
//   }
// }
// ```

// ---

// ### ✅ 8. **Laço `while` com condição complexa**

// Simule um contador que para ao atingir 10 **ou** se o número atual for divisível por 4 **e** maior que 6.

// ```js
// let i = 0;

// while (true) {
//   console.log("i =", i);
//   if (i === 10 || (i % 4 === 0 && i > 6)) break;
//   i++;
// }
// ```

// ---

// ### ✅ 9. **Função que retorna o resultado lógico de 3 entradas booleanas com parênteses variados**

// ```js
// function avaliarLogica(A, B, C) {
//   return A || B && !C; // modifique a ordem e veja o resultado mudar
// }

// console.log(avaliarLogica(false, true, true));  // ?
// console.log(avaliarLogica(false, true, false)); // ?
// ```

// ---

// ### ✅ 10. **Validar todos os usuários com múltiplos critérios**

// ```js
// const usuarios = [
//   { nome: "João", ativo: true, admin: false },
//   { nome: "Maria", ativo: true, admin: true },
//   { nome: "Pedro", ativo: false, admin: true },
// ];

// for (let u of usuarios) {
//   if (u.ativo && u.admin) {
//     console.log(`${u.nome} é um admin ativo.`);
//   } else if (!u.ativo && u.admin) {
//     console.log(`${u.nome} é admin, mas está inativo.`);
//   } else {
//     console.log(`${u.nome} é usuário comum.`);
//   }
// }
// ```

// --- -->

// ### ✅ 1. **Tabela Verdade com 2 variáveis booleanas**

// Crie um loop que percorre as combinações possíveis de duas variáveis booleanas e imprima o resultado de `A && B` e `A || B`.

const valores = [true, false]

for (let A of valores) {
  for (let B of valores) {
    console.log(`A: ${A}, B: ${B} -> A && B: ${A && B}, A || B: ${A || B}`);
  }
}

// ### ✅ 2. **Negação e igualdade estrita**

// Dado um array de valores, identifique quais são booleanos `false`, mas não são o valor `false` literal.

const valores2 = [false, 0, "", null, undefined, NaN, true];

for (let literal of valores2) {

  if (!literal && literal !== false) {
    console.log(`"${literal}" é falsy, mas não é literalmente false`);
  }
}

// ### ✅ 3. **Verifique precedência de operadores**

// Explique e mostre o resultado das expressões abaixo:

const A = true;
const B = false;
const C = true;

const resultado = A || B && !C; // true || false
console.log(resultado)

// ### ✅ 4. **Contar quantos resultados verdadeiros há em uma matriz de condições**

const condicoes = [
  true && false, //  false
  true || false, // true
  !false && true, // true
  false || false,  // false
  !(true && false), // true
];

let total = 0;
for(let c in condicoes) {
  if (condicoes[c]) {
    total++
  }
}


// ### ✅ 5. **Simular tabela verdade de 3 variáveis**

// const valores = [true, false];

const valores = [true, false];

for (let A of valores) {
  for (let B of valores) {
    for (let C of valores) {
      console.log(
        `A: ${A}, B: ${B}, C: ${C} => ` +
        `(A && B && C) = ${A && B && C} | ` +
        `((A && B) || C) = ${(A && B) || C} | ` +
        `(A || B || C) = ${A || B || C}`
      );
    }
  }
}

