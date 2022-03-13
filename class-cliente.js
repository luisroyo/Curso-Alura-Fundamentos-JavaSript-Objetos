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

const luis = new Cliente("luis", "luis@royo", "34675911838", 250.75);

luis.exibirSaldo();

console.log(luis);