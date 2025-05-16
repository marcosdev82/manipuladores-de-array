# Manipuladores de Array / Instance methods
# 🧠 Exercício 1 de JavaScript: Manipulação de Arrays

Este repositório contém um exercício 1 prático em JavaScript com foco em manipulação de arrays e iteração de dados. O exercício utiliza os seguintes recursos da linguagem:

- `for..in`
- `concat()`
- `at()`
- `push()`
- `Object.entries()`

## 📋 Descrição do Exercício 1

Você tem duas listas (arrays) com nomes de alunos de duas turmas diferentes. O desafio é realizar as seguintes operações:

1. Concatenar as duas listas em uma única lista.
2. Adicionar um novo aluno ao final da lista.
3. Exibir o primeiro e o último aluno da nova lista utilizando `at()`.
4. Iterar sobre a lista usando `for..in`, exibindo o índice e o nome do aluno.
5. Utilizar `Object.entries()` para transformar o array em pares `[índice, nome]` e imprimir cada par.

## 🧪 Código do Exercício

```javascript
// 1. Arrays iniciais de alunos
let alunosTurmaA = ["Ana", "Bruno", "Carlos"];
let alunosTurmaB = ["Diana", "Eduardo", "Fernanda"];

// 2. Concatenar os arrays
let todosAlunos = alunosTurmaA.concat(alunosTurmaB);

// 3. Adicionar novo aluno
todosAlunos.push("Gustavo");

// 4. Exibir o primeiro e o último aluno usando at()
console.log("Primeiro aluno:", todosAlunos.at(0));
console.log("Último aluno:", todosAlunos.at(-1));

// 5. Iterar com for..in
console.log("\nLista de alunos (for..in):");
for (let index in todosAlunos) {
  console.log(`Índice ${index}: ${todosAlunos[index]}`);
}

// 6. Usar Object.entries para exibir pares [índice, nome]
console.log("\nLista de alunos (Object.entries):");
for (let [index, nome] of Object.entries(todosAlunos)) {
  console.log(`Par [${index}, ${nome}]`);
}
```

# 🧠 Exercício 2 com `for...of`, `at`, `array`, `every`, `entries`, `sort`, `substr` e `reverse`

Este exercício 2 tem como objetivo praticar diversos métodos e estruturas do JavaScript que envolvem manipulação de arrays e iteração. Ele abrange:

- `for...of`
- `.at()`
- `every()`
- `entries()`
- `sort()`
- `substr()`
- `reverse()`

---

## 📘 Descrição do Exercício 2

Você tem uma lista de nomes. O objetivo é:

1. Exibir cada nome com seu índice usando enties e for of.
2. Verificar se todos os nomes possuem mais de 3 letras usando every.
3. Ordenar os nomes em ordem alfabética.
4. Exibir o primeiro e o último nome da lista usando `.at()`.
5. Mostrar uma substring com os 3 primeiros caracteres de cada nome.
6. Reverter a lista e exibi-la.
7. Exibir cada nome usando `for...of`.

---

## 💻 Código

```js
const nomes = ["Carlos", "Ana", "Beatriz", "Daniel", "Eduardo"];

// 1. Mostrar índice e nome usando entries()
console.log("📌 Lista com índices:");
for (const [indice, nome] of nomes.entries()) {
  console.log(`${indice}: ${nome}`);
}

// 2. Verificar se todos os nomes têm mais de 3 letras
const todosTemMaisDeTresLetras = nomes.every(nome => nome.length > 3);
console.log("\n✅ Todos os nomes têm mais de 3 letras?", todosTemMaisDeTresLetras);

// 3. Ordenar os nomes em ordem alfabética
const nomesOrdenados = [...nomes].sort();
console.log("\n🔤 Nomes ordenados:", nomesOrdenados);

// 4. Exibir primeiro e último nome usando .at()
console.log("\n🏷️ Primeiro nome:", nomesOrdenados.at(0));
console.log("🏷️ Último nome:", nomesOrdenados.at(-1));

// 5. Mostrar substrings dos 3 primeiros caracteres de cada nome
console.log("\n✂️ Primeiras 3 letras de cada nome:");
for (const nome of nomes) {
  console.log(`${nome}: ${nome.substr(0, 3)}`);
}

// 6. Reverter a lista
const nomesReversos = [...nomes].reverse();
console.log("\n🔁 Lista reversa:", nomesReversos);

// 7. Exibir todos os nomes com for...of
console.log("\n📋 Nomes usando for...of:");
for (const nome of nomes) {
  console.log(nome);
}
```
## 💡 Exercício 3: Filtrar produtos disponíveis e listar nomes ordenados

Você tem um **objeto de produtos**, onde cada chave é um código do produto e o valor é um objeto com `nome`, `preco` e `disponivel`.

### Objetivo

1. Obter as **chaves** dos produtos usando `Object.keys()`
2. **Filtrar** os produtos disponíveis (`disponivel: true`) usando `filter()`
3. Obter apenas os **nomes** dos produtos disponíveis
4. **Ordenar** os nomes em ordem alfabética usando `sort()`
5. Usar um **iterator** e `next()` para exibir os nomes um a um

---

### 🔧 Código-base:

```javascript
const produtos = {
  p01: { nome: "Camisa", preco: 79.9, disponivel: true },
  p02: { nome: "Calça", preco: 129.9, disponivel: false },
  p03: { nome: "Tênis", preco: 199.9, disponivel: true },
  p04: { nome: "Boné", preco: 49.9, disponivel: true },
};

// 1. Obter todas as chaves dos produtos
const codigos = Object.keys(produtos);

// 2. Filtrar apenas os produtos disponíveis
const disponiveis = codigos
  .map(codigo => produtos[codigo])
  .filter(produto => produto.disponivel);

// 3. Pegar os nomes dos produtos disponíveis
const nomes = disponiveis.map(p => p.nome);

// 4. Ordenar os nomes em ordem alfabética
nomes.sort();

// 5. Criar um iterador com os nomes e exibir com next()
const iterador = nomes[Symbol.iterator]();

console.log("Produtos disponíveis:");
let resultado = iterador.next();
while (!resultado.done) {
  console.log("- " + resultado.value);
  resultado = iterador.next();
}
```

---

### 🧪 Resultado esperado:

```
Produtos disponíveis:
- Boné
- Camisa
- Tênis
```

---

Se quiser uma versão com prompt para o usuário escolher se deseja ver o próximo item, isso também pode ser implementado.

posso colocar o readme dentro de diretório separados na mesma aplicação?

