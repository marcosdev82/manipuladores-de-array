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

// ### **Exercício 1: Interface `Usuario` e função de boas-vindas**

// saida `Bem-vindo(a), ${usuario.nome}! Seu email é ${usuario.email} e você tem ${usuario.idade} anos.`;

interface Usuario {
    nome: string;
    email: string;
    idade: number;
}

function boasVindas(usuario: Usuario): string { 
    return `Bem-vindo(a), ${usuario.nome}! Seu email é ${usuario.email} e você tem ${usuario.idade} anos.`;
}

const user: Usuario = {
    nome: 'marcos tavares',
    email: 'marcos@teste.com',
    idade: 42,
}

console.log(boasVindas(user))


// ### **Exercício 2: Interface `Produto` e carrinho de compras**

// { nome: "Camisa", preco: 50 },
// { nome: "Tênis", preco: 200 },
// { nome: "Boné", preco: 30 },

//saída 
// console.log("Total da compra: R$", calcularTotal(carrinho));

interface Produto {
    nome: string;
    preco: number;
}

function calcularTotal(produtos: Produto[]): number {
    return produtos.reduce((total, produto) => total + produto.preco, 0);
}

const produtos: Produto[] = [
    { nome: "Camisa", preco: 50 },
    { nome: "Tênis", preco: 200 },
    { nome: "Boné", preco: 30 },
]

console.log(`Valor total no carrinho: R$ ${calcularTotal(produtos).toFixed(2)}`)

// ### **Exercício 3: Interface `Animal` com diferentes tipos**

// tipos: mamífero, ave, réptil

// saida:

// cachorro.emitirSom();
// papagaio.emitirSom();

interface Animal {
    nome: string;
    tipo: "mamífero" | "ave" | "réptil";
    emitirSom(): void;
}

const cachorro: Animal = {
    nome: "Totó",
    tipo: "mamífero",
    emitirSom(){
        console.log('Latir')
    }
}
console.log(cachorro.emitirSom())
console.log(cachorro)

const gato: Animal = {
    nome: "Mingal",
    tipo: "mamífero",
    emitirSom() {
        console.log('Miau')
    },
}
console.log(gato.emitirSom())
console.log(gato)

const papagaio: Animal = {
    nome: "Loro",
    tipo: "ave",
    emitirSom() {
        console.log('Currupaco')
    },
}
console.log(papagaio.emitirSom())
console.log(papagaio)

// ### **Exercício 4: Interface com herança (`Funcionario` estende `Pessoa`)**

// nome, idade
// saida:  console.log(`${funcionario.nome}, ${funcionario.cargo}, R$ ${funcionario.salario}`);

// interface Pessoa {
//     nome: string;
//     idade: number;
// }

// class Funcionario implements Pessoa {
//     nome: string;
//     idade: number;
//     private salario: number;
//     private cargo: string;

//     constructor(nome: string, idade: number, cargo: string, salario: number) {
//         this.setSalario(salario)
//         this.setNome(nome);
//         this.setCargo(cargo)
//         this.setIdade(idade)
//     }

//     setNome(nome: string): void {
//         if (nome.trim().length < 2) {
//             throw new Error("Nome muito curto");
//         }
//         this.nome = nome;
//     }

//     setIdade(idade: number): void {
//         this.idade = idade
//     }

//     setCargo(cargo: string): void {
//         this.cargo = cargo;
//     }

//     setSalario(valor: number): void {
//         this.salario = valor
//     }

//     getFuncionario(): string {
//         return `${this.nome}, ${this.idade}, ${this.cargo}, Salário R$ ${this.salario}`;
//     }

// }

// console.log(new Funcionario('Marcos', 42, 'Programador', 6000).getFuncionario())

interface Pessoa {
    nome: string;
    idade: number;
}

interface Funcionario extends Pessoa {
    cargo: string;
    salario: number;
}

const funcionario: Funcionario = {
    nome: "Marcos Tavares",
    idade: 42,
    cargo: "Programador",
    salario: 6000
}
console.log(`${funcionario.nome}, ${funcionario.idade}, ${funcionario.cargo}, Salário R$ ${funcionario.salario}`);

// ### **Exercício 5: Interface `Form` com validação**

// nome, email, senha

// saida
// console.log("Formulário válido?", validarForm(formValido));

interface Form {
    nome: string;
    email: string;
    senha: string;
}

function validarForm(form: Form): boolean {
    return form.nome.length > 0 && form.email.includes('@') && form.senha.length >= 6
}

const form: Form = {
    nome: 'Marcos Tavares',
    email: 'marcos@teste.com',
    senha: '123654',
}
console.log(form)

console.log(`Formulário válido?`, validarForm(form))
