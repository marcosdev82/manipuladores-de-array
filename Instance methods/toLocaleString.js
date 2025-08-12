// O método toLocaleString() retorna uma representaçao de elementos de um array. 
// Os elementos são convertidos para Strings utilizando seus respectivos métodos 
// toLocaleString e essas cadeias são separadas por uma sequência específica de 
// localidade (separados por virgula ",").

var numero = 1337;
var data = new Date();
var meuArray = [numero, data, "foo"];

var resultado = meuArray.toLocaleString();

console.log(resultado);
// saída '1337,July 26, 2015 at 20:02:23 GMT-3,foo'
// se estiver no Brasil com o fuso horario GMT-0300 (BRT) de Brasília.


// 1. Exibir uma lista de itens em uma loja virtual
const produtos = ["Camisa", "Calça", "Tênis"];
console.log(produtos.toLocaleString("pt-BR")); 
// Resultado: "Camisa, Calça, Tênis"


// Útil para mostrar rapidamente produtos comprados em um pedido, por exemplo.

// ---

// 2. Mostrar países/idiomas em uma interface multilíngue
const idiomas = ["Inglês", "Português", "Espanhol"];
console.log(idiomas.toLocaleString("pt-BR")); 
// Resultado: "Inglês, Português, Espanhol"


// Perfeito para um dropdown ou resumo de idiomas disponíveis.

// ---

// 3. Enviar lista de nomes formatada por e-mail ou notificação
const nomes = ["João", "Maria", "Carlos"];
console.log(nomes.toLocaleString("pt-BR"));
// Resultado: "João, Maria, Carlos"


// Útil para mensagens automáticas como "Os seguintes usuários foram adicionados: João, Maria, Carlos."

// ---

// 4. Exibir valores numéricos com formatação local (exemplo: preços)
const valores = [1234.5, 6789.01];
console.log(valores.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }));
// Resultado: "R$ 1.234,50,R$ 6.789,01"


// Repare que os valores são unidos por vírgula. Pode ser útil em relatórios ou exportações de dados.

// ---

// 5. Exibir datas formatadas em uma tabela ou resumo


const datas = [
    new Date('2023-01-01'),
    new Date('2023-12-25')
];

console.log(datas.toLocaleString("pt-BR"));
// Resultado: "01/01/2023 00:00:00,25/12/2023 00:00:00"


// Ideal para mostrar várias datas de eventos, vencimentos, etc.

// ---

// Dica:

// Embora `.toLocaleString()` funcione com arrays de strings, números e datas, ele não formata automaticamente listas 
// com "e" ou "ou". Se quiser isso, use `Intl.ListFormat`:


const produtoss = ["Camisa", "Calça", "Tênis"];
const formatador = new Intl.ListFormat("pt-BR", { style: "long", type: "conjunction" });
console.log(formatador.format(produtos)); 
// Resultado: "Camisa, Calça e Tênis"

