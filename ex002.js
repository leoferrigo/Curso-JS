//Crie um vetor com 6 números inteiros e exiba o maior e o menor número do vetor.
//Exemplo de saída: Se o vetor for [3, 9, 2, 15, 1, 8], o maior número será 15 e o menor será 1.

let numeros = [3, 9, 2, 15, 1, 8];
numeros.sort((a, b) => a - b);
let primeiroNumero = numeros[0];
let ultimoNumero = numeros[numeros.length - 1];

console.log("Primeiro Número", primeiroNumero);
console.log('Ultimo Número', ultimoNumero);

