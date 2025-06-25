const tarefas = [
    { titulo: "Estudar JavaScript", concluida: true },
    { titulo: "Ler documentação", concluida: false },
    { titulo: "Fazer exercícios", concluida: true },
    { titulo: "Revisar código", concluida: true }
];

// // 1. Verifique se todas as tarefas foram concluídas (use every)
// const todasConcluidas = tarefas.every(tarefa => tarefa.concluida);
// console.log("Todas concluídas?", todasConcluidas);

// // 2. Encontre o índice da última tarefa não concluída (use findLastIndex)
// const ultimaNaoConcluida = tarefas.findLastIndex(tarefa => !tarefa.concluida);
// console.log("Última não concluída no índice:", ultimaNaoConcluida);

// // 3. Use reduceRight para criar uma string com os títulos das tarefas em ordem reversa
// const titulosReversos = tarefas.reduceRight((acc, tarefa) => acc + " | " + tarefa.titulo, "");
// console.log("Títulos ao contrário:", titulosReversos);

// // 4. Verifique se 'tarefas' é um array (use isArray)
// console.log("É array?", Array.isArray(tarefas));

// // 5. Crie uma nova lista de tamanho 5 e preencha com "Pendente" (use fill e from)
// const pendentes = Array.from({ length: 5 }).fill("Pendente");
// console.log("Lista preenchida:", pendentes);

// // 6. Remova a primeira tarefa usando shift e imprima
// const primeira = tarefas.shift();
// console.log("Removida:", primeira);

// // 7. Use while para remover tarefas até que só sobrem 2
// while (tarefas.length > 2) {
//   tarefas.pop();
// }
// console.log("Tarefas finais:", tarefas);

// 1. Verifique se todas as tarefas foram concluídas (use every)
const taskCompleted = tarefas.every((task) => task.concluida === true )
console.log(taskCompleted)

// 2. Encontre o índice da última tarefa não concluída (use findLastIndex)
const LasTaskCompleted = tarefas.findLastIndex((task) => task.concluida === false )
console.log(LasTaskCompleted)

// 3. Use reduceRight para criar uma string com os títulos das tarefas em ordem reversa
const taskReverse = tarefas.reduceRight((acc, curr) => acc + " | " + curr.titulo, "")
console.log(taskReverse)

// 4. Verifique se 'tarefas' é um array (use isArray)
console.log(Array.isArray(tarefas))

// 5. Crie uma nova lista de tamanho 5 e preencha com "Pendente" (use fill e from)
const list = Array.from({ length: 5 })
console.log(list)
console.log(list.fill('🚀'))

// 6. Remova a primeira tarefa usando shift e imprima
console.log(tarefas.shift(), tarefas)

// 7. Use while para remover tarefas até que só sobrem 2
while(tarefas.length > 2) {
    tarefas.pop()
}
console.log(tarefas)