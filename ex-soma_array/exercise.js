const Prompt = require('prompt-sync')();

const array = [];
let numeros = 0

for (let i = 1; i <= 5; i++){
    numeros = Number(Prompt('Digite um número: '));
    array.push(numeros);
}

const soma = array.reduce((acumulador, valorAtual) => {
    return acumulador + valorAtual;
}, 0)

console.log(soma)