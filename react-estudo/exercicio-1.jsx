

// ### **1. Contador Simples**

// Crie um componente `Counter` que mostre um número na tela e tenha dois botões: **Incrementar** e **Decrementar**.

// ```jsx
// // Exercício 1
// import { useState } from "react";

// export default function Counter() {
//   // implemente aqui
//   return (
//     <div>
//       <h2>Contador: {/* valor aqui */}</h2>
//       <button>Incrementar</button>
//       <button>Decrementar</button>
//     </div>
//   );
// }
// ```

// ---

// ### **2. Lista de Tarefas**

// Crie um componente `TodoList` que permita adicionar itens em uma lista e exibi-los na tela.

// ```jsx
// // Exercício 2
// import { useState } from "react";

// export default function TodoList() {
//   // implemente aqui
//   return (
//     <div>
//       <h2>Lista de Tarefas</h2>
//       <input type="text" placeholder="Digite uma tarefa" />
//       <button>Adicionar</button>
//       <ul>
//         {/* renderizar tarefas aqui */}
//       </ul>
//     </div>
//   );
// }
// ```

// ---

// ### **3. Condicional de Login**

// Crie um componente `LoginControl` que mostre:

// * Se o usuário está **logado**, exiba "Bem-vindo!" e um botão "Sair".
// * Se o usuário **não está logado**, exiba um botão "Entrar".

// ```jsx
// // Exercício 3
// import { useState } from "react";

// export default function LoginControl() {
//   // implemente aqui
//   return (
//     <div>
//       {/* exibir mensagem ou botão de acordo com o estado */}
//     </div>
//   );
// }
// ```

// ---

// ### **4. Busca em Lista**

// Crie um componente `FilterList` que mostre uma lista de nomes.
// Adicione um campo de texto para filtrar os nomes conforme o usuário digita.

// ```jsx
// // Exercício 4
// import { useState } from "react";

// export default function FilterList() {
//   const names = ["Maria", "João", "Ana", "Carlos", "Beatriz"];
//   // implemente aqui
//   return (
//     <div>
//       <h2>Filtro de Nomes</h2>
//       <input type="text" placeholder="Digite para filtrar..." />
//       <ul>
//         {/* renderizar lista filtrada */}
//       </ul>
//     </div>
//   );
// }
// ```

// ---

// ### **5. Consumo de API (useEffect)**

// Crie um componente `Users` que faça uma requisição para a API pública `https://jsonplaceholder.typicode.com/users` e exiba os nomes dos usuários em uma lista.

// ```jsx
// // Exercício 5
// import { useState, useEffect } from "react";

// export default function Users() {
//   // implemente aqui
//   return (
//     <div>
//       <h2>Lista de Usuários</h2>
//       <ul>
//         {/* renderizar nomes aqui */}
//       </ul>
//     </div>
//   );
// }
// ```