// Modulos
import {apagarResultado, apiCep, apiRua} from "./funcoes"

// Variaveis
var inputCep = document.querySelector('input#cep')
var inputRua = document.querySelector('input#rua')
var inputCidade = document.querySelector('input#cidade')
var inputEstado = document.querySelector('input#estado')
var botaoResultadoCep = document.querySelector('button#resultadoCep')
var botaoResultadoRua = document.querySelector('button#resultadoRua')
var div = document.querySelector('div#resultado')
botaoResultadoCep.addEventListener("click", verificarCep)
botaoResultadoRua.addEventListener("click", verificarRua)


// Funções
function verificarCep(){
    if (inputCep.value.length != 8){
        alert('[Erro] Verifique o CEP e tente novamente!')
    }
    else{
        apagarResultado(div)
        apiCep(inputCep.value, div)
        inputCep.value = ''
    }
}

function verificarRua(){
    if (inputEstado.value.length != 2){
        alert('[Erro] Verifique o Estado e tente novamente!')
        console.warn('[Erro] O estado esta incorreto, por favor, corrija!')
    }
    else{
        apagarResultado(div)
        apiRua(inputEstado.value, inputCidade.value, inputRua.value, div)
        inputRua.value = ''
        inputCidade.value = ''
        inputEstado.value = ''
    }
}