// # 📘 Exercícios de Generics em TypeScript

// ---

// ### 🔹 Exercício 1 – Função `first`

// Crie uma função genérica que retorne o **primeiro elemento de um array**.

// ```ts
// function first<T>(arr: T[]): T | undefined {
//   // implemente aqui
// }

// // Testes
// console.log(first([10, 20, 30]))     
// console.log(first(["JS", "TS", "Node"]))
// ```

// **Saída esperada:**

// ```
// 10
// JS
// ```

// ---

// ### 🔹 Exercício 2 – Repositório genérico

// Implemente uma classe `Repository<T>` que armazene itens e permita recuperar todos.

// ```ts
// class Repository<T> {
//   // implemente aqui
// }

// type User = { id: number; name: string }
// type Product = { id: number; price: number }

// const userRepo = new Repository<User>()
// userRepo.add({ id: 1, name: "Marcos" })
// userRepo.add({ id: 2, name: "Ana" })

// const productRepo = new Repository<Product>()
// productRepo.add({ id: 1, price: 50 })

// console.log(userRepo.getAll())
// console.log(productRepo.getAll())
// ```

// **Saída esperada:**

// ```
// [ { id: 1, name: 'Marcos' }, { id: 2, name: 'Ana' } ]
// [ { id: 1, price: 50 } ]
// ```

// ---

// ### 🔹 Exercício 3 – Função `fetchData`

// Crie uma função genérica que busque dados de uma API e tipa o retorno.

// ```ts
// async function fetchData<T>(url: string): Promise<T> {
//   // implemente aqui
// }

// type Post = { id: number; title: string }

// async function main() {
//   const posts = await fetchData<Post[]>("https://jsonplaceholder.typicode.com/posts")
//   console.log(posts[0].id)
//   console.log(posts[0].title)
// }
// main()
// ```

// **Saída esperada (aprox):**

// ```
// 1
// sunt aut facere repellat provident occaecati excepturi optio reprehenderit
// ```

// ---

// ### 🔹 Exercício 4 – Generic no React (useState)

// Use o generic do `useState` para tipar corretamente os estados.

// ```tsx
// import React, { useState } from "react"

// type User = { id: number; name: string }

// export default function App() {
//   const [count, setCount] = useState<number>(0)
//   const [user, setUser] = useState<User | null>(null)

//   return (
//     <div>
//       <p>Contador: {count}</p>
//       <p>Usuário: {user ? user.name : "Nenhum usuário"}</p>
//     </div>
//   )
// }
// ```

// **Saída esperada ao renderizar no navegador:**

// ```
// Contador: 0
// Usuário: Nenhum usuário
// ```

// ---

// ### 🔹 Exercício 5 – Utility Types com Generics

// Use os utilitários `Partial` e `Pick` para manipular tipos.

// ```ts
// type User = { id: number; name: string; age: number }

// // Torne todas as propriedades opcionais
// type UserPartial = Partial<User>

// // Pegue apenas "id" e "name"
// type UserBasic = Pick<User, "id" | "name">

// const u1: UserPartial = { name: "Carlos" }
// const u2: UserBasic = { id: 2, name: "Ana" }

// console.log(u1)
// console.log(u2)
// ```

// **Saída esperada:**

// ```
// { name: 'Carlos' }
// { id: 2, name: 'Ana' }
// ```

// ---

// 👉 Esses exercícios cobrem:

// * Funções genéricas (`first`)
// * Classes genéricas (`Repository`)
// * APIs (`fetchData`)
// * React com `useState`
// * Utility Types (`Partial`, `Pick`)

// ---
