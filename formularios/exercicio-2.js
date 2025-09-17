// (function () {
//   "use strict";

//   const form = document.getElementById("contactForm");
//   const nameInput = document.getElementById("name");
//   const emailInput = document.getElementById("email");
//   const contactList = document.getElementById("contactList");

//   form.addEventListener("submit", (event) => {
//     event.preventDefault();

//     // Validação simples
//     if (!nameInput.value.trim() || !emailInput.value.trim()) {
//       if (!nameInput.value.trim()) nameInput.classList.add("error");
//       if (!emailInput.value.trim()) emailInput.classList.add("error");
//       return;
//     }

//     // Criar novo item da lista
//     const li = document.createElement("li");
//     li.textContent = `${nameInput.value} - ${emailInput.value}`;

//     // Botão remover
//     const removeBtn = document.createElement("button");
//     removeBtn.textContent = "❌";
//     removeBtn.addEventListener("click", () => {
//       contactList.removeChild(li);
//     });

//     li.appendChild(removeBtn);
//     contactList.appendChild(li);

//     // Resetar formulário
//     nameInput.value = "";
//     emailInput.value = "";
//     nameInput.classList.remove("error");
//     emailInput.classList.remove("error");
//   });
// })();
