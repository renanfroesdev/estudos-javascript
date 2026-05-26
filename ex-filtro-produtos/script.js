import {produtos} from "./produtos.js"

// Filtrar apenas produtos disponíveis

const produtosDisponiveis = produtos.filter(produto => produto.disponivel);
console.log("------- PRODUTOS DISPONIVEIS --------")
console.log(produtosDisponiveis);
console.log("--------- FIM DO RELATORIO ----------")

// Filtrar produtos acima de R$ 500,00

const produtosCaros = produtos.filter(produto => produto.preco > 500);
console.log("------- PRODUTOS ACIMA DE R$ 500,00 --------")
console.log(produtosCaros)
console.log("--------- FIM DO RELATORIO ----------")

// Filtrar produtos da categoria "Áudio"

const categoriaAudio = produtos.filter(produto => produto.categoria === "Áudio");
console.log("------- PRODUTOS CATEGORIA ÁUDIO --------")
console.log(categoriaAudio)
console.log("------- FIM DO RELATORIO --------")

// Filtrar produtos sem estoque

const produtosZerados = produtos.filter(produto => !produto.disponivel)
console.log("------- PRODUTOS SEM ESTOQUE --------")
console.log(produtosZerados)
console.log("------- FIM DO RELATORIO --------")

// 5. Filtrar produtos com estoque baixo (Menor que 5)

const produtosAcabando = produtos.filter(produto => produto.estoque < 5)
console.log("------- PRODUTOS ACABANDO ou ZERADO  --------")
console.log(produtosAcabando)
console.log("------- FIM DO RELATORIO --------")

// Filtrar produtos entre R$ 100 e R$ 1000

const produtosFiltroPreco = produtos.filter(
    produto => produto.preco >= 100 && produto.preco <= 1000
)
console.log("------- PRODUTOS ENTRE 100 E 1000 --------")
console.log(produtosFiltroPreco)
console.log("------- FIM DO RELATORIO --------")

// Filtrar produtos disponíveis e da Categoria "Periféricos"

const perifericosDisponiveis = produtos.filter(
    produto => produto.disponivel && produto.categoria === "Periféricos"
)
console.log("------- PERIFÉRICOS DISPONIVÉIS --------")
console.log(perifericosDisponiveis)
console.log("------- FIM DO RELATORIO --------")

// Filtrar produtos cujo nome contém "Gammer"

const contemGamer = produtos.filter(produto => produto.nome.includes("Gamer"))
console.log("------- PRODUTOS GAMERS --------")
console.log(contemGamer)
console.log("------- FIM DO RELATORIO --------")

// Filtrar produtos da categoria "Acessórios" com preço menor que R$100

const acessoriosBaratos = produtos.filter(produto => produto.categoria === "Acessórios" && produto.preco < 100)
console.log("------- ACESSÓRIOS BARATOS --------")
console.log(acessoriosBaratos)
console.log("------- FIM DO RELATORIO --------")