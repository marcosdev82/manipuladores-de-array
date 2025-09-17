
// # 📝 10 Exercícios de Manipulação do DOM (com exemplos)

const { useState } = require("react");

// - createElement (criar nós)

// - querySelectorAll (selecionar vários elementos)

// - getElementById (selecionar único elemento)

// - classList.add (equivalente ao seu addClass)

// - setAttribute (equivalente ao seu addAttr)

// - appendChild (inserir elementos na árvore do DOM)

// ---

// ### **1. Criar um elemento div html com um id e adicionar um parágrafo com javascript**

// ```html
// <div id="container"></div>

// <script>
//   const p = document.createElement("p");
//   p.textContent = "Olá, mundo!";
//   document.getElementById("container").appendChild(p);
// </script>
// ```

// ---

// ### **2. Alterar o texto de todos os elementos por Item atualizado**

// ```html
// <ul>
//   <li>Item antigo 1</li>
//   <li>Item antigo 2</li>
//   <li>Item antigo 3</li>
// </ul>

// <script>
//   const itens = document.querySelectorAll("li");
//   itens.forEach(li => li.textContent = "Item atualizado");
// </script>
// ```

// ---

// ### **3. Selecionar e estilizar o texto**

// ```html
// <h1 id="titulo">Título original</h1>

// <script>
//   const titulo = document.getElementById("titulo");
//   titulo.classList.add("destaque");
// </script>

// <style>
//   .destaque {
//     color: blue;
//     font-weight: bold;
//   }
// </style>
// ```

// ---

// ### **4. Criar botão com atributo type submit**

// ```html
// <script>
//   const btn = document.createElement("button");
//   btn.textContent = "Clique aqui";
//   btn.setAttribute("type", "button");
//   document.body.appendChild(btn);
// </script>
// ```

// ---

// ### **5. Criar lista dinamicamente com nome item e o numro da key**

// ```html
// <div id="lista"></div>

// <script>
//   const ul = document.createElement("ul");

//   for (let i = 1; i <= 5; i++) {
//     const li = document.createElement("li");
//     li.textContent = `Item ${i}`;
//     ul.appendChild(li);
//   }

//   document.getElementById("lista").appendChild(ul);
// </script>
// ```

// ---

// ### **6. Adicionar classe em vários elementos**

// ```html
// <p>Primeiro parágrafo</p>
// <p>Segundo parágrafo</p>
// <p>Terceiro parágrafo</p>

// <script>
//   const paragrafos = document.querySelectorAll("p");
//   paragrafos.forEach(p => p.classList.add("paragrafo-estilo"));
// </script>

// <style>
//   .paragrafo-estilo {
//     background-color: yellow;
//     padding: 5px;
//   }
// </style>
// ```

// ---

// ### **7. Criar imagem dinamicamente dentro de um tag figure**

// ```html
// <script>
//   const img = document.createElement("img");
//   img.setAttribute("src", "https://via.placeholder.com/150");
//   img.setAttribute("alt", "Imagem gerada dinamicamente");
//   document.body.appendChild(img);
// </script>
// ```

// ---

// ### **8. Criar link externo**

// ```html
// <div id="links"></div>

// <script>
//   const a = document.createElement("a");
//   a.setAttribute("href", "https://google.com");
//   a.setAttribute("target", "_blank");
//   a.textContent = "Ir para o Google";
//   document.getElementById("links").appendChild(a);
// </script>
// ```

// ---

// ### **9. Criar card com título e descrição**

// ```html
// <script>
//   const card = document.createElement("div");
//   card.classList.add("card");

//   const titulo = document.createElement("h2");
//   titulo.textContent = "Meu Card";

//   const descricao = document.createElement("p");
//   descricao.textContent = "Este é um exemplo de card criado com JavaScript.";

//   card.appendChild(titulo);
//   card.appendChild(descricao);

//   document.body.appendChild(card);
// </script>

// <style>
//   .card {
//     border: 1px solid #ccc;
//     padding: 15px;
//     border-radius: 8px;
//     width: 250px;
//     margin-top: 10px;
//     background: #f9f9f9;
//   }
// </style>
// ```

// ---

// ### **10. Criar tabela simples**

// ```html
// <div id="tabela"></div>

// <script>
//   const table = document.createElement("table");
//   table.setAttribute("border", "1");

//   const tr1 = document.createElement("tr");
//   const th1 = document.createElement("td");
//   th1.textContent = "Nome";
//   const th2 = document.createElement("td");
//   th2.textContent = "Idade";
//   tr1.appendChild(th1);
//   tr1.appendChild(th2);

//   const tr2 = document.createElement("tr");
//   const td1 = document.createElement("td");
//   td1.textContent = "Maria";
//   const td2 = document.createElement("td");
//   td2.textContent = "25";
//   tr2.appendChild(td1);
//   tr2.appendChild(td2);

//   table.appendChild(tr1);
//   table.appendChild(tr2);

//   document.getElementById("tabela").appendChild(table);
// </script>
// ```

