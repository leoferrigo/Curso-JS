//Crie um array com 5 números inteiros.
//Calcule a soma de todos os números do array e mostre o resultado no console.
let numeros = [1, 5, 3, 4, 6]
let soma = 0
for (let i = 0; i < numeros.length; i++){
    soma += numeros[i]
}
console.log(`A soma dos números é igual a ${soma}`)