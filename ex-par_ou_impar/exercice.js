/*Crie um programa que receba um número e verifique se o número é Par ou Ímpar*/

const Prompt = require('prompt-sync')(); // Importa o módulo 'prompt-sync', que permite entrada de dados no terminal

let numero = Number(Prompt('Digite o número:'));

// Teste condicional do resto da divisão por 2 
if (numero % 2 === 0){
    console.log('É um número par');
} else {
    console.log('É um número Ímpar');
}