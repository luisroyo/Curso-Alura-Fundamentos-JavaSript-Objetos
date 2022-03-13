const cliente = {
    nome: "Luis",
    idade: 35,
    cpf: "34925836436",
    email: "luis@yahoo.com",
    fones: ["19-96585698", "18-145236958"],
    dependentes: [{
        nome: "Sara",
        parenteso: "filha",
        dataNasc: "20/03/2000"

    }]
}

cliente.dependentes.push({
    nome: "Samaia Maria",
    parenteso: "Filha",
    dataNasc: "04/02/2017"
});

//console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "04/02/2017");

console.log(filhaMaisNova[0].nome);