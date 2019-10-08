import {procurarMusica, apagarResultado} from './funcoes'

var divResultado = document.querySelector('div#resultado')
var nomeMusica = document.querySelector('input#nomeMusica')
var botao = document.querySelector('button#pesquisar') 

botao.addEventListener("click", Pesquisar)

function Pesquisar (){
    apagarResultado(divResultado)
    procurarMusica(divResultado, nomeMusica.value)
}