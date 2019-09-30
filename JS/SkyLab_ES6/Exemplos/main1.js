class List {
    constructor(){
        this.data = []
    }

    add(Inputdata){
        this.data.push(Inputdata)
        console.log(this.data)
    }
}

class TodoList extends List {
    constructor(){
        super()
        this.usuario = 'Gabriel'
    }

    mostraUsuario(){
        console.log(this.usuario)
    }

}

const MinhaLista = new TodoList()

document.querySelector('#novotodo').onclick = () => MinhaLista.add('Novo Todo')

MinhaLista.mostraUsuario()