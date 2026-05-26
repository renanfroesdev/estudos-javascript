let contador = document.getElementById('contagem');
let contagem = 0;

function somar(){
    contagem += 1;
    contador.innerText = contagem;
}
function diminuir(){
    contagem -= 1;
    contador.innerText = contagem;
}