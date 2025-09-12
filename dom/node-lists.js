// NodeList é uma coleção de nós (nodes), geralmente retornados por propriedades como Node.childNodes e métodos como document.querySelectorAll().
// Embora NodeList não seja um Array, é possível iterar sobre ele com forEach(). Ele também pode ser convertido para um Array real usando Array.from().

// https://developer.mozilla.org/en-US/docs/Web/API/NodeList

// live 

const parent1 = document.getElementById("parent");
let childNodes1 = parent1.childNodes;
console.log(childNodes.length); // let's assume "2"
parent.appendChild(document.createElement("div"));
console.log(childNodes.length); // outputs "3"

// static

const parent2 =  document.querySelectorAll();
let childNodes2 = parent2.childNodes;
console.log(childNodes.length); // let's assume "2"
parent.appendChild(document.createElement("div"));
console.log(childNodes.length); // outputs "3"


(function(){
const parent = document.getElementById("parent");
console.log(parent)
// let childNodes = parent.childNodes;
// console.log(childNodes.length); // let's assume "2"
// parent.appendChild(document.createElement("li"));
// console.log(childNodes.length); // outputs "3"
});

// document.querySelectorAll()

// document.getElementsByName()

// 👉 Exemplo:

// const items = document.querySelectorAll('li');
// console.log(items); // NodeList(3) [li, li, li]

// Principais características do NodeList:

// - Ele parece um array, mas não é um array real.

// - Você pode acessar os elementos por índice (items[0], items[1], etc).

// - Alguns NodeLists são dinâmicos (como os retornados por getElementsBy...), ou seja, se o DOM mudar, 
// a lista se atualiza automaticamente. Já o retornado por querySelectorAll() é estático (não muda).