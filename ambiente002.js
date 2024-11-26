let num = [5, 8, 4, 3]
num[3] = 6
num.push(7) //adicionar 1 no final
num.length //qual o comprimento
num.sort()//ordenar em ordem crescente
console.log(`Nosso vetor é ${num}`)
let pos = num.indexOf(8)
if (pos == -1){
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor está na posição ${pos}`)
}
