

// ## 1. Padronizando resposta de API

// **Enunciado:**
// Crie um `type ApiResponse<T>` que represente a resposta padrão de uma API, contendo `data`, `status` e `message`.

// **Exemplo de uso:**

// ```ts
// type ApiResponse<T> = {
//   data: T;
//   status: number;
//   message: string;
// };

// type User = { id: number; name: string };

// const response: ApiResponse<User[]> = {
//   data: [{ id: 1, name: "João" }],
//   status: 200,
//   message: "OK",
// };
// ```

// ---

// ## 2. Tipando IDs de forma semântica

// **Enunciado:**
// Defina `type UserId`, `type ProductId` e use-os em objetos para evitar confusão entre diferentes tipos de ID.

// **Exemplo de uso:**

// ```ts
// type UserId = number;
// type ProductId = number;

// type User = { id: UserId; name: string };
// type Product = { id: ProductId; title: string };
// ```

// ---

// ## 3. União de estados de requisição 🔄

// **Enunciado:**
// Crie um `type RequestState` que pode ser `"idle" | "loading" | "success" | "error"`. Use-o em um objeto que represente o estado de um fetch.

// **Exemplo de uso:**

// ```ts
// type RequestState = "idle" | "loading" | "success" | "error";

// type FetchStatus = {
//   state: RequestState;
//   error?: string;
// };

// const status: FetchStatus = { state: "loading" };
// ```

// ---

// ## 4. Mapear rotas de um app web

// **Enunciado:**
// Defina um `type Route` que só pode ser uma das rotas válidas (`"/" | "/login" | "/dashboard"`). Depois crie uma função que receba apenas essas rotas.

// **Exemplo de uso:**

// ```ts
// type Route = "/" | "/login" | "/dashboard";

// function navigate(route: Route) {
//   console.log(`Indo para ${route}`);
// }

// navigate("/login"); // ok
// // navigate("/admin"); // erro
// ```

// ---

// ## 5. Tipagem para configurações opcionais ⚙️

// **Enunciado:**
// Crie um `type Config` com propriedades opcionais (`theme`, `language`, `debug`) e use-o em uma função `setupApp`.

// **Exemplo de uso:**

// ```ts
// type Config = {
//   theme?: "light" | "dark";
//   language?: "pt" | "en";
//   debug?: boolean;
// };

// function setupApp(config: Config) {
//   console.log("Configuração:", config);
// }

// setupApp({ theme: "dark", debug: true });
// ```

