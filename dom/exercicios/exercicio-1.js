// Boa! 🚀 Esse assunto que você trouxe é sobre a **diferença entre coleções *live* e *static* no DOM**.

// * **Coleção live** (ex: `getElementById`, `getElementsByTagName`, `getElementsByClassName`): a lista se atualiza automaticamente quando o DOM muda.
// * **Coleção static** (ex: `querySelectorAll`): a lista não muda, mesmo que você adicione/remova elementos depois.

// Aqui estão **5 exercícios práticos** para fixar:

// ---

// ## 🔹 Exercício 1 – Comparando Live x Static

// Crie um `<ul>` com três `<li>` dentro.

// * Use `getElementsByTagName("li")` (live) e `querySelectorAll("li")` (static).
// * Adicione um novo `<li>` e verifique a diferença no `.length`.

// ---

// ## 🔹 Exercício 2 – Contagem automática

// Crie uma `<div id="container">` com dois `<p>`.

// * Capture os filhos com `container.childNodes` (live).
// * Use um botão que adiciona `<p>` novos.
// * Mostre na tela como o `length` muda automaticamente.

// ---

// ## 🔹 Exercício 3 – Atualizando manualmente

// Ainda no mesmo `<div id="container">`:

// * Capture os filhos com `querySelectorAll("p")` (static).
// * Adicione novos `<p>`.
// * Mostre que o `.length` não muda **até que você chame `querySelectorAll` novamente**.

// ---

// ## 🔹 Exercício 4 – Removendo elementos

// Crie uma lista `<ul>` com quatro `<li>`.

// * Pegue os `<li>` com `getElementsByTagName("li")` (live).
// * Remova dois `<li>`.
// * Verifique como o `.length` do live se atualiza sozinho.

// ---

// ## 🔹 Exercício 5 – Jogo de contagem

// Monte um contador:

// * Tenha um botão **“Adicionar div”** que cria um novo `<div>` dentro de `#parent`.
// * Capture com `childNodes` (live).
// * Mostre em tempo real no HTML:

//   * `childNodes.length` (live)
//   * `querySelectorAll("div").length` (static)
// * Veja a diferença na contagem conforme adiciona novos elementos.

