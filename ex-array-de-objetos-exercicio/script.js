const produtos = [
    {
        nome:  "Pastel de carne",
        preco: 12,
        estoque: 10
    },
    {
        nome: "Suco de uva",
        preco: 7,
        estoque: 5
    },
    {
        nome: "Chocolate laka",
        preco: 11,
        estoque: 7
    }
]

produtos.forEach((produto) => {
    console.log(produto.nome);
    console.log(`Preço: R$ ${produto.preco}`);
    console.log(`Qtd Estoque: ${produto.estoque}`);
    console.log("------------")
})