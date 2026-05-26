const cliente = {
    nome: "Jefersom",
    idade: 25,
    saldo: 1500
}

console.log("Dados do cliente: ");
console.log(`Nome: ${cliente.nome}`);
console.log(`Idade: ${cliente.idade}`);
console.log(`Saldo: ${cliente.saldo}`);

cliente.saldo = 3000
cliente.status = "vip"

console.log('**** Dados Alterados! ****')
console.log(`Saldo: ${cliente.saldo}`);
console.log(`Status: ${cliente.status}`);


