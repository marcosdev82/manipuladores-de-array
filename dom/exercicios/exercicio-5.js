// ## **Exercício 1 – Criar um `<select>` e popular com um objeto**

// **Objetivo:** Criar um select com opções baseadas em um objeto de dados.

// ```html
// <div id="select-container"></div>

// <script>
// const opcoes = {
//   1: "Maçã",
//   2: "Banana",
//   3: "Laranja",
//   4: "Uva"
// };

// const container = document.getElementById("select-container");
// const select = document.createElement("select");
// select.setAttribute("id", "frutas");
// select.classList.add("form-select");

// // Popular o select com opções do objeto
// Object.entries(opcoes).forEach(([value, text]) => {
//   const option = document.createElement("option");
//   option.value = value;
//   option.textContent = text;
//   select.appendChild(option);
// });

// container.appendChild(select);
// </script>
// ```

// ---

// ## **Exercício 2 – Criar um modal com evento**

// **Objetivo:** Mostrar e esconder um modal usando botão e eventos.

// ```html
// <button id="abrirModal">Abrir Modal</button>

// <div id="modal" class="modal">
//   <div class="modal-content">
//     <span id="fecharModal" class="fechar">&times;</span>
//     <p>Este é um modal usando JavaScript!</p>
//   </div>
// </div>

// <style>
// .modal { display: none; position: fixed; top: 0; left: 0; 
//          width: 100%; height: 100%; background: rgba(0,0,0,0.5);
//          justify-content: center; align-items: center; }
// .modal-content { background: white; padding: 20px; border-radius: 8px; }
// .fechar { cursor: pointer; float: right; font-weight: bold; }
// </style>

// <script>
// const modal = document.getElementById("modal");
// const btn = document.getElementById("abrirModal");
// const span = document.getElementById("fecharModal");

// // Abrir modal
// btn.addEventListener("click", () => modal.classList.add("show"));
// span.addEventListener("click", () => modal.classList.remove("show"));

// // Fechar clicando fora do conteúdo
// window.addEventListener("click", e => {
//   if (e.target === modal) modal.classList.remove("show");
// });

// // Classe para exibir o modal
// const style = document.createElement("style");
// style.textContent = `.show { display: flex !important; }`;
// document.head.appendChild(style);
// </script>
// ```

// ---

// ## **Exercício 3 – Pesquisa filtrando elementos com `toLowerCase()`**

// **Objetivo:** Filtrar uma lista de itens digitando em um input.

// ```html
// <input type="text" id="pesquisa" placeholder="Pesquisar...">
// <ul id="lista">
//   <li>Maçã</li>
//   <li>Banana</li>
//   <li>Laranja</li>
//   <li>Uva</li>
//   <li>Melancia</li>
// </ul>

// <script>
// const input = document.getElementById("pesquisa");
// const itens = document.querySelectorAll("#lista li");

// input.addEventListener("input", () => {
//   const valor = input.value.toLowerCase();
//   itens.forEach(li => {
//     li.style.display = li.textContent.toLowerCase().includes(valor) ? "" : "none";
//   });
// });
// </script>
// ```

// ---

// ✅ **Resumo das técnicas usadas:**

// * `createElement` → criar `select`, `option`, `style`
// * `getElementById` → selecionar containers, botões e input
// * `querySelectorAll` → selecionar todos os itens da lista
// * `classList.add` → adicionar classe para exibir o modal
// * `setAttribute` → definir `id` e `value` das opções
// * `appendChild` → inserir elementos na árvore do DOM

// ---

// Se você quiser, posso criar **uma versão unificada** com os 3 exercícios rodando em uma única página, para testar de uma vez.

// Quer que eu faça isso?
