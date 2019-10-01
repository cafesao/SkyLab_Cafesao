// Modulos
import {apagarResultado, api} from "./funcoes"

// Variaveis
var input = document.querySelector('input#cep')
var botaoResultado = document.querySelector('button#resultado')
var div = document.querySelector('div#resultado')
botaoResultado.addEventListener("click", verificar)

// Funções
function verificar(){
    if (input.value.length < 8){
        alert('[Erro] Verifique o CEP e tente novamente!')
    }
    else{
        apagarResultado(div)
        api(input.value, div)
    }
}