<h1 align='center'> Manual de JS :star:</h1>

## **Tabela de conteudo**
1. [Função](#Function)
2. [Classe](#classe)
3. [If, else e else if](#If-else-e-else-if)
4. [For](#For)
5. [While, Do while](#while)
6. [Var, Let ou Const](#var)
7. [CreateElement](#createElement)
8. [CreateTextNode](#createTextNode)
9. [SetAttribute](#setAttribute)
10. [AppendChild](#appendChild)
11. [InnerHTML](#innerHTML)
12. [QuerySelector](#querySelector)
13. [Length e Value](#Length)
14. [Arrow Functions](#Arrow)
15. [Axios](#Axios)
16. [LocalStorage](#localStorage)

<div id='Function'></div>

## :heavy_check_mark: Function
### Original
```javascript
function NomeDaFuncao (parametro) {}
```

### Exemplo
```javascript
function somar (a, b) {return a + b}
```

:arrow_forward: A **function** serve para você criar uma função, uma função nada mais é que um conjunto de código que quando chamado deve fazer algo.

1. Não devemos passar vários *parâmetros* para uma função, isso deixa feio e é “anti-clencode”.
2. Não devemos chamar uma função dentro da outra, pelos mesmos motivos.
3. A função só deve fazer uma coisa, e deve fazer isso bem feito: </br>
:small_blue_diamond: **Exemplo** Uma função que soma dois números é melhor que uma função que soma, subtrai, divide, multiplica e etc.
4. A função deve ser escrita em letras minúsculas, mas quando tem duas palavras, a primeira letra da primeira palavra deve ser minúsculo, mas a primeira letra das próximas palavras devem ser em maiúsculo. </br>
:small_blue_diamond: **Exemplo** *limparTela* ou *somarNumerosRomanos*.
5. A função quase sempre precisa de um `return` seja ele vazio ou com algo.

<div id='classe'></div>

## :heavy_check_mark: Classe
### Original
```javascript
class *** {
    constructor() {
        this.*** = ***
    }
    ***() {

    }
}
class *** extends ***{
    constructor() {
        super(***)
        this.*** = ***
    }
    ***() {

    }
}
```

### Exemplo
```javascript
class Pessoa{
    constructor (nome, idade){
        this.nome = nome
        this.idade = idade
    }
    sobre(){
        console.log(`Você é ${this.nome}, e tem ${this.idade} anos.`)
    }
}
class Pessoas extends Pessoa{
    constructor(nome, idade, cidade){
        super(nome, idade)
        this.cidade = cidade
    }
    sobre_local(){
        console.log(super.sobre())
        console.log(`Mora na cidade: ${this.cidade}`)
    }
} 
const joão = new Pessoa ('João', 29)
const pedro = new Pessoas ('Pedro', 49, 'Rio Grande')

joão.sobre()
pedro.sobre_local()
```

:arrow_forward: As famosas e amadas classes, pedimos tanto para vir e chegou com o ES6, vamos começar pelo o que é uma classe. </br>
Classes nada mais é que um "uniforme" que as variaveis vão usar que tem algo em comum, um exemplo e que todas as pessoas são pessoas, então a pessoa esta dentro da classe Pessoa, eles tem caracteriscticas de nome, idade, ..., isso ajuda muito, pois, não precisamos repetir o codigo toda a vez, isso facilita muito.

1. Vamos analizar as classes: </br>
:small_orange_diamond: **class Pessoa{}** Define que é uma classe e o nome, super simples. </br>
:small_orange_diamond: **constructor() {}** Chama o metodo construtor e nele deve passar o que quer que a classe use localmente, seja uma variavel ou algo do tipo, tem que estar atento que precisa **sempre** do `.this`. </br>
:small_orange_diamond: **sobre() {}** Define um metodo com o **nome** e os *parametros*, como se fosse uma função normal. </br>
1. Agora vamos analizar a classe com extensão de outra: </br>
:small_orange_diamond: **class Pessoas extends Pessoa{}** A mesma coisa que uma classe normal, mas, com extensão de outra, todas os metodos, incluindo o construtor. </br>
:small_orange_diamond: **super()** Deve ser sempre a primeira linha do construtor filho e serve para passar as informações para a classe pai, seja as variaveis no caso do `constructor` ou os metodos no caso do `super.sobre()` </br>
3. Para instanciar uma classe, devemos criar uma `const` (**Recomendado**), `var` ou `let`, com o nome e em seguida `new NomeDaClasse`, depois e so chamar o elemento junto com o metodo, igual no `joão.sobre()` ou `pedro.sobre_local()` </br>
4. Para acessar as informações dentro do metodo construtor, devemos colocar `this.***`, assim pode acessar as informações dentro do constructor.

<div id='If-else-e-else-if'></div>

## :heavy_check_mark: If, else e else if
### Original
```javascript
if(parametro ? parametro) {}
```

### Exemplo
```javascript
if(nota == 10) {
    notaExplicação = 'M A R A V I L H O S O'
}
```

:arrow_forward: O **if** serve para verificar a condição, se algo é verdadeiro ou falso, esta condição esta dentro dos `()`, a condição e simples, você faz uma pergunta, se a resposta for verdadeiro, o código de dentro deste `if` e executado, se não, continua o programa e ignora o código dentro.

1. Pode vir acompanhado com seus amigos o `else {}` e o `else if() {}`: </br>
:small_orange_diamond: **else** Serve para que quando for falso ele executa, `else` significa se não, então, caso a condição do `if` for falsa, caso exista um `else`, ele vai ser executado. </br>
:small_orange_diamond: **else if** Tem quase o mesmo objetivo do `else`, só e executado quando o `if` e falso, mas o `else if`, faz uma nova analise na condição, e como se você junstasse o `if` e o `else`, ele so **executa** caso o `if` seja **falso**, se for, ele faz uma nova analise da condição.
1. O `else if`, pode ter seus próprios `else`.
2. Existe vários símbolos que é utilizado para examinar se algo e verdadeiro ou falso, alguns mais utilizados:</br>
:small_blue_diamond: Igual (`==`) </br>
:small_blue_diamond: Não igual (`!=`) </br>
:small_blue_diamond: Estritamente igual (`===`) </br>
:small_blue_diamond: Estritamente não igual (`!==`) </br>
:small_blue_diamond: Maior que (`>`) </br>
:small_blue_diamond: Maior que ou igual (`>=`) </br>
:small_blue_diamond: Menor que (`<`) </br>
:small_blue_diamond: Menor que ou igual (`<=`) </br> </br>
:small_blue_diamond: E os **booleanos** </br>
:small_blue_diamond: AND (&) (`E`) </br>
:small_blue_diamond: OR (|) (`OU`) </br>
:small_blue_diamond: XOR (^) (`OU Exclusivo`) </br>

<div id='For'></div>

## :heavy_check_mark: For
### Original
```javascript
for (*Elemento*; *Comparação*; *adição ou subtração*) {}
```

### Exemplo
```javascript
for(let c = 2; c > 0; c--) {
    console.log(Café e bom!)
}
```

:arrow_forward: E uma repetição com um número limite de vezes, serve mais quando você sabe quantas vezes tem que repetir aquilo.
1. Ele tem três partes, pegando do Exemplo </br>
:small_orange_diamond: **let c = 2** A primeira parte você diz qual variável você quer que ele fique examinando, pode declarar a variável direto no `for`, ele ira declarar apenas uma vez, sem problemas. </br>
:small_orange_diamond: **c > 0** A segunda parte e a condição, ele ira examinar esta condição, se for verdadeiro ele continua, se for falsa ele sai da repetição. </br>
:small_orange_diamond: **c--** A terceira e ultima parte, ele pega esta variável e adiciona ou subtrair algo, se não colocar isso ele irá repetir para sempre, sendo assim a ultima parte serve para adicionar ou retirar algo. </br>
2. O `for` so deve ser usado quando sabemos quantas vezes ele se repete, se não soubermos, devemos usar o `while` ou `do while` que veremos em breve.

<div id='while'></div>

## :heavy_check_mark: While, Do while
### Original
```javascript
while (*comparação*) {}

ou

do {} while (*comparação*)
```

### Exemplo
```javascript
while(a == 0) {
    let a = 2
    console.log(a)
    a -= 1
}

ou

do {
let a = 2
    console.log(a)
    a += 1
} while(a == 0)
```

:arrow_forward: São estruturas de repetição, com o mesmo objetivo do `for`, repetir um trecho de código, mas o `while` e o `do while` tem uma peculiaridade, eles podem repetir indefinidamente até que a condição seja satisfeita (Ou seja se torne falsa), isso e muito útil, para repetir procedimentos que não sabemos quantas vezes precisa. </br>
1. **PRECISAMOS** que a condição seja possível, caso ele nunca seja possível, ele nunca ira parar, e ira virar um loop infinito. </br>
2. O **while** verifica a condição no começo e executa o código, já o **do while**, executa o código e depois verificado a condição.

<div id='var'></div>

## :heavy_check_mark: Var, Let ou Const
### Original
```javascript
var Nome = Algo
let Nome = Algo
const Nome = Algo
```
### Exemplo
```javascript
var Batata = `Batata`
let Frita = `Frita`
const Gostoso = `Gostoso`
```

:arrow_forward: Vamos separar e ver cada um: <br/>
:small_orange_diamond: **var** São simplesmente qualquer coisa, elas existem em todo o escopo do código não importando onde ela e criada, sendo assim e muito útil fora de uma função e etc.<br/>
:small_orange_diamond: **let** Nada mais é que uma variável, mas o diferencial dela e que ela só existe **dentro do escopo** onde foi chamada, por exemplo, dentro de uma função, ela so vai existir dentro desse escopo.<br/>
:small_orange_diamond: **const** É algo que não pode ser mudada, e imutável, diferente do `var` e do `let`, ela e interessante para definir o PI ou para criar objetos. </br>
1. Tem algo interessante das `const`, você não pode mudar o nome do objeto e nem suas propriedades, mas pode mudar o conteúdo destas propriedades, **exemplo**:

```javascript
const Cafe = {nome: "Cafe importado", tipo: "Cafe importado de algum lugar", nota: 8.5}
```

Podemos mudar a *Propriedades*, mas **NÃO** os *Parâmetros* desta forma:
```javascript
Cafe.nome = “Cafe Brasileiro”
```

<div id='createElement'></div>

## :heavy_check_mark: createElement (Elemento)
### Original
```javascript
document.createElement()
```

### Exemplo
```javascript
let aElemento = document.createElement(a)
```

:arrow_forward: Cria um elemento, igual você cria no html, so que via JS, ele pode ser um `<p>`, `<li>`, `<a>` ...

<div id='createTextNode'></div>

## :heavy_check_mark: createTextNode (Texto *ou* `Texto`)
### Original
```javascript
document.createTextNode()
```

### Exemplo
```javascript
let aTexto = document.createTextNode(BatataFrita)
```

:arrow_forward: Cria uma palavra, frase ou texto, que depois deve ser acoplado em um elemento `<p>`, `<li>`, `<a>` ... </br>
Deve ser acompanhado de uma **variável**.

<div id='setAttribute'></div>

## :heavy_check_mark: *Elemento*.setAttribute (`Atributo`, Algo)
### Original
```javascript
***.setAttribute()
```

### Exemplo
```javascript
aElemento.setAttribute(`href`, `http://batatafrita.com.br`)
```

:arrow_forward: Você adiciona um atributo dentro de um elemento, um atributo tipo ID, Class e etc, e um elemento como `<p>`, `<li>`, `<a>` ...

<div id='appendChild'></div>

## :heavy_check_mark: *Elemento*.appendChild (Elemento)
### Original
```javascript
***.appendChild(***)
```

### Exemplo
```javascript
aElemento.appendChild(aTexto)
```

:arrow_forward: Ele serve para você juntar uma coisa na outra, o primeiro e pai do segundo parâmetro, ou seja, no exemplo, `aTexto` é **filho** de `aElemento`.

<div id='innerHTML'></div>

## :heavy_check_mark: *Elemento*.innerHTML (``)
### Original
```javascript
***.innerHTML()
```

### Exemplo
```javascript
aElemento.innerHTML('Prefiro cafe') ou (')
```

:arrow_forward: Serve para escrever com e sobre o html, ou seja, se você quiser, pode escrever todo o código html com este método, é mais utilizado para apagar o conteúdo do html.

<div id='querySelector'></div>

## :heavy_check_mark: document.querySelector(``)
### Original
```javascript
*elemento* = document.querySelector('')
```

### Exemplo
```javascript
inputUser = document.querySelector('input#usuario')
```

:arrow_forward: Ele coloca o conteúdo de algo do arquivo HTML para dentro de uma variável, o **querySelector** e uma forma nova de selecionar os ID,Class,Elementos...
1. Dentro do `('')` ele usa a mesma sintaxe do CSS, então no exemplo, colocando `'input#usuario'` você seleciona o `<input>` com o `<id=`usuario`>`.
2. Também pode selecionar apenas o `id`, não importando se for `<input>`, `<div>`, `<p>`..., mas não aconselho, e melhor colocar o caminho.

<div id='Length'></div>

## :heavy_check_mark: Length e Value
### Original
```javascript
***.length
ou
***.value
```

### Exemplo
```javascript
let batata = 'Batata é bom'
console.log(batata.length)

ou

let nota = 6
console.log(nota.value)
```

:arrow_forward: Vamos por partes: </br>
:small_orange_diamond: **length** Serve para retornar o tamanho de algo, seja dos caracteres de uma frase ou o tamanho de uma lista ou algo do tipo. </br>
:small_orange_diamond: **value** Retorna um `Number` em vez de uma string, isto é útil quando queremos o conteúdo de um `<input>` ou algo assim, ele invés de retornar uma `string` contendo o numero, com o **value**, ele retorna o valor de dentro desta `string`.

<div id='Arrow'></div>

## :heavy_check_mark: Arrow Functions =>
### Original
```javascript
() => {}

OU

() => ***
```

### Exemplo
```javascript
CriarPessoa((idade) => {
    const Pessoa = {
    nome: 'Gabriel',
    idade
}
    console.log(Pessoa)
})
```

:arrow_forward: As queridas **arrow functions** funcionam da mesma forma que você colocar `function()`, algumas **funções** + **métodos**, pedem uma função anonima, e em vez de, você colocar `function()`, você deve colocar `() => {}`.
1. Esse tipo, e dividido da seguinte maneira: </br>
:small_orange_diamond: `()` Esta parte recebe os parâmetros, igual na função anonima. </br>
:small_orange_diamond: `=>` O simbolo de igual + simbolo de maior, chama a função anonima, da mesma forma que se fizesse `function()` </br>
:small_orange_diamond: `{}` Isto e interessante, caso o seu código tenha apenas uma linha, seja um `return` ou um `console.log` por exemplo, não precisa usar chave, só colocar do lado do `=>`, agora se tiver mais linhas, precisa usar as chaves `{}` </br>

<div id='Axios'></div>

## :heavy_check_mark: Axios
### Original
```javascript
axios.Metodo('url')
    .then ((response) => {
        ***
    })
    .catch ((error) => {
        ***
    })
```

### Exemplo
```javascript
axios.get(`https://api.github.com/users/cafesao/repos`)
    .then ((response) => {
        let tamanhoLista = response.data.length
        usuario.value = ``
        if (tamanhoLista == 0){
            console.log('Sem repositório!')
        }
        for(let cont = 0; cont <= tamanhoLista; cont++){
            var nameLista = response.data[cont].name
            var link = response.data[cont].html_url
            console.log('Nome do repositório ${nameLista}')
            console.log('URL: ${link}')
        }
    })
    .catch ((error) => {
        if(error == 'Error: Request failed with status code 404'){
            console.log('Erro 404 - Não existe este USER')
        }
    })
```

:arrow_forward: O axios e uma forma de eviar as **Promise**, o axios agiliza isso de forma rápida e menos verbosa, isso torna o desenvolvimento muito mais **rápido**, existe varias formas e vários métodos, como o `.get`, `.push` e etc. </br>
1. O axios, acompanha um **metodo** + *parâmetro* (Quase sempre uma URL), junto temos o: </br>
:small_orange_diamond: **.then** Caso tudo ocorra como o esperado a url retorne algo valido. </br>
:small_orange_diamond: **.catch** Se algo der errado, retorna um erro, igual nas Promise. </br>
2. O **.then** e o **.catch** precisam de uma função anonima(as `function()`), mas, conforme o ES6, você pode usar um *Arrow functions* `(*Parâmetro*) => {**Código**}`.

<div id='localStorage'></div>

## :heavy_check_mark: Local Storage
### Original
```javascript
JSON.parse(localStorage.getItem('***'))

OU

localStorage.setItem('***', JSON.stringify(***))
```

### Exemplo
```javascript
var lista_todos = ['Café', 'Maça', 'Abacaxi']
localStorage.setItem('lista_storage', JSON.stringify(lista_todos))
JSON.parse(localStorage.getItem('lista_storage')) || []
```

:arrow_forward: Algo curioso e o localStorage, ele é um tipo de banco da dados interno, tem capacidade de armazenar *chave* + **valor**, e pode fechar o browser, reinicar o computador e etc, e mesmo assim, ainda vai existir esses dados, a menos que, algo apague.

1. Vamos explicar os dois comandos:</br>
:small_orange_diamond: **.setItem** Pega as informações que esta dentro dos parenteses e envia para dentro deste banco de dados, detalhe, tem que ser um **JSON**. </br>
Dentro temos o primeiro *parametro* `'***'`, que e o nome deste banco de dados, e em seguida o objeto, lista... que queremos enviar.</br>
:small_orange_diamond: **getItem** Ele pega o que esta dentro do banco de dados e coloca dentro de um Objeto, detalhe, ele tem que ser convetido para **Objeto**. </br>
Dentro temos apenas um *parametro* que é o nome do banco de dados que queremos pegar as informações.</br>
2. O JS oferece dois tipos de conversão, de JSON para Objeto e Objeto para JSON, são elas:</br>
:small_orange_diamond: **JSON.stringify()** Que converte um objeto, lista... em um JSON.</br>
:small_orange_diamond: **JSON.parse()** Ele converte um JSON em um objeto.</br>

