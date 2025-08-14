// Perfeito! Abaixo estão **10 exercícios de lógica mais avançados em JavaScript**, usando **curto-circuito (`&&`, `||`)**, **`if/else`** e **operadores ternários**, mas agora com foco em **situações reais e complexas**, como controle de fluxo, manipulação de dados, consistência de regras e simulação de comportamento de sistemas.

// ---

// ## 🚀 10 Exercícios Avançados de Lógica com JavaScript

// ---

// ### ✅ 1. Validação de múltiplos campos (ternário + curto-circuito)

// **Simule um cadastro onde `nome`, `email` e `senha` devem estar preenchidos. Retorne mensagens de erro específicas.**

// ```js
// const nome = "Ana";
// const email = "";
// const senha = "123456";

// const validacao = nome && email && senha 
//   ? "Cadastro válido!" 
//   : !nome 
//     ? "Nome é obrigatório." 
//     : !email 
//       ? "Email é obrigatório." 
//       : "Senha é obrigatória.";

// console.log(validacao);
// ```

// ---

// ### ✅ 2. Avaliação de desempenho (ternário + lógica booleana)

// **Receba uma média final e diga se o aluno está: “Aprovado”, “Recuperação” ou “Reprovado”.**

// ```js
// const media = 5.9;

// const resultado = media >= 7 
//   ? "Aprovado" 
//   : media >= 5 
//     ? "Recuperação" 
//     : "Reprovado";

// console.log(`Resultado final: ${resultado}`);
// ```

// ---

// ### ✅ 3. Sistema de descontos com múltiplas regras

// **Aplique regras de desconto com base no tipo de cliente e valor da compra.**

// ```js
// const tipoCliente = "premium"; // comum | premium
// const valorCompra = 1500;

// let desconto = 0;

// if (tipoCliente === "premium" && valorCompra > 1000) {
//   desconto = 0.15;
// } else if (valorCompra > 500) {
//   desconto = 0.1;
// } else {
//   desconto = 0.05;
// }

// const valorFinal = valorCompra * (1 - desconto);
// console.log(`Valor final com desconto: R$ ${valorFinal.toFixed(2)}`);
// ```

// ---

// ### ✅ 4. Simulador de frete grátis (curto-circuito + if)

// **Cliente só recebe frete grátis se for VIP ou se a compra passar de R\$300.**

// ```js
// const valorCompra = 280;
// const clienteVIP = true;

// const freteGratis = clienteVIP || valorCompra >= 300;

// freteGratis && console.log("✅ Frete grátis ativado!");
// !freteGratis && console.log("🚚 Frete será cobrado.");
// ```

// ---

// ### ✅ 5. Seleção de plano com base em múltiplas condições

// ```js
// const idade = 65;
// const possuiDoença = false;
// const plano = idade > 60 && !possuiDoença 
//   ? "Plano Sênior"
//   : idade < 30 
//     ? "Plano Jovem"
//     : "Plano Adulto";

// console.log(`Plano sugerido: ${plano}`);
// ```

// ---

// ### ✅ 6. Avaliação de senha segura (lógica encadeada)

// ```js
// const senha = "minhaSenhaSegura123";
// const temMaisDe8 = senha.length >= 8;
// const temNumero = /\d/.test(senha);
// const temMaiuscula = /[A-Z]/.test(senha);

// const segura = temMaisDe8 && temNumero && temMaiuscula;

// console.log(segura ? "Senha forte!" : "Senha fraca. Melhore a segurança.");
// ```

// ---

// ### ✅ 7. Autenticação com múltiplos cenários (if/else)

// ```js
// const usuario = "admin";
// const senha = "12345";

// if (!usuario || !senha) {
//   console.log("Campos obrigatórios não preenchidos.");
// } else if (usuario === "admin" && senha === "12345") {
//   console.log("Login autorizado.");
// } else {
//   console.log("Usuário ou senha inválidos.");
// }
// ```

// ---

// ### ✅ 8. Mensagens dinâmicas com prioridade (curto-circuito + ternário)

// ```js
// const error = "";
// const warning = "Você está quase sem espaço";
// const success = "Backup realizado com sucesso";

// console.log(error || warning || success || "Nenhuma mensagem a exibir.");
// ```

// ---

// ### ✅ 9. Exibição condicional de botão (curto-circuito)

// ```js
// const podeEditar = false;
// const podeExcluir = true;

// podeEditar && console.log("🔧 Mostrar botão de editar");
// podeExcluir && console.log("🗑️ Mostrar botão de excluir");
// ```

// ---

// ### ✅ 10. Regras de validação para cupons (if + curto-circuito)

// ```js
// const cupom = "DESCONTO10";
// const expirado = false;
// const usado = false;

// if (!cupom) {
//   console.log("Nenhum cupom aplicado.");
// } else if (expirado || usado) {
//   console.log("Cupom inválido.");
// } else {
//   console.log("Cupom aplicado com sucesso!");
// }
// ```

