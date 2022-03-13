

const cliente = {
    nome: "Luis",
    idade: 35,
    cpf: "34925836436",
    email: "luis@yahoo.com"
}
const chaves = ["nome", "idade", "cpf", "email"];

//console.log(cliente[chaves[0]]);

chaves.forEach(info => console.log(cliente[info]));