class funArray{
    constructor(){
        this.numeros = [1,3,5,6,8,9]
    }
    mapear() {
        let newNumeros = this.numeros.map((item, index) => item + index)
        return newNumeros
    }
    reduzir(){
        let soma = this.numeros.reduce((total, next)  => total + next)
        return soma
    }
    filtrar(){
        let filtro = this.numeros.filter(item => item % 2 === 0)
        return filtro
    }
    procurar(x){
        let find = this.numeros.find(item  => item === x)
        
        if (find === x){
            return find
        } else{
            return 'Não contem o numero'
        }
    }
}

const array = new funArray()
console.log(`Array com os itens + index: ${array.mapear()}`)
console.log(`Array reduzido em uma variavel: ${array.reduzir()}`)
console.log(`Array filtrando os numeros pares: ${array.filtrar()}`)
console.log(`Array procurando um numero: ${array.procurar(3)}`)