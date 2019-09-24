//SPREAD com array

const ary1 = [1, 2, 3]
const ary2 = [4, 5, 6]

const ary3 = [ ...ary1, ...ary2 ]
console.log(`Junção de 2 arrays: ${ary3}`)

//SPREAD com objetos

const usuario1 = {
    nome: 'Gabriel',
    idade: 19,
    empresa: 'SeaFox Line'
}

const usuario2 = { ...usuario1, nome: 'Pedro' }

console.log('Substituindo informação com Spread')
console.log(usuario2)