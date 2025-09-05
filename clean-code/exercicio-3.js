// ### **Exercício 12 – Evitar aninhamento profundo**

// Você tem o seguinte código:

// ```js
// if (user) {
//   if (user.active) {
//     if (user.role === "admin") {
//       console.log("Acesso permitido");
//     }
//   }
// }
// ```

// **Tarefa:** Reescreva para **reduzir o aninhamento** e melhorar a legibilidade.

// ---

// ### **Exercício 13 – Função com responsabilidade única**

// Dada a função:

// ```js
// function process(data) {
//   console.log("Iniciando");
//   data.forEach(d => console.log(d));
//   console.log("Finalizado");
// }
// ```

// **Tarefa:** Separe em funções menores, cada uma com **uma responsabilidade clara**.

// ---

// ### **Exercício 14 – Nomes de função claros**

// A função abaixo não tem um nome intuitivo:

// ```js
// function fn(a, b) {
//   return a.filter(x => x > b);
// }
// ```

// **Tarefa:** Dê um **nome de função e parâmetros significativos** que deixem claro o que a função faz.

// ---

// ### **Exercício 15 – Evitar comentários óbvios**

// Remova comentários desnecessários e torne o código **autoexplicativo**:

// ```js
// // cria array de números
// const arr = [1,2,3,4];
// ```

// ---

// ### **Exercício 16 – Constantes significativas**

// Substitua números mágicos por **constantes com nomes claros**:

// ```js
// if (score > 100) {
//   console.log("Parabéns!");
// }
// ```

// ---

// ### **Exercício 17 – Evitar repetição de código**

// Evite repetir código neste trecho:

// ```js
// console.log("Erro no login");
// console.log("Erro no cadastro");
// console.log("Erro no pagamento");
// ```

// ---

// ### **Exercício 18 – Função de validação clara**

// Crie uma função para validar emails, separando **checagem de null/undefined** e **formato do email**, ao invés de uma única função gigante.

// ---

// ### **Exercício 19 – Retorno consistente**

// Reescreva a função para que sempre **retorne o mesmo tipo de valor**:

// ```js
// function getUserStatus(user) {
//   if (!user) return null;
//   if (user.active) return true;
//   return "inactive";
// }
// ```

// ---

// ### **Exercício 20 – Evitar encadeamento complexo**

// Dado o código:

// ```js
// const result = data && data.items && data.items[0] && data.items[0].value;
// ```

// **Tarefa:** Reescreva usando uma **forma mais legível e segura**, como optional chaining ou variáveis intermediárias.

// ---

// ### **Exercício 21 – Nome de objeto claro**

// Você tem um objeto com propriedades genéricas:

// ```js
// const obj = { a: 1, b: 2, c: 3 };
// ```

// **Tarefa:** Reescreva com **nomes de propriedades significativos** que reflitam o conteúdo ou função do objeto.

// ---

 