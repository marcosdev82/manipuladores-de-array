// Beleza 🚀 Vou montar um **desafio de JavaScript manipulando o DOM** bem completo, que envolva várias funções clássicas (`createElement`, `getElementById`, `querySelectorAll`, `classList`, `appendChild`, `setAttribute`, etc).

// ---

// ## 🔥 Desafio: Lista de Tarefas Interativa

// 👉 Objetivo: Criar uma lista de tarefas dinâmica, onde o usuário pode **adicionar, marcar como concluída e remover tarefas** usando apenas JavaScript e manipulação do DOM.

// ---

// ### Regras do desafio:

// 1. O HTML deve começar apenas com um **input**, um **botão** e uma `<ul>` vazia.
// 2. Cada vez que o usuário clicar em "Adicionar", o valor do input deve virar uma `<li>` dentro da lista.
// 3. Cada `<li>` deve ter:

//    * O texto da tarefa
//    * Um botão "✔️ Concluir" (que adiciona a classe `done` na `<li>`)
//    * Um botão "❌ Remover" (que deleta a `<li>`).
// 4. Use **`classList.add()`** para estilizar os itens concluídos (ex.: texto riscado).
// 5. Use **`appendChild()`** para inserir os elementos dinamicamente.
// 6. Use **`querySelectorAll()`** para manipular os botões criados.

// ---

// ### Estrutura base (HTML)

// ```html
// <div id="app">
//   <h2>📌 Lista de Tarefas</h2>
//   <input type="text" id="tarefa" placeholder="Digite uma tarefa..." />
//   <button id="addBtn">Adicionar</button>
//   <ul id="lista"></ul>
// </div>

// <style>
//   .done {
//     text-decoration: line-through;
//     color: gray;
//   }
// </style>
// ```

// ---

// ### Script do desafio (JavaScript)

// ```javascript
// (function () {
//   "use strict";

//   const input = document.getElementById("tarefa");
//   const btn = document.getElementById("addBtn");
//   const lista = document.getElementById("lista");

//   btn.addEventListener("click", function () {
//     const texto = input.value.trim();

//     if (texto === "") {
//       alert("Digite uma tarefa!");
//       return;
//     }

//     // Criar li
//     const li = document.createElement("li");
//     li.textContent = texto;

//     // Botão concluir
//     const concluirBtn = document.createElement("button");
//     concluirBtn.textContent = "✔️";
//     concluirBtn.classList.add("concluir");

//     // Botão remover
//     const removerBtn = document.createElement("button");
//     removerBtn.textContent = "❌";
//     removerBtn.classList.add("remover");

//     // Eventos dos botões
//     concluirBtn.addEventListener("click", () => {
//       li.classList.toggle("done");
//     });

//     removerBtn.addEventListener("click", () => {
//       lista.removeChild(li);
//     });

//     // Adiciona botões dentro da li
//     li.appendChild(concluirBtn);
//     li.appendChild(removerBtn);

//     // Adiciona li na lista
//     lista.appendChild(li);

//     // Limpar input
//     input.value = "";
//   });
// })();
// ```

// ---

// ### ✅ O que o aluno vai treinar:

// * `createElement`
// * `getElementById`
// * `classList.add` / `classList.toggle`
// * `appendChild`
// * `querySelectorAll` (se quiser manipular todos os botões depois)

// ---

// Quer que eu monte **mais 2 variações** de desafios (ex.: um com **modal** e outro com **filtro de pesquisa**) para ficar como uma trilha de treino em DOM?
