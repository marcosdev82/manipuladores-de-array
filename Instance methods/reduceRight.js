// O método reduceRight() aplica à uma função um acumulador e cada valor do array (da direita para esquerda) é reduzido para um valor único.

const acumulador = [0, 1, 2, 3, 4].reduceRight(function (
    previousValue, 
    currentValue,
    array,
) {
    return previousValue + currentValue; 
}, 10);

console.log(acumulador); // 20
