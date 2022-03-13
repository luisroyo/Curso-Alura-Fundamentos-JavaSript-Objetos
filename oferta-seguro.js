const cliente = {
    nome: "Luis",
    idade: 35,
    cpf: "34925836436",
    email: "luis@yahoo.com",
    fones: ["19-96585698", "18-145236958"],
    dependentes: [
        {
            nome: "Sara",
            parenteso: "filha",
            dataNasc: "20/03/2000"
        },
        {
            nome: "Samaia Maria",
            parenteso: "Filha",
            dataNasc: "04/02/2017"
        }
    ],
    saldo: 100.00,
    depositar: function (valor) {
        this.saldo += valor;
    }
}

function oferecerSeguro(obj) {
    const proposClientes = Object.keys(obj);
    if (proposClientes.includes("dependentes")) {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    } 
}

console.log(Object.values(cliente));
console.log(Object.entries(cliente));
oferecerSeguro(cliente);