// ### ✅ **Exercício 1: Interface `Usuario` e função de boas-vindas**

// saida `Bem-vindo(a), ${usuario.nome}! Seu email é ${usuario.email} e você tem ${usuario.idade} anos.`;

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


// { nome: "Camisa", preco: 50 },
// { nome: "Tênis", preco: 200 },
// { nome: "Boné", preco: 30 },

//saída 
// console.log("Total da compra: R$", calcularTotal(carrinho));

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

// ### **Exercício 3: Interface `Animal` com diferentes tipos**

// tipos: mamífero, ave, réptil

// saida:

// cachorro.emitirSom();
// papagaio.emitirSom();

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

// ### **Exercício 4: Interface com herança (`Funcionario` estende `Pessoa`)**

// nome, idade
// saida:  console.log(`${funcionario.nome}, ${funcionario.cargo}, R$${funcionario.salario}`);


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

// nome, email, senha

// saida
// console.log("Formulário válido?", validarForm(formValido));

// ------

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

// ### ✅ **Exercício 1: Interface `Usuario` e função de boas-vindas**

// saida `Bem-vindo(a), ${usuario.nome}! Seu email é ${usuario.email} e você tem ${usuario.idade} anos.`;

interface Usuario {
    nome: string;
    email: string;
    idade: number;
}

function bemVindo(usuario: Usuario): string {
    return `Bem-vindo(a), ${usuario.nome}! Seu email é ${usuario.email} e você tem ${usuario.idade} anos.`;
}

const usuario: Usuario = {
    nome: 'Marcos',
    email: 'marcos@tavares.com',
    idade: 42
}

console.log(bemVindo(usuario))


// ### ✅ **Exercício 2: Interface `Produto` e carrinho de compras**


// { nome: "Camisa", preco: 50 },
// { nome: "Tênis", preco: 200 },
// { nome: "Boné", preco: 30 },

//saída 
// console.log("Total da compra: R$", calcularTotal(carrinho));

interface Produto {
    nome: string;
    preco: number;
}

function calcularTotal(carrinho: Produto[]): number {
    return carrinho.reduce((total, produto) => total + produto.preco, 0 )
}

const carrinho: Produto[] = [
    { nome: "Camisa", preco: 50 },
    { nome: "Tênis", preco: 200 },
    { nome: "Boné", preco: 30 },
]
console.log("Total da compra: R$", calcularTotal(carrinho).toFixed(2));

// ### **Exercício 3: Interface `Animal` com diferentes tipos**

// tipos: mamífero, ave, réptil

// saida:

// cachorro.emitirSom();
// papagaio.emitirSom();

interface Animal {
    nome: string;
    tipo: "mamífero" | "ave" | "réptil"
    emitirSom(): void
}

const gato: Animal = {
    nome: 'Mingal',
    tipo: 'mamífero',
    emitirSom() {
        console.log('miau')
    }
}

console.log(gato.emitirSom())

// ### **Exercício 4: Interface com herança (`Funcionario` estende `Pessoa`)**

// nome, idade
// saida:  console.log(`${funcionario.nome}, ${funcionario.cargo}, R$${funcionario.salario}`);

interface Pessoa {
    nome: string;
    idade: number;
}

interface Funcionario extends Pessoa {
    cargo: string;
    salario: number;
}

const funcionario: Funcionario = {
    nome: 'marcos',
    idade: 42,
    cargo: 'dev',
    salario: 10000
}
console.log(funcionario)

// ### ✅ **Exercício 5: Interface `Form` com validação**

// nome, email, senha

// saida
// console.log("Formulário válido?", validarForm(formValido));

interface Form {
    nome: string;
    email: string;
    senha: string;
}

function validarForm(form: Form): Boolean {
    return form.nome.length > 0 && form.email.includes('@') && form.senha.length >= 6
}

const form: Form = {
    nome: 'marcos',
    email: 'marcos@teste.com',
    senha: '32165497'
}

console.log(`Email válido: ${validarForm(form)}`)