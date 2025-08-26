
// ### 🧠 **1. Criar um método `apresentar` usando prototype**

// **Objetivo:** Criar uma função construtora `Pessoa` e adicionar o método `apresentar` ao protótipo.

// ```javascript
// function Pessoa(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
// }

// Pessoa.prototype.apresentar = function() {
//   return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`;
// };

// // Exemplo de uso
// const p1 = new Pessoa("Marcos", 30);
// console.log(p1.apresentar());
// ```

// ---

// ### 🧠 **2. Adicionar método `area` ao protótipo de Retangulo**

// **Objetivo:** Criar um construtor `Retangulo` e adicionar o método `area` ao seu protótipo.

// ```javascript
// function Retangulo(largura, altura) {
//   this.largura = largura;
//   this.altura = altura;
// }

// Retangulo.prototype.area = function() {
//   return this.largura * this.altura;
// };

// const r1 = new Retangulo(5, 3);
// console.log(`Área: ${r1.area()}`);
// ```

// ---

// ### 🧠 **3. Criar um método `desconto` em Produto**

// **Objetivo:** Criar uma função construtora `Produto` com nome e preço, e adicionar um método que aplique um desconto.

// ```javascript
// function Produto(nome, preco) {
//   this.nome = nome;
//   this.preco = preco;
// }

// Produto.prototype.aplicarDesconto = function(porcentagem) {
//   const desconto = this.preco * (porcentagem / 100);
//   return this.preco - desconto;
// };

// const produto = new Produto("Notebook", 3500);
// console.log(`Preço com 10% de desconto: R$ ${produto.aplicarDesconto(10).toFixed(2)}`);
// ```

// ---

// ### 🧠 **4. Adicionar método `ehMaiorDeIdade` a Usuario**

// **Objetivo:** Criar `Usuario` e um método que retorna se ele é maior de idade.

// ```javascript
// function Usuario(nome, idade) {
//   this.nome = nome;
//   this.idade = idade;
// }

// Usuario.prototype.ehMaiorDeIdade = function() {
//   return this.idade >= 18;
// };

// const u1 = new Usuario("Lucas", 17);
// console.log(`${u1.nome} é maior de idade? ${u1.ehMaiorDeIdade()}`);
// ```

// ---

// ### 🧠 **5. Criar um protótipo de ContaBancaria com saque**

// **Objetivo:** Criar uma função `ContaBancaria` com métodos para sacar e ver saldo.

// ```javascript
// function ContaBancaria(cliente, saldoInicial) {
//   this.cliente = cliente;
//   this.saldo = saldoInicial;
// }

// ContaBancaria.prototype.sacar = function(valor) {
//   if (valor > this.saldo) {
//     return "Saldo insuficiente!";
//   }
//   this.saldo -= valor;
//   return `Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`;
// };

// ContaBancaria.prototype.getSaldo = function() {
//   return `Saldo: R$${this.saldo}`;
// };

// const conta = new ContaBancaria("Ana", 1000);
// console.log(conta.sacar(250));
// console.log(conta.getSaldo());
// ```

// ---