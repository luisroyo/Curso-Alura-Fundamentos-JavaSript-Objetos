function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function (valor) {
        this.saldo += valor;
    }
}

function ClientePoupana(nome,cpf,email,saldo,saldoPoup){
    Cliente.call(this,nome,cpf,email,saldo);
    this.saldoPoup = saldoPoup;
}

const luis = new ClientePoupana("luis","3254587555","luis.royo",350,390);

console.log(luis);

ClientePoupana.prototype.depositarPoup = function(valor){
    this.saldoPoup+=valor;
}
luis.depositarPoup(60);
console.log(luis.saldoPoup);