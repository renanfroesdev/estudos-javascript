const produtos = [
    {
        nome: "Alface",
        preco: 4,
        disponivel: true
    },
    {
        nome: "Tomate",
        preco: 6,
        disponivel: true
    },
    {
        nome: "Cenoura",
        preco: 4,
        disponivel: false
    }
]

const nomes = produtos.map(produto => produto.nome)

console.log(nomes)

const comDesconto = produtos.map(produto => {
    return {
        ...produto, 
        preco: produto.preco * 0.9
    }
})

console.log(comDesconto);

const mensagens = produtos.map(produto => {
    return `${produto.nome} custa R$ ${produto.preco}`
})
console.log(mensagens);

const statusProduto = produtos.map(produto => {
    return {
        nome: produto.nome, 
        status: produto.disponivel ? "Em Estoque" : "Indisponível"
    }
})

console.log(statusProduto);

const disponiveis = produtos.filter(produto => {
    return produto.disponivel === false
})

console.log(disponiveis);

const disponivel = produtos.filter(produto => produto.disponivel);
console.log(disponivel)

const caros = produtos.filter(produto => produto.preco > 4);
console.log(caros);

const indisponiveis = produtos.filter(produto => !produto.disponivel);
console.log(indisponiveis);

const total = produtos.reduce((acumulador, produto) => {
    return acumulador + produto.preco
}, 0)
console.log(total);

const totalDisponiveis = produtos.reduce((acumulador, produto) => {
    if (produto.disponivel){
        return acumulador + produto.preco
    }
    return acumulador
},0 )

console.log(`A soma total de produtos disponiveis é: R$ ${totalDisponiveis}`)

const quantidade = produtos.reduce((acumulador) => {
    return acumulador + 1
}, 0)
console.log(`A quantidade total de produtos é: ${quantidade}`)

const produto = produtos.find(produto => {
    return produto.nome === "Tomate"
})
console.log(produto)

const produto = produtos.find(
    produto => produto.nome === "Tomate"
)
console.log(produto)
