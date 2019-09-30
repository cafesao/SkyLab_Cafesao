
const usuario = {
    nome: 'Gabriel',
    idade: 19,
    endereco: {
        cidade: 'Navegantes',
        estado: 'SC'
    }
}

const {nome, idade, endereco: {cidade}} = usuario             //Em const

//Ou

/*function mostraNome({ nome, idade, endereco:{cidade} }){   //Em Funções 
    console.log(nome, idade, cidade)
} */

console.log(nome, idade, cidade)