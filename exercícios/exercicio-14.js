// 1. Você recebeu um identificador de usuário no formato `"USR-2025-0712-NM12345"`, onde:

// * `2025` é o ano de registro,
// * `0712` é a data (mês + dia),
// * `NM12345` é o código do usuário.

// Extraia essas informações usando `substr()`. 

// 2. `flatMap` – Normalizar lista de pedidos com produtos**

// Você tem uma lista de pedidos, e cada pedido tem múltiplos produtos. Crie um único array com todos os produtos de todos os pedidos, contendo também o ID do pedido.

// const pedidos = [
//   { id: 1, produtos: ["Mouse", "Teclado"] },
//   { id: 2, produtos: ["Monitor"] },
//   { id: 3, produtos: ["HD", "SSD"] }
// ];

// // Use flatMap para gerar:
// // [
// //   { pedidoId: 1, produto: "Mouse" },
// //   { pedidoId: 1, produto: "Teclado" },
// //   ...
// // ]
// ```


// 3. Dado o objeto `usuario`, gere uma tabela HTML com as chaves como rótulos e os valores como células. Use `Object.entries()`.

// const usuario = {
//   nome: "João",
//   email: "joao@email.com",
//   idade: 30
// };

// // Resultado esperado:
// // <table>
// //   <tr><td>nome</td><td>João</td></tr>
// //   <tr><td>email</td><td>joao@email.com</td></tr>
// //   <tr><td>idade</td><td>30</td></tr>
// // </table>


// ### ✅ **4. `Object.keys` – Validar preenchimento de formulário**

// **Enunciado:**
// Dado um objeto `formulario`, verifique se **todos os campos foram preenchidos** (ou seja, não estão vazios). Use `Object.keys()` para iterar dinamicamente.

// ```javascript
// const formulario = {
//   nome: "Maria",
//   email: "",
//   telefone: "85999999999"
// };

// Escreva uma função que retorna:
// - true se todos os campos forem preenchidos
// - false se algum campo estiver vazio
// ```

// -----------------------------------------


// 1. Você recebeu um identificador de usuário no formato `"USR-2025-0712-NM12345"`, onde:

// * `2025` é o ano de registro,
// * `0712` é a data (mês + dia),
// * `NM12345` é o código do usuário.

// Extraia essas informações usando `substr()`. 

const id = "USR-2025-0712-NM12345";

const ano = id.substr(4,4)
console.log(`Ano: ${ano}`)

const data = id.substr(9,4)
console.log(`Data: ${data}`)

const codigo = id.substr(14,7)
console.log(`Codigo: ${codigo}`)


// 2. `flatMap` – Normalizar lista de pedidos com produtos**
// Você tem uma lista de pedidos, e cada pedido tem múltiplos produtos. Crie um único array com todos os produtos de todos os pedidos, contendo também o ID do pedido.

const pedidos = [
    { id: 1, produtos: ["Mouse", "Teclado"] },
    { id: 2, produtos: ["Monitor"] },
    { id: 3, produtos: ["HD", "SSD"] }
];

const allProducts = pedidos.flatMap(pedido => // { id: 1, produtos: ["Mouse", "Teclado"] },  { id: 2, produtos: ["Monitor"] },{ id: 3, produtos: ["HD", "SSD"] }
    pedido.produtos.map(produto => ({ // ["Mouse", "Teclado"] //  ["Monitor"] // ["HD", "SSD"]
        pedidoId: pedido.id,
        produto
    })) // {pedidoId: 1, produto: Mouse }, {pedidoId: 1, produto: 'teclado'}, {pedidoId: 2, produto: 'Monitor'}, {pedidoId: 3, produto: 'HD'}, {pedidoId: 3, produto: 'SSD'}
);
console.log(allProducts)

// 3. Dado o objeto `usuario`, gere uma tabela HTML com as chaves como rótulos e os valores como células. Use `Object.entries()`.
const usuario = {
    nome: "João",
    email: "joao@email.com",
    idade: 30
};

const tabela = Object.entries(usuario)
console.log(typeof tabela)
let html = '<table>';
tabela.forEach(([key, value]) => {
    html += `<tr><td>${key}</td><td></td>${value}</td>/tr>`;
});
html += '</table>';
console.log(html)
