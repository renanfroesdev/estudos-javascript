const numero = document.getElementById('numero');
let resultado = document.getElementById('tabuada');
let multiplicador;

function geraTabuada(){
    let tabuada = "";
    for (let i = 1; i<=10; i++){
        multiplicador = Number(numero.value) * i;
        tabuada += `${numero.value} x ${i} = ${multiplicador}<br>`
    }
    resultado.innerHTML = tabuada;
}
