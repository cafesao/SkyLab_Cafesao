import axios from 'axios'
export {apagarResultado, apiCep, apiRua}
const arrayCep = {
    cep: '',
    rua: '',
    bairro: '',
    cidade: '',
    estado: ''
}
const arrayRua = {
    cep: '',
    rua: '',
    bairro: '',
    cidade: '',
    estado: ''
}

async function apiCep(cepInput, div) {
    try {
        carregando(true, div)
        const cepAxios = await axios.get(`https://viacep.com.br/ws/${cepInput}/json/`)
        const { cep, logradouro, bairro, localidade, uf, erro } = cepAxios.data
        arrayCep.cep = cep
        arrayCep.rua =  logradouro
        arrayCep.bairro = bairro
        arrayCep.cidade = localidade
        arrayCep.estado = uf
        arrayCep.erro = erro
        carregando(false, div)
        if (arrayCep.erro == true){
            erroCep(div)
        }
        else{
            adicionarResultadoCep(div)
        }
    }
    catch{}
}

async function apiRua(estado, cidade, rua, div) {
    try{
        carregando(true, div)
        const ruaAxios = await axios.get(`https://viacep.com.br/ws/${estado}/${cidade}/${rua}/json/`)
        const { cep, erro, logradouro, localidade, bairro, uf } = ruaAxios.data[0]
        arrayRua.cep = cep
        arrayRua.erro = erro
        arrayRua.rua = logradouro
        arrayRua.cidade = localidade
        arrayRua.bairro = bairro
        arrayRua.estado = uf

        carregando(false, div)
        if (arrayRua.erro == true){
            erroCep(div)
        }
        else {
            adicionarResultadoRua(div)
        }
    }
    catch(error){
        carregando(false, div)
        alert('[ERRO] Endereço não encontrado!')
        console.warn(error)
    }
}

function erroCep(div){
    let erroElemento = document.createElement('h2')
    let erroTexto = document.createTextNode('O Cep não foi encontrado, tente novamente!')
    erroElemento.appendChild(erroTexto)
    div.appendChild(erroElemento)
    console.warn('[Erro] Cep não encontrado')
}

function adicionarResultadoCep(div) {
    let cepElemento = document.createElement('p')
    let ruaElemento = document.createElement('p')
    let bairroElemento = document.createElement('p')  
    let cidadeElemento = document.createElement('p')    
    let estadoElemento = document.createElement('p')
    
    let cepTexto = document.createTextNode(`CEP: ${arrayCep.cep}`)
    let ruaTexto = document.createTextNode(`Rua: ${arrayCep.rua}`)
    let bairroTexto = document.createTextNode(`Bairro: ${arrayCep.bairro}`) 
    let cidadeTexto = document.createTextNode(`Cidade: ${arrayCep.cidade}`)
    let estadoTexto = document.createTextNode(`Estado: ${arrayCep.estado}`) 

    cepElemento.appendChild(cepTexto)
    ruaElemento.appendChild(ruaTexto)
    bairroElemento.appendChild(estadoTexto)
    cidadeElemento.appendChild(bairroTexto)
    estadoElemento.appendChild(cidadeTexto)

    div.appendChild(cepElemento)
    div.appendChild(ruaElemento)
    div.appendChild(bairroElemento)
    div.appendChild(cidadeElemento)
    div.appendChild(estadoElemento)
}

function adicionarResultadoRua(div){
    let cepElemento = document.createElement('p')
    let ruaElemento = document.createElement('p')
    let bairroElemento = document.createElement('p')  
    let cidadeElemento = document.createElement('p')    
    let estadoElemento = document.createElement('p')  

    let cepTexto = document.createTextNode(`CEP: ${arrayRua.cep}`)
    let ruaTexto = document.createTextNode(`Rua: ${arrayRua.rua}`)
    let bairroTexto = document.createTextNode(`Bairro: ${arrayRua.bairro}`) 
    let cidadeTexto = document.createTextNode(`Cidade: ${arrayRua.cidade}`)
    let estadoTexto = document.createTextNode(`Estado: ${arrayRua.estado}`) 

    cepElemento.appendChild(cepTexto)
    ruaElemento.appendChild(ruaTexto)
    bairroElemento.appendChild(estadoTexto)
    cidadeElemento.appendChild(bairroTexto)
    estadoElemento.appendChild(cidadeTexto)

    div.appendChild(cepElemento)
    div.appendChild(ruaElemento)
    div.appendChild(bairroElemento)
    div.appendChild(cidadeElemento)
    div.appendChild(estadoElemento)
}

function apagarResultado(div) {
    div.innerHTML = ''
}

function carregando(carregando = true, div) {
    if(carregando == true){
        let carregandoElemento = document.createElement('p')
        let carregandoTexto = document.createTextNode('Carregando...')
        carregandoElemento.setAttribute('id', 'carregando')
        carregandoElemento.appendChild(carregandoTexto)
        div.appendChild(carregandoElemento)
    }
    else{
        document.querySelector('#carregando').remove()
    }
}

