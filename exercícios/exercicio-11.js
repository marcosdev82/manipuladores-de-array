const tarefas = [
    { titulo: "Estudar JavaScript", concluida: true },
    { titulo: "Ler documentação", concluida: false },
    { titulo: "Fazer exercícios", concluida: true },
    { titulo: "Revisar código", concluida: true }
];

// // 1. Verifique se todas as tarefas foram concluídas
// const todasConcluidas = tarefas.every(tarefa => tarefa.concluida);
// console.log("Todas concluídas?", todasConcluidas);

// // 2. Encontre o índice da última tarefa não concluída
// const ultimaNaoConcluida = tarefas.findLastIndex(tarefa => !tarefa.concluida);
// console.log("Última não concluída no índice:", ultimaNaoConcluida);

// // 3. Use reduceRight para criar uma string com os títulos das tarefas em ordem reversa
// const titulosReversos = tarefas.reduceRight((acc, tarefa) => acc + " | " + tarefa.titulo, "");
// console.log("Títulos ao contrário:", titulosReversos);

// // 4. Verifique se 'tarefas' é um array
// console.log("É array?", Array.isArray(tarefas));

// // 5. Crie uma nova lista de tamanho 5 e preencha com "Pendente"
// const pendentes = Array.from({ length: 5 }).fill("Pendente");
// console.log("Lista preenchida:", pendentes);

// // 6. Remova a primeira tarefa e imprima
// const primeira = tarefas.shift();
// console.log("Removida:", primeira);

// // 7. Use while para remover tarefas até que só sobrem 2
// while (tarefas.length > 2) {
//   tarefas.pop();
// }
// console.log("Tarefas finais:", tarefas);

// 1. Verifique se todas as tarefas foram concluídas
const taskCompleted = tarefas.every((task) => task.concluida === true)
console.log(taskCompleted)

// 2. Encontre o índice da última tarefa não concluída
const notTaskCompleted = tarefas.findLastIndex((task) => task.concluida === false)
console.log(notTaskCompleted)

// 3. Use reduceRight para criar uma string com os títulos das tarefas em ordem reversa
const strReverse = tarefas.reduceRight((acc, curr) =>  acc + " | " + curr.titulo , "");
console.log(strReverse)

// 4. Verifique se 'tarefas' é um array
const isArray = Array.isArray(tarefas)
console.log(isArray)

// 5. Crie uma nova lista de tamanho 5 e preencha com "Pendente"
const listPendent = Array.from({ length: 5}).fill('pendente')
console.log(listPendent)

// 6. Remova a primeira tarefa e imprima
const removeFirstTask = tarefas.shift()
console.log(removeFirstTask)

// 7. Use while para remover tarefas até que só sobrem 2
while(tarefas.length > 2) {
    tarefas.pop()
}
console.log(tarefas)