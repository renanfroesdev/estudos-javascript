const Prompt = require('prompt-sync')();
const signos = ["Áries", "Touro", "Gêmeos", "Câncer", "Leão", "Virgem", "Libra", "Escorpião", "Sagitário", "Capricórnio", "Aquário", "Peixes"];

function obterSigno(){
    let signo = ""
    let dia;
    let mes;
    let valido = false;
    
    while(!valido){
        try {
            dia = Number(Prompt("Digite seu dia de nascimento: EX(1)"));
            mes = Number(Prompt("Digite o mês que você nasceu: EX(2)"));
            if (isNaN(dia) || isNaN(mes) || dia <= 0 || dia > 31 || mes <= 0 || mes >12){
                throw new Error('Data inválida');
            }
            valido = true;
        }
        catch(error){
                console.log(error.message);
        }
    }
    if ((mes === 1 && dia >= 21) || (mes === 2 && dia <= 19 )){
            signo = "Aquário"
    }else if ((mes === 2 && dia >= 20) || (mes === 3 && dia <= 20 )){
            signo = "Peixes"
    }else if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 20 )){
            signo = "Áries"
    }else if ((mes === 4 && dia >= 21) || (mes === 5 && dia <= 20 )){
            signo = "Touro"
    }else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20 )){
            signo = "Gêmeos"
    }else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 21 )){
            signo = "Câncer"
    }else if ((mes === 7 && dia >= 22) || (mes === 8 && dia <= 22 )){
            signo = "Leão"
    }else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22 )){
            signo = "Virgem"
    }else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22 )){
            signo = "Libra"
    }else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21 )){
            signo = "Escorpião"
    }else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21 )){
            signo = "Sagitário"
    }else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 20 )){
            signo = "Capricórnio"
    } 
    console.log(`Seu signo é: ${signo}`)
    console.log('Fim do programa!')
}
obterSigno();
