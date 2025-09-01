
// ### **1. Função de Identidade Genérica**

// Crie uma função genérica `identity` que receba um valor de qualquer tipo e retorne esse mesmo valor.

// ```ts
// // Exercício 1
// function identity<T>(value: T): T {
//   // implemente aqui
// }

// console.log(identity<string>("Hello"));
// console.log(identity<number>(123));
// ```

// ---

// ### **2. Array Genérico**

// Crie uma função `mergeArrays` que receba dois arrays de qualquer tipo e retorne um único array contendo os elementos de ambos.

// ```ts
// // Exercício 2
// function mergeArrays<T>(arr1: T[], arr2: T[]): T[] {
//   // implemente aqui
// }

// console.log(mergeArrays<number>([1, 2], [3, 4]));
// console.log(mergeArrays<string>(["a", "b"], ["c", "d"]));
// ```

// ---

// ### **3. Interface Genérica**

// Crie uma interface `ResponseData<T>` que represente a resposta de uma API, contendo `data` (genérico) e `status` (número).
// Implemente uma função que crie esse objeto.

// ```ts
// // Exercício 3
// interface ResponseData<T> {
//   data: T;
//   status: number;
// }

// function createResponse<T>(data: T, status: number): ResponseData<T> {
//   // implemente aqui
// }

// console.log(createResponse<string>("Sucesso", 200));
// console.log(createResponse<number[]>([1, 2, 3], 200));
// ```

// ---

// ### **4. Restrição com `extends`**

// Crie uma função `getProperty` que receba um objeto e o nome de uma de suas propriedades e retorne o valor dessa propriedade.
// Use `extends keyof T` para restringir a chave.

// ```ts
// // Exercício 4
// function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
//   // implemente aqui
// }

// const user = { id: 1, name: "Maria", active: true };
// console.log(getProperty(user, "name"));
// console.log(getProperty(user, "active"));
// ```

// ---

// ### **5. Classe Genérica**

// Crie uma classe `Storage<T>` que armazene itens de um tipo genérico. Ela deve ter métodos para `addItem`, `getItems` e `removeItem`.

// ```ts
// // Exercício 5
// class Storage<T> {
//   private items: T[] = [];

//   addItem(item: T): void {
//     // implemente aqui
//   }

//   getItems(): T[] {
//     // implemente aqui
//   }

//   removeItem(item: T): void {
//     // implemente aqui
//   }
// }

// const stringStorage = new Storage<string>();
// stringStorage.addItem("A");
// stringStorage.addItem("B");
// stringStorage.removeItem("A");
// console.log(stringStorage.getItems());

// const numberStorage = new Storage<number>();
// numberStorage.addItem(10);
// numberStorage.addItem(20);
// console.log(numberStorage.getItems());
// ```
