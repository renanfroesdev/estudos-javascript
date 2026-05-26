function calcular(){
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let operator = document.getElementById('operator').value;
    let resultado = document.getElementById('resultado');
    let res;

    switch (operator) {
        case "+":
            res = num1 + num2;
            resultado.innerText = res;
            break;
        case '-':
            res = num1 - num2;
            resultado.innerText = res;
            break;
        case 'x':
            res = num1 * num2;
            resultado.innerText = res;
            break;
        case '/':
            res = num1 / num2;
            resultado.innerText = res;
            break;
        default:
            break;
    }
}