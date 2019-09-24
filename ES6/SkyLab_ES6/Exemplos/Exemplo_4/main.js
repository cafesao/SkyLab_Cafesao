import api from './api'

class App{
    constructor(){
        this.repositorio = []
        this.inputEl = document.querySelector('input[name = repositorio]')
        this.formEl = document.querySelector('#repo-form')
        this.listEl = document.querySelector('#repo-list')
        this.registrarEventos()
    }

    setCarregando(carregando = true){
        if(carregando === true){
            let carregandoEl = document.createElement('span')
            carregandoEl.appendChild(document.createTextNode('Carregando...'))
            carregandoEl.setAttribute('id', 'carregando')

            this.formEl.appendChild(carregandoEl)
        } 
        else{
            document.querySelector('#carregando').remove()
        }
    }

    registrarEventos(){
        this.formEl.onsubmit = event => this.addRepositorio(event)
    }

    async addRepositorio(event){
        event.preventDefault()

        const repoInput = this.inputEl.value

        if(repoInput.length === 0) {return}
        this.setCarregando()

        try{
            const response = await api.get(`/repos/${repoInput}`)

            const { name, description, html_url, owner: { avatar_url } } = response.data
            

            this.repositorio.push({
                name,
                description,
                avatar_url, 
                html_url
            })

            this.inputEl.value = ''

            this.render()
        }   
        catch{
            alert('[ERRO] Repositório não encontrado!')
        }

        this.setCarregando(false)
    }
    render(){
        this.listEl.innerHTML = ''
        this.repositorio.forEach(repo => {
            let imgEl = document.createElement('img')
            imgEl.setAttribute('src', repo.avatar_url)

            let titleEl = document.createElement('strong')
            titleEl.appendChild(document.createTextNode(repo.name))

            let descriptionEl = document.createElement('p')
            descriptionEl.appendChild(document.createTextNode(repo.description))

            let linkEl = document.createElement('a')
            linkEl.setAttribute('target', '_blank')
            linkEl.setAttribute('href', repo.html_url)
            linkEl.appendChild(document.createTextNode('Acessar'))

            let listItemEl = document.createElement('li')

            listItemEl.appendChild(imgEl)
            listItemEl.appendChild(titleEl)
            listItemEl.appendChild(descriptionEl)
            listItemEl.appendChild(linkEl)

            this.listEl.appendChild(listItemEl)
        })
    }
}

new App()