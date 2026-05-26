let produtos = [];
let listaProdutos = document.getElementById('lista');

function cadastrarProduto(){
    let nomeProduto = prompt('Digite o nome do produto:');
    let precoProduto = Number(prompt('Digite o valor do produto:'));

    let novoProduto = {
        id: produtos.length + 1, 
        nome: nomeProduto,
        preco: precoProduto
    };

    produtos.push(novoProduto);
    alert('Produto Cadastrado com Sucesso');

    exibirProdutos()
}

function exibirProdutos() {
    listaProdutos.innerHTML = "";

    if (produtos.length === 0) {
        alert('Lista de Produtos Vazia');
        return;
    }

    for (let produto of produtos){
        listaProdutos.innerHTML += 
        `ID: ${produto.id} | ${produto.nome}  | R$ ${produto.preco}<br>`;
    }
}

function excluirProduto(){
        let idExcluir = Number(prompt('Digite o ID do produto que você quer excluir:'))

        produtos = produtos.filter(produto => produto.id !== idExcluir);
        
        exibirProdutos();
}

function somarProdutos(){
    
    exibirProdutos();
    
    let soma = 0;

    for(let produto of produtos){
        soma += produto.preco;
    }
    
    let total = document.createElement('h3');
    total.innerText = `Valor total dos produtos: R$ ${soma}`;

    listaProdutos.appendChild(total);
}
