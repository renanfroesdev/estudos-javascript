const produtos = ["laranja", "abacaxi", "uva", "limão", "pera"];

// mostre o primeiro
console.log(`O primeiro produto é: ${produtos[0]}`);

// mostre o último
console.log(`O último produto é: ${produtos[produtos.length - 1]}`);

// adicione mais um 
produtos.push("melão");
console.log(`Produto adicionado, agora o último produto é ${produtos[produtos.length - 1]}`);

// moste quantos produtos existem
console.log(`A quantidade total de produtos é: ${produtos.length}`);