const containerNotas = document.getElementById('notas');

function adicionaNota() {
    const novaNota = document.createElement("input");

    novaNota.type = 'number';
    novaNota.classList.add('notas')
    novaNota.placeholder = 'Digite a nota'

    containerNotas.appendChild(novaNota);

}

function calculaMedia() {
    const notas = document.querySelectorAll('.notas');

    let soma = 0;
    let totalNotasValidas = 0;

    for (let input of notas) {

        const valor = input.value;

        // validar campo vazio
        if (valor === '') {
            alert('Preencha todas as notas.')
            input.focus();
            return;
        }

        const nota = Number(valor);

        // valida menor que 0 ou maior que 10

        if (nota < 0 || nota > 10) {
            alert('Digite uma nota entre 0 e 10');
            input.focus();
            return;
        }

        soma += nota;
        totalNotasValidas++;

        // evita divisão por zero
        if (totalNotasValidas === 0) {
            alert('Nenhuma nota válida encontrada.');
            return;
        }


    }
    const media = soma / totalNotasValidas;

    document.getElementById('resultado').innerText =
        `Média: ${media.toFixed(2)}`;
}