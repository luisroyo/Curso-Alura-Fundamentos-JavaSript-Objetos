const clientes = [
    {
        nome: "Luis",
        cpf: "789654123",
        dependentes: [
            {
                nome: "Miguel",
                parentesco: "filho",
                dataNasc: "01/02/2011"
            },
            {
                nome: "João",
                parentesco: "filho",
                dataNasc: "02/11/2018"
            }],
    },
    {
        nome: "Juliana",
        cpf: "65410654103610",
        dependentes: [{
            nome: "sophia",
            parentesco: "filha",
            dataNasc: "30/08/2017"
        }]
    }];

    const listaDependente=[...clientes[0].dependentes,...clientes[1].dependentes];

    console.table(listaDependente);