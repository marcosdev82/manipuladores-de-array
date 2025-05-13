// - Combinar dois arrays usando `concat`
// - Filtrar elementos com `filter`
// - Verificar uma condição com `every`
// - Iterar com `entries`
// - Adicionar novos elementos com `push`

// Arrays de usuários
const grupo1 = [
  { nome: 'Ana', idade: 28 },
  { nome: 'Carlos', idade: 34 },
];

const grupo2 = [
  { nome: 'Bruna', idade: 22 },
  { nome: 'Diego', idade: 30 },
  { nome: 'Marcos', idade: null },
];

// 1. Combinar os dois arrays usando `concat`
const allGrupos = grupo1.concat(grupo2)
console.log(allGrupos);  

// 2. Filtrar elementos com `filter` 
const usuarioFiltrado = allGrupos.filter(usuario => usuario.idade <= 30);
console.log(usuarioFiltrado) 

// 3. Verificar uma condição com `every`
const allGruposNull = allGrupos.every(usuario => usuario.idade !== null); 
console.log(allGruposNull) // false

// 4. Iterar com `entries`
for (const [index, usuario] of allGrupos.entries()) {
    console.log(`O Usuário com o ID ${index} tem ${usuario.idade} anos.` )
}

// 5. Adicionar novos elementos com `push`
const novoUsuario = { nome: 'Fabio Biba', idade: 100 };
allGrupos.push(novoUsuario) // Alterar o array original
console.log(allGrupos) // [{ nome: 'Ana', idade: 28 }, { nome: 'Carlos', idade: 34 }, { nome: 'Bruna', idade: 22 }, { nome: 'Diego', idade: 30 }, { nome: 'Marcos', idade: null }, { nome: 'Fabio Biba', idade: 100 }]

