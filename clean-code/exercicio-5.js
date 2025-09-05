// ### **Exercício 1 – Tipos diferentes de retorno**

// ❌ Código inicial:

// ```js
// function findUser(id) {
//   if (!id) return null;
//   if (id === 1) return { id: 1, name: "Paula" };
//   return "User not found";
// }
// ```

// ✅ Corrigido (sempre retorna objeto):

// ```js
// function findUser(id) {
//   if (!id) return { error: "Invalid ID" };
//   if (id === 1) return { id: 1, name: "Paula" };
//   return { error: "User not found" };
// }
// ```

// ---

// ### **Exercício 2 – Array ou valor único**

// ❌ Código inicial:

// ```js
// function getProducts(category) {
//   if (!category) return [];
//   if (category === "books") return "Book 1";
//   return ["Other product"];
// }
// ```

// ✅ Corrigido (sempre array):

// ```js
// function getProducts(category) {
//   if (!category) return [];
//   if (category === "books") return ["Book 1"];
//   return ["Other product"];
// }
// ```

// ---

// ### **Exercício 3 – Boolean ou String**

// ❌ Código inicial:

// ```js
// function checkPermission(user) {
//   if (!user) return "No user";
//   return user.isAdmin;
// }
// ```

// ✅ Corrigido (sempre string):

// ```js
// function checkPermission(user) {
//   if (!user) return "no-user";
//   return user.isAdmin ? "admin" : "regular";
// }
// ```

// ---

// ### **Exercício 4 – Number ou null**

// ❌ Código inicial:

// ```js
// function getAge(user) {
//   if (!user) return null;
//   return user.age;
// }
// ```

// ✅ Corrigido (sempre objeto com valor):

// ```js
// function getAge(user) {
//   if (!user) return { age: null };
//   return { age: user.age ?? null };
// }
// ```

// ---

// ### **Exercício 5 – Função com múltiplos tipos**

// ❌ Código inicial:

// ```js
// function parseData(data) {
//   if (!data) return false;
//   if (typeof data === "string") return data.toUpperCase();
//   return { value: data };
// }
// ```

// ✅ Corrigido (sempre objeto):

// ```js
// function parseData(data) {
//   if (!data) return { success: false, value: null };
//   if (typeof data === "string") return { success: true, value: data.toUpperCase() };
//   return { success: true, value: data };
// }
// ```

// ---

// 👉 Perceba que a **regra de ouro** é:

// * Escolher **um formato fixo de retorno** (string, objeto, array, boolean etc).
// * Mesmo nos erros, manter esse formato.
