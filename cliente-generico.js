function Cliente(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function (valor) {
        this.saldo += valor;
    }
}
const luis = new Cliente("Luis","34675911838","luis@royo",350);

console.log(luis);
