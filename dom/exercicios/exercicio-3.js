// Perfeito! Vou criar **3 exercícios completos** focados em manipulação de DOM com tabelas, usando `createElement`, `getElementById`, `classList`, `appendChild`, `innerHTML`, etc.

// ---

// ## **Exercício 1 – Tabela de Usuários Básica**

// **Objetivo:** Criar uma tabela com colunas `Nome`, `Email` e `Idade`, preenchendo os dados de um array de objetos.

// ```html
// <div id="tabela-container"></div>

// <script>
// const usuarios = [
//   { Nome: "Ana", Email: "ana@email.com", Idade: 25 },
//   { Nome: "Carlos", Email: "carlos@email.com", Idade: 30 },
//   { Nome: "Maria", Email: "maria@email.com", Idade: 28 },
// ];

// const container = document.getElementById("tabela-container");

// // Cria tabela
// const table = document.createElement("table");
// table.classList.add("tabela-usuarios");
// table.border = "1";

// // Cria cabeçalho
// const thead = document.createElement("thead");
// const headerRow = document.createElement("tr");
// Object.keys(usuarios[0]).forEach(col => {
//   const th = document.createElement("th");
//   th.textContent = col;
//   headerRow.appendChild(th);
// });
// thead.appendChild(headerRow);
// table.appendChild(thead);

// // Cria corpo da tabela
// const tbody = document.createElement("tbody");
// usuarios.forEach(user => {
//   const row = document.createElement("tr");
//   Object.values(user).forEach(value => {
//     const td = document.createElement("td");
//     td.textContent = value;
//     row.appendChild(td);
//   });
//   tbody.appendChild(row);
// });
// table.appendChild(tbody);

// container.appendChild(table);
// </script>
// ```

// ---

// ## **Exercício 2 – Adicionando classe e estilo com classList**

// **Objetivo:** Criar uma tabela e adicionar uma classe diferente para cada linha (ex.: alternando cores).

// ```html
// <div id="tabela-estilizada"></div>

// <script>
// const usuarios = [
//   { Nome: "João", Email: "joao@email.com", Idade: 22 },
//   { Nome: "Lucia", Email: "lucia@email.com", Idade: 26 },
//   { Nome: "Pedro", Email: "pedro@email.com", Idade: 29 },
// ];

// const container = document.getElementById("tabela-estilizada");

// const table = document.createElement("table");
// table.classList.add("tabela");
// table.border = "1";

// // Cabeçalho
// const thead = document.createElement("thead");
// const headerRow = document.createElement("tr");
// Object.keys(usuarios[0]).forEach(col => {
//   const th = document.createElement("th");
//   th.textContent = col;
//   headerRow.appendChild(th);
// });
// thead.appendChild(headerRow);
// table.appendChild(thead);

// // Corpo com cores alternadas
// const tbody = document.createElement("tbody");
// usuarios.forEach((user, index) => {
//   const row = document.createElement("tr");
//   row.classList.add(index % 2 === 0 ? "linha-par" : "linha-impar"); // alterna classes
//   Object.values(user).forEach(value => {
//     const td = document.createElement("td");
//     td.textContent = value;
//     row.appendChild(td);
//   });
//   tbody.appendChild(row);
// });
// table.appendChild(tbody);

// container.appendChild(table);
// </script>

// <style>
// .linha-par { background-color: #f0f0f0; }
// .linha-impar { background-color: #ffffff; }
// </style>
// ```

// ---

// ## **Exercício 3 – Atualizando tabela dinamicamente com innerHTML**

// **Objetivo:** Criar tabela e atualizar os dados usando `innerHTML` para popular as linhas.

// ```html
// <div id="tabela-dinamica"></div>

// <script>
// const usuarios = [
//   { Nome: "Marcos", Email: "marcos@email.com", Idade: 31 },
//   { Nome: "Patricia", Email: "patricia@email.com", Idade: 27 },
//   { Nome: "Felipe", Email: "felipe@email.com", Idade: 24 },
// ];

// const container = document.getElementById("tabela-dinamica");

// const table = document.createElement("table");
// table.border = "1";

// // Cabeçalho
// const header = `<tr>${Object.keys(usuarios[0]).map(col => `<th>${col}</th>`).join("")}</tr>`;
// table.innerHTML = `<thead>${header}</thead><tbody></tbody>`;

// // Popula corpo da tabela
// const tbody = table.querySelector("tbody");
// usuarios.forEach(user => {
//   const rowHTML = `<tr>${Object.values(user).map(val => `<td>${val}</td>`).join("")}</tr>`;
//   tbody.innerHTML += rowHTML;
// });

// container.appendChild(table);
// </script>
// ```

// ---

// ✅ **Resumo das técnicas usadas nos exercícios:**

// * `createElement` → criar `<table>`, `<tr>`, `<th>`, `<td>`.
// * `getElementById` → selecionar o container.
// * `classList.add` → adicionar estilos dinamicamente.
// * `appendChild` → inserir elementos no DOM.
// * `innerHTML` → popular linhas rapidamente.
// * `forEach`, `Object.keys`, `Object.values` → iterar dados de objetos.
