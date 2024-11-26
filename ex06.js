//Crie uma função que receba um número e retorne uma mensagem 
//indicando se ele é positivo, negativo ou zero.
function numero (n){
    if (n > 0) {
        return 'positvo'
    } else if (n < 0 ) {
        return 'negativo'
    } else {
        return 'zero'
    }
}
console.log(numero(0))