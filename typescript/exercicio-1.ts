// ### 🔹 **Exercício 1: Tipos Básicos**

// Crie uma função (calcularMedia) que receba dois números e retorne a média entre eles. Tipos devem ser explicitamente definidos.

// ```ts
// function calcularMedia(a: number, b: number): number {
//   // implemente aqui
// }
// ```

// ---

// ### 🔹 **Exercício 2: Interface de Objeto**

// Crie uma interface `Usuario` com as propriedades:

// * `nome` (string)
// * `idade` (number)
// * `ativo` (boolean)

// E depois, crie uma função que recebe um `Usuario` e retorna uma frase como:

// > "Usuário Marcos tem 30 anos e está ativo."

// ```ts
// interface Usuario {
//     nome: string;
//     idade: number;
//     ativo: boolean;
// }

// function mostraUsuario(nome: string, idade: number, ativo: boolean): Usuario {
//     return { nome, idade, ativo };
// }

// const {nome, idade, ativo} = mostraUsuario('Marcos', 43, true)

// console.log(console.log(`O usuário ${nome} tem ${idade} e está com status ${(ativo)? 'ativo' : 'inativo'}`))
// ```

// ---

// ### 🔹 **Exercício 3: Tipos Literais e Union**

// Crie uma função que recebe uma string representando a direção (`"cima"`, `"baixo"`, `"esquerda"`, `"direita"`) e retorne uma mensagem indicando o movimento.

// ```ts

// type Direcao = 'cima' | 'baixo' | 'esquerda' | 'direita';

// function mover(direcao: Direcao): string {
//     return `Movendo para ${direcao}`;
// }

// console.log(mover('baixo'));
// ```

// ---

// ### 🔹 **Exercício 4: Generics**

// Crie uma função `retornarPrimeiroElemento` que recebe um array de qualquer tipo e retorna o primeiro elemento.

// ```ts
// function retornarPrimeiroElemento<T>(lista: T[]): T {
//   // implemente aqui
// }
// ```

// ---

// ### 🔹 **Exercício 5: Classes e Modificadores**

// Crie uma classe `Carro` com as propriedades:

// * `marca` (string)
// * `modelo` (string)
// * `ano` (number)

// E um método `descrever()` que imprime uma frase como:

// > "Fiat Uno, ano 2010."

// ```ts
// class Carro {
//   // propriedades e construtor

//   descrever(): string {
//     // implemente aqui
//   }
// }
// ```

// ---

// ### 🔹 **Exercício 1: Tipos Básicos**

// Crie uma função (calcularMedia) que receba dois números e retorne a média entre eles. 
// Tipos devem ser explicitamente definidos.

function calcularMedia(num1: number, num2: number): number {
    return (num1 + num2) / 2
}
console.log(calcularMedia(7.5, 9))

// ### 🔹 **Exercício 2: Interface de Objeto**

// Crie uma interface `Usuario` com as propriedades:

// * `nome` (string)
// * `idade` (number)
// * `ativo` (boolean)

// E depois, crie uma função que recebe um `Usuario` e retorna uma frase como:

// > "Usuário Marcos tem 30 anos e está ativo."

console.log('---')

interface Usuario {
    nome: string;
    idade: number;
    ativo: boolean;
}

function descrever (usuario: Usuario): string {
    return `Usuário ${usuario.nome} tem ${usuario.idade} anos e está ${usuario.ativo ? ' ativo' : 'inativo' }.`
}

const usuario = {
    nome: 'Marcos',
    idade: 43,
    ativo: false,
}

console.log(descrever(usuario))

console.log('---')


// ### 🔹 **Exercício 3: Tipos Literais e Union**

// Crie uma função que recebe uma string representando a direção (`"cima"`, `"baixo"`, `"esquerda"`, `"direita"`) e retorne uma mensagem indicando o movimento.

// ```ts

type Direcao = 'cima' | 'baixo' | 'esquerda' | 'direita'

function direcao(direcao: Direcao): string {
    return direcao;
}

console.log(direcao('direita'))
console.log(direcao('cima'))

console.log('---')

// ### 🔹 **Exercício 4: Generics**

// Crie uma função `retornarPrimeiroElemento` que recebe um array de qualquer tipo e retorna o primeiro elemento.

// ```ts

function retornarPrimeiroElemento<T>(num: T[]): T {
    return num[0]
}
const arr = [1, 2, 3]
console.log(retornarPrimeiroElemento(arr))

// ### 🔹 **Exercício 5: Classes e Modificadores**

// Crie uma classe `Carro` com as propriedades:

// * `marca` (string)
// * `modelo` (string)
// * `ano` (number)

// E um método `descrever()` que imprime uma frase como:

class Carro {

    private marca: string;
    private modelo: string;
    private ano: number; 

    constructor(marca: string, modelo: string, ano: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    descreve(): string {
        return `marca: ${this.marca}, modelo: ${this.modelo}, ano: ${this.ano}`;
    }
}

console.log(new Carro('Fiat', 'UNO', 1992).descreve());
