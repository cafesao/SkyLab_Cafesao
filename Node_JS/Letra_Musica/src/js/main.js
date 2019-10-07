import {procurarMusica, apagarResultado} from './funcoes'

var divResultado = document.querySelector('div#resultado')
var nomeMusica = document.querySelector('input#nomeMusica')
var botao = document.querySelector('button#pesquisar') 

botao.addEventListener("click", Pesquisar)

function Pesquisar (){
    console.log(nomeMusica.value)
    apagarResultado(divResultado)
    procurarMusica(divResultado, nomeMusica.value)
}