// Crie um programa que recebe uma string e retorna o número de vogais (a, e, i, o, u) que ela contém.git
const Prompt = require('prompt-sync')();

const palavra = Prompt('Digite uma palavra: ');
const vogais = ['a', 'e', 'i', 'o', 'u'];
let contador = 0


function verificador() {
    for (const contagem of palavra){
        if (vogais.includes(contagem)){
        contador += 1;
    }
}
    console.log(`A Palavra "${palavra}", tem (${contador}) vogais`);
}

verificador()