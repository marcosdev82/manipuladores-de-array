// ### ✅ **Exercício 1: Interface `Usuario` e função de boas-vindas**

// ```ts
// interface Usuario {
//     nome: string;
//     email: string;
//     idade: number;
// }

// function boasVindas(usuario: Usuario): string {
//     return `Bem-vindo(a), ${usuario.nome}! Seu email é ${usuario.email} e você tem ${usuario.idade} anos.`;
// }

// // Exemplo:
// const user: Usuario = {
//     nome: "Carlos",
//     email: "carlos@email.com",
//     idade: 25
// };

// console.log(boasVindas(user));
// ```

// ---

// ### ✅ **Exercício 2: Interface `Produto` e carrinho de compras**

// ```ts
// interface Produto {
//     nome: string;
//     preco: number;
// }

// function calcularTotal(produtos: Produto[]): number {
//     return produtos.reduce((total, prod) => total + prod.preco, 0);
// }

// // Exemplo:
// const carrinho: Produto[] = [
//     { nome: "Camisa", preco: 50 },
//     { nome: "Tênis", preco: 200 },
//     { nome: "Boné", preco: 30 },
// ];

// console.log("Total da compra: R$", calcularTotal(carrinho));
// ```

// ---

// ### ✅ **Exercício 3: Interface `Animal` com diferentes tipos**

// ```ts
// interface Animal {
//     nome: string;
//     tipo: "mamífero" | "ave" | "réptil";
//     emitirSom(): void;
// }

// // Exemplo:
// const cachorro: Animal = {
//     nome: "Rex",
//     tipo: "mamífero",
//     emitirSom() {
//         console.log("Au au!");
//     }
// };

// const papagaio: Animal = {
//     nome: "Louro",
//     tipo: "ave",
//     emitirSom() {
//         console.log("Currrupaco!");
//     }
// };

// cachorro.emitirSom();
// papagaio.emitirSom();
// ```

// ---

// ### ✅ **Exercício 4: Interface com herança (`Funcionario` estende `Pessoa`)**

// ```ts
// interface Pessoa {
//     nome: string;
//     idade: number;
// }

// interface Funcionario extends Pessoa {
//     cargo: string;
//     salario: number;
// }

// // Exemplo:
// const funcionario: Funcionario = {
//     nome: "Marina",
//     idade: 29,
//     cargo: "Gerente",
//     salario: 8000
// };

// console.log(`${funcionario.nome}, ${funcionario.cargo}, R$${funcionario.salario}`);
// ```

// ---

// ### ✅ **Exercício 5: Interface `Form` com validação**

// ```ts
// interface Form {
//     nome: string;
//     email: string;
//     senha: string;
// }

// function validarForm(form: Form): boolean {
//     return form.nome.length > 0 && form.email.includes('@') && form.senha.length >= 6;
// }

// // Exemplo:
// const formValido: Form = {
//     nome: "Lucas",
//     email: "lucas@email.com",
//     senha: "123456"
// };

// console.log("Formulário válido?", validarForm(formValido));
// ```

// ----------------------------------------------------------------------