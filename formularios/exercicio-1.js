// ### **Exercício 1 – Campo obrigatório**

// ```ts
// function validateRequired(fieldValue: string | null | undefined): boolean {
//   return !!fieldValue && fieldValue.trim().length > 0;
// }

// // Exemplos de uso
// console.log(validateRequired("Olá")); // true
// console.log(validateRequired(""));    // false
// console.log(validateRequired(null));  // false
// console.log(validateRequired(undefined)); // false
// ```

// ---

// ### **Exercício 2 – Validação de email**

// ```ts
// function validateEmail(email: string): boolean {
//   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return regex.test(email);
// }

// // Exemplos de uso
// console.log(validateEmail("teste@email.com")); // true
// console.log(validateEmail("testeemail.com"));  // false
// console.log(validateEmail("teste@.com"));      // false
// ```

// ---

// ### **Exercício 3 – Validação de senha**

// ```ts
// function validatePassword(password: string): boolean {
//   const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
//   return regex.test(password);
// }

// // Exemplos de uso
// console.log(validatePassword("Senha123")); // true
// console.log(validatePassword("senha123")); // false (não tem maiúscula)
// console.log(validatePassword("Senha"));    // false (não tem número)
// console.log(validatePassword("12345678")); // false (não tem letra maiúscula)
// ```

// ---

// ### **Exercício 4 – Validação de número**

// ```ts
// function validateNumber(input: any): boolean {
//   return typeof input === "number" && !isNaN(input) && input > 0;
// }

// // Exemplos de uso
// console.log(validateNumber(10));    // true
// console.log(validateNumber(0));     // false
// console.log(validateNumber(-5));    // false
// console.log(validateNumber("10"));  // false
// ```

// ---

// ### **Exercício 5 – Validação de formulário completo**

// ```ts
// interface FormData {
//   name: string;
//   email: string;
//   age: number;
// }

// function validateForm(form: FormData) {
//   const errors = {
//     name: null as string | null,
//     email: null as string | null,
//     age: null as string | null
//   };

//   if (!validateRequired(form.name)) {
//     errors.name = "Campo obrigatório";
//   }

//   if (!validateEmail(form.email)) {
//     errors.email = "Email inválido";
//   }

//   if (!validateNumber(form.age) || form.age < 18) {
//     errors.age = "Idade deve ser maior ou igual a 18";
//   }

//   return errors;
// }

// // Exemplo de uso
// const form1: FormData = { name: "", email: "teste@", age: 16 };
// console.log(validateForm(form1));
// // Saída:
// // { name: 'Campo obrigatório', email: 'Email inválido', age: 'Idade deve ser maior ou igual a 18' }

// const form2: FormData = { name: "Alice", email: "alice@email.com", age: 25 };
// console.log(validateForm(form2));
// // Saída: { name: null, email: null, age: null }
// ```

// ---

// Se você quiser, posso criar **uma versão ainda mais completa**, combinando **todos esses validadores em um formulário real com HTML + TypeScript**, simulando validação de inputs em tempo real.

// Quer que eu faça isso?
