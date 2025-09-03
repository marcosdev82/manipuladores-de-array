

// ## 1. Padronizando resposta de API

// **Enunciado:**
// Crie um `type ApiResponse<T>` que represente a resposta padrão de uma API, contendo `data`, `status` e `message`.

// **Saída**

// {
//   data: [ { nome: 'marcos tavares', email: 'marcos@teste.com.br' } ],
//   status: 200,
//   message: 'atualizado com sucesso'
// }

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
// type UserId = number
// type ProductId = number

// type User = {
//     id: UserId;
//     nome: string
// }

// type Product = {
//     id: ProductId;
//     nome: string;
// }

// const user: User = { id: 31323, nome: "Alice" };
// const product: Product = { id: 98798798, nome: "Notebook" };
// ```

// ---

// ## 3. União de estados de requisição 

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

// ## 5. Tipagem para configurações opcionais 

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

//---------------------------------------------------

// **Enunciado:**
// Crie um `type ApiResponse<T>` que represente a resposta padrão de uma API, 
// contendo `data`, `status` e `message`.

// 

type ApiResponse<T> = {
    data: object;
    status: number;
    message: string;
}

type UserInfo = {
    nome: string;
    email: string;
}

const response: ApiResponse<UserInfo[]> = {
    data: [{nome: "marcos tavares", email: "marcos@teste.com.br"}],
    status: 200,
    message: 'atualizado com sucesso'
}
console.log(response)

// ## 2. Tipando IDs de forma semântica

// **Enunciado:**
// Defina `type UserId`, `type ProductId` e use-os em objetos para evitar confusão entre 
// diferentes tipos de ID.

type UserId = number
type ProductId = number

type User = {
    id: UserId;
    nome: string
}

type Product = {
    id: ProductId;
    nome: string;
}

const user: User = { id: 31323, nome: "Alice" };
const product: Product = { id: 98798798, nome: "Notebook" };

// ## 3. União de estados de requisição 

// **Enunciado:**
// Crie um `type RequestState` que pode ser `"idle" | "loading" | "success" | "error"`. Use-o em um objeto que represente o estado de um fetch.

type RequestState = "idle" | "loading" | "success" | "error"

interface FetchStatus {
    status: RequestState;
    error?: string;
}

const FetchStatus: FetchStatus = { 
    status: "success",
    error: "Seu cadastro foi realizado"
}

console.log(FetchStatus)

// ## 4. Mapear rotas de um app web

// **Enunciado:**
// Defina um `type Route` que só pode ser uma das rotas válidas (`"/" | "/login" | "/dashboard"`). Depois crie uma função que receba apenas essas rotas.

type Route =  "/" | "/login" | "/dashboard"

function rota(rota: Route): string {
    return `http://meusite.com.br${rota}`;
}

console.log(rota("/dashboard"))

// ## 5. Tipagem para configurações opcionais 

// **Enunciado:**
// Crie um `type Config` com propriedades opcionais (`theme`, `language`, `debug`) e use-o em uma função `setupApp`.

// **Exemplo de uso:**

type Config = {
    theme?: string;
    language?: string;
    debug?: boolean;
}

function setupApp(config: Config): string {
    return JSON.stringify(config);
} 

console.log(setupApp({debug: true}))
