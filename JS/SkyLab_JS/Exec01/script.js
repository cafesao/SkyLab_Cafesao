function checaIdade(){
    var inputIdade = document.querySelector('input#idade').value
    if (inputIdade > 18) {
        return console.log('Maior de 18 Anos')
    } else {
        return console.log('Menor de 18')
    }
}