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


// 4. Object.keys` – Validar preenchimento de formulário** - Dado um objeto `formulario`, verifique se 
// **todos os campos foram preenchidos** (ou seja, não estão vazios). Use `Object.keys()` para iterar dinamicamente.

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

const identificador = "USR-2025-0712-NM12345"
const ano = identificador.substring(4, 8)
const data = identificador.substring(9, 13)
const cod = identificador.substring(15, 21)

console.log(`
    Ano: ${ano},
    Data: ${data},
    Código: ${cod}
`)

// 2. `flatMap` – Normalizar lista de pedidos com produtos**

// Você tem uma lista de pedidos, e cada pedido tem múltiplos produtos. 
// Crie um único array com todos os produtos de todos os pedidos, contendo também o ID do pedido.
const pedidos = [
    { id: 1, produtos: ["Mouse", "Teclado"] },
    { id: 2, produtos: ["Monitor"] },
    { id: 3, produtos: ["HD", "SSD"] }
];

const produtos = pedidos.flatMap((pedido)=> {
    return pedido.produtos.map((produto) => ({
        'pedido': pedido.id,
        produto
    }))
})
console.log(produtos)

// 3. Dado o objeto `usuario`, gere uma tabela HTML com as chaves como rótulos e os valores como células. Use `Object.entries()`.

const usuario = {
    nome: "João",
    email: "joao@email.com",
    idade: 30
};

let htmlTable = `<table>`;
    for(let key in usuario) {
        htmlTable += `
            <tr>
                <td>${key}</td>
                <td>${usuario[key]}</td>
            </tr>
        `
    }
htmlTable += `</table>`;
console.log(htmlTable)
