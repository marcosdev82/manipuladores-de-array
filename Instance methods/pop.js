// O pop() método de Array instâncias remove o último elemento de um array e retorna esse elemento. 
// Este método altera o comprimento do array.

const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

console.log(plants.pop()); // alterar o array original e retorna o elementor removido
// Expected output: "tomato"

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]
