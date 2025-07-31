// O deleteoperador remove uma propriedade de um objeto. Se o valor da propriedade for um objeto e não houver mais referências a ele, 
// o objeto contido nessa propriedade será liberado automaticamente.

const employee = {
    firstName: "Maria",
    lastName: "Sanchez",
};

console.log(employee.firstName);
// Expected output: "Maria"

delete employee.firstName;

console.log(employee.firstName);
// Expected output: undefined
