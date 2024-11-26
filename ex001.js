//Crie um vetor com 5 números inteiros e calcule a soma de todos os números dentro do vetor.
let valores = [1, 2, 3, 4, 5];
let soma = 0;

for (let i = 0; i < valores.length; i++) {
    soma += valores[i];  // soma = soma + valores[i];
}

console.log(`A soma dos valores é ${soma}`);
//soma += valores[i]; é uma forma abreviada de 
//soma = soma + valores[i];, que atualiza o valor de soma somando o próximo número do array