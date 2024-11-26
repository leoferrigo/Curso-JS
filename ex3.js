//Crie uma função que receba um número e retorne true se ele for par e false se for ímpar.
function parimpar(a){
    if (a % 2 == 0)
        return `O ${a} é par`
    else {
        return `O ${a} é impar`
    }

    }

console.log(parimpar(13))