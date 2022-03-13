class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    exibirSaldo() {
        console.log(`Saldo Bancário: R$ ${this.saldo}`);
    }
}

class ClientePoupanca extends Cliente {
    constructor(nome, email, cpf, saldo, saldoPoupanca) {
        super(nome, email, cpf, saldo);
        this.saldoPoupanca = saldoPoupanca;
    }
    depositarPoupanca(valor) {
        this.saldoPoupanca += valor;
    }
}
const luis = new ClientePoupanca("luis", "luis@royo", "34675911838", 100,150);
console.log(luis);

luis.depositar(50);
luis.depositarPoupanca(100);

console.log(luis);