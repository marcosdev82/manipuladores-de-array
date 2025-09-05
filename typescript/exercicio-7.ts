// ### **Exercício 1 – Função genérica simples**

// Crie uma função genérica `identity` que receba um valor de qualquer tipo e retorne esse mesmo valor.

// ```ts
// function identity<T>(value: T): T {
//   // implemente aqui
// }

// // Teste
// const num = identity(42);      // Tipo inferido: number
// const str = identity("hello"); // Tipo inferido: string
// ```

// ---

// ### **Exercício 2 – Array genérico**

// Crie uma função genérica `firstElement` que receba um array de qualquer tipo e retorne o **primeiro elemento**.

// ```ts
// function firstElement<T>(arr: T[]): T | undefined {
//   // implemente aqui
// }

// // Teste
// const n = firstElement([1, 2, 3]);   // Tipo inferido: number
// const s = firstElement(["a", "b"]);  // Tipo inferido: string
// ```

// ---

// ### **Exercício 3 – Interface genérica**

// Crie uma interface genérica `ApiResponse<T>` que contenha:

// * `data` do tipo `T`
// * `error` como `string | null`

// ```ts
// interface ApiResponse<T> {
//   data: T;
//   error: string | null;
// }

// // Teste
// const response: ApiResponse<number[]> = {
//   data: [1, 2, 3],
//   error: null
// };
// ```

// ---

// ### **Exercício 4 – Type com union e generics**

// Crie um type genérico `Wrapper<T>` que encapsule um valor:

// ```ts
// type Wrapper<T> = {
//   value: T;
// };

// // Teste
// const wrappedString: Wrapper<string> = { value: "hello" };
// const wrappedNumber: Wrapper<number> = { value: 42 };
// ```

// ---

// ### **Exercício 5 – Função genérica com restrição**

// Crie uma função genérica `getProperty` que receba um objeto e uma chave do objeto, e retorne o valor da chave.

// ```ts
// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//   // implemente aqui
// }

// // Teste
// const user = { name: "Alice", age: 30 };
// const name = getProperty(user, "name"); // Tipo: string
// const age = getProperty(user, "age");   // Tipo: number
// ```
