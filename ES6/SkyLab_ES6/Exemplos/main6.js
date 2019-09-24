//Rest Com Objeto

const usuario = {
    nome: 'Gabriel',
    idade: 19,
    empresa: 'SeaFox Line'
}

const {nome, ...resto } = usuario

console.log(`Rest com Objetos: ${nome}`)
console.log(resto)


//Rest Com Array

const ary = [1,2,3,4,5]

const [ a, b, ...c ] = ary

console.log(`Rest com Array: ${a, b, c}`)


//Rest com Funções

function soma(...parametros) {
    return parametros.reduce((total, next) => total + next)
}

console.log(`Rest com funções: ${soma(1,2,3)}`)