// ### **Exercício 1: Classe `Pessoa` com apresentação**

// ```ts
// class Pessoa {
//     constructor(
//         public nome: string,
//         public idade: number,
//         public profissao: string
//     ) {
//         if (idade < 0) throw new Error('Idade inválida');
//     }

//     apresentar(): string {
//         return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`;
//     }
// }

// // Exemplo de uso:
// const pessoa = new Pessoa("Marcos", 30, "Desenvolvedor");
// console.log(pessoa.apresentar());
// ```

// ---

// ### ✅ **Exercício 2: Conta bancária com encapsulamento**

// ```ts
// class ContaBancaria {
//     private saldo: number = 0;

//     constructor(private numeroConta: string) {}

//     depositar(valor: number): void {
//         if (valor > 0) this.saldo += valor;
//     }

//     sacar(valor: number): void {
//         if (valor > this.saldo) {
//             console.log("Saldo insuficiente");
//         } else {
//             this.saldo -= valor;
//         }
//     }

//     verSaldo(): string {
//         return `Saldo da conta ${this.numeroConta}: R$ ${this.saldo.toFixed(2)}`;
//     }
// }

// // Exemplo de uso:
// const conta = new ContaBancaria("12345-6");
// conta.depositar(500);
// conta.sacar(100);
// console.log(conta.verSaldo());
// ```

// ---

// ### ✅ **Exercício 3: Herança com veículos**

// ```ts
// class Veiculo {
//     constructor(protected marca: string, protected modelo: string) {}

//     descrever(): string {
//         return `${this.marca} ${this.modelo}`;
//     }
// }

// class Carro extends Veiculo {
//     constructor(marca: string, modelo: string, private portas: number) {
//         super(marca, modelo);
//     }

//     descrever(): string {
//         return `Carro: ${super.descrever()}, ${this.portas} portas`;
//     }
// }

// class Moto extends Veiculo {
//     constructor(marca: string, modelo: string, private cilindradas: number) {
//         super(marca, modelo);
//     }

//     descrever(): string {
//         return `Moto: ${super.descrever()}, ${this.cilindradas}cc`;
//     }
// }

// // Exemplo de uso:
// const carro = new Carro("Toyota", "Corolla", 4);
// const moto = new Moto("Honda", "CG", 160);
// console.log(carro.descrever());
// console.log(moto.descrever());
// ```

// ---

// ### ✅ **Exercício 4: Interface e classe Loja**

// ```ts
// interface Produto {
//     nome: string;
//     preco: number;
//     descricao?: string;
// }

// class Loja {
//     constructor(private produtos: Produto[]) {}

//     listarProdutos(): void {
//         this.produtos.forEach(p => {
//             console.log(`${p.nome} - R$ ${p.preco.toFixed(2)}`);
//         });
//     }

//     buscarPorNome(nome: string): Produto | undefined {
//         return this.produtos.find(p => p.nome.toLowerCase() === nome.toLowerCase());
//     }
// }

// // Exemplo de uso:
// const loja = new Loja([
//     { nome: "Notebook", preco: 3500 },
//     { nome: "Mouse", preco: 150 },
//     { nome: "Teclado", preco: 300 },
// ]);

// loja.listarProdutos();
// const buscado = loja.buscarPorNome("mouse");
// console.log("Produto encontrado:", buscado);
// ```

// ---

// ### ✅ **Exercício 5: Classe Aluno com notas**

// ```ts
// class Aluno {
//     private notas: number[] = [];

//     constructor(private nome: string) {}

//     adicionarNota(nota: number): void {
//         this.notas.push(nota);
//     }

//     media(): number {
//         const soma = this.notas.reduce((a, b) => a + b, 0);
//         return this.notas.length > 0 ? soma / this.notas.length : 0;
//     }

//     situacao(): string {
//         return this.media() >= 7 ? "Aprovado" : "Reprovado";
//     }
// }

// // Exemplo de uso:
// const aluno = new Aluno("Joana");
// aluno.adicionarNota(8);
// aluno.adicionarNota(6);
// aluno.adicionarNota(7);

// console.log(`Média: ${aluno.media().toFixed(2)}`);
// console.log(`Situação: ${aluno.situacao()}`);


// --------------------------------------------------------


// ### **Exercício 1: Classe `Pessoa` com apresentação**

class Pessoa {
    public nome: string;
    public idade: number;
    public profissao: string;

    constructor(nome: string, idade: number, profissao: string){
        this.nome = nome;
        this.idade = idade;
        this.profissao = profissao;
    }

    public apresetacao() {
        return `Meu nome ${this.nome}, tenho ${this.idade} anos e trabalho com ${this.profissao}.`;
    }
}

console.log(new Pessoa('Marcos', 43, 'Programador').apresetacao())

// ### ✅ **Exercício 2: Conta bancária com encapsulamento**

class ContaBancaria {
    private saldo: number = 0;

    constructor(private numeroConta: string) {}

    depositar(valor: number): void {
        if (valor > 0) this.saldo += valor;
    }

    sacar(valor: number): void {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente");
        } else {
            this.saldo -= valor;
        }
    }

    verSaldo(): string {
        return `Saldo da conta ${this.numeroConta}: R$ ${this.saldo.toFixed(2)}`;
    }
}