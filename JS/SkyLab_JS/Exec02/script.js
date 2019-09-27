usuario.addEventListener("keydown", function (e) { //Adiciona a função de quando aperta enter algo acontece
    if (e.keyCode === 13) { 
        pesquisar()
    }
})



function pesquisar(){
    var usuario = document.querySelector('input#usuario')
    var lista = document.querySelector('ul')
    url = `https://api.github.com/users/${usuario.value}/repos`

    if(usuario.value == ''){
        alert('Por favor, digite algo!')
    }
    else{
        function renderizarLI(name, link){
            let liElemento = document.createElement('li')
            let liTexto = document.createTextNode(name)
            let aElemento = document.createElement('a')
            let aTexto = document.createTextNode('Link')
            aElemento.setAttribute('href', link)
            liElemento.appendChild(liTexto)
            aElemento.appendChild(aTexto)
            liElemento.appendChild(aElemento)
            lista.appendChild(liElemento)
        }
        function renderizarLISemLink(name){
            let liElemento = document.createElement('li')
            let liTexto = document.createTextNode(name)
            liElemento.appendChild(liTexto)
            lista.appendChild(liElemento)
        }
    
        function apagarUL(){
            lista.innerHTML = ''
        }
    
        apagarUL()
        renderizarLISemLink('Carregando...')
    
        axios.get(url)
            .then ((response) => {
                apagarUL()
                let tamanhoLista = response.data.length
                usuario.value = ''
                if (tamanhoLista == 0){
                    renderizarLISemLink('Sem repositório!')
                }
                for(let cont = 0; cont <= tamanhoLista; cont++){
                    var nameLista = response.data[cont].name
                    var link = response.data[cont].html_url
                    renderizarLI(nameLista, link)
                }
            })
            .catch((error) => {
                if(error == 'Error: Request failed with status code 404'){
                    apagarUL()
                    renderizarLI('Erro 404 - Não existe este USER')
                }
            })
    }
}