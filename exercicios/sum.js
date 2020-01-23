/*
    Dado um vetor de números, como poderia ser realizada a soma de
    todos os valores utilizando reduce.
*/

const vetor = [1,2,3,4,5]
const soma = vetor.reduce((total, valor) => total + valor, 0)
console.log('soma', soma)
