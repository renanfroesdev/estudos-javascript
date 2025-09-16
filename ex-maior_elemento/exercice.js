/* 
Crie uma função que receba um array de números e retorne o segundo maior número.
A função deve lidar com arrays que contêm números duplicados e deve retornar <null> se não 
houver um segundo maior elemento
*/

const prompt = require ('prompt-sync')(); // Função para criar uma entrada de dados do usuário via terminal

function receberNumeros() {
    let num1 = Number(prompt('Digite o primeiro número: ')); // entrada dos números do array
    let num2 = Number(prompt('Digite o segundo número: '));
    let num3 = Number(prompt('Digite o terceiro número: '));
    let num4 = Number(prompt('Digite o quarto número: '));
    let num5 = Number(prompt('Digite o quinto número: '));
    let array = [num1, num2, num3, num4, num5]; // coloca os números recebidos em um array
    let maiorNumero = array[0]; // inicializa a variável com o primeiro número do array
    let segundoMaior = -Infinity;
    for (let i = 1; i < array.length; i++) { //define uma váriavel de contagem para percorrer todo o array
        if (array[i] > maiorNumero) {
            segundoMaior = maiorNumero
            maiorNumero = array[i]; // condição para comparar os números percorridos pela linha acima e atribuir o maior numero a váriavel
        } else if (array[i] > segundoMaior && array [i] !== maiorNumero){
            segundoMaior = array[i];
        }
    } 
    console.log(`O maior número é ${maiorNumero}`)
    console.log(`O sgundo maior número é ${segundoMaior}`)
}
receberNumeros();
