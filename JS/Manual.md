<h1  align='center'> Manual de algumas coisas do JS :star:</h1>

## **Tabela de conteudo**
1. [Função](#function)
2. [If, else e else if](#if-else-e-else-if)
3. [For](#for)
4. [While, Do while](#while-do-while)
5. [Var, Let ou Const](#var-let-ou-const)
6. [CreateElement](#createelement-elemento)
7. [CreateTextNode](#createtextnode-texto-ou-texto)
8. [SetAttribute](#elementosetattribute-atributo-algo)
9. [AppendChild](#elementoappendchild-elemento)
10. [InnerHTML](#elementoinnerhtml)
11. [QuerySelector](#documentqueryselector)
12. [Length e Value](#length-e-value)


## :heavy_check_mark: Function
### Original: 
```javascript
function NomeDaFunção (parametro) {} 
```

### Exemplo:
```javascript
function somar (a, b) {return a + b}
```

:arrow_forward: A **function** serve para você criar uma função, uma função nada mais é que um conjunto de código que quando chamado deve fazer algo.

1. Não devemos passar vários *parâmetros* para uma função, isso deixa feio e é “anti-clencode”.
2. Não devemos chamar uma função dentro da outra, pelos mesmos motivos.
3. A função só deve fazer uma coisa, e deve fazer isso bem feito, **exemplo:** Uma função que soma dois números é melhor que uma função que soma, subtrai, divide, multiplica e etc.
4. A função deve ser escrita em letras minúsculas, mas quando tem duas palavras, a primeira letra da primeira palavra deve ser minúsculo, mas a primeira letra das próximas palavras devem ser em maiúsculo, **exemplo:** *limparTela* ou *somarNumerosRomanos*.
5. A função quase sempre precisa de um return seja ele vazio ou com algo.

## :heavy_check_mark: If, else e else if
### Original:
```javascript
if(parametro ? parametro) {}
```

### Exemplo:
```javascript
if(nota == 10) {notaExplicação = 'M A R A V I L H O S O'}
```

:arrow_forward **if** serve para verificar a condição, se algo e verdadeiro ou falso, esta condição esta dentro dos (), a condição e simples, você faz uma pergunta, se a resposta for verdadeiro, o codigo de dentro deste if e executado, se não, continua o programa e ignora o codigo dentro.

1. O if pode vir acompanhado com seus amigos o else{} e o else if() {}: </br>
:small_orange_diamond: **else** = Serve para que quando for falso ele executa, else signfica se não, então, caso a condição do if for falsa, caso exista um else, ele vai ser executado.
:small_orange_diamond: **else if** = O else if tem quase o mesmo objetivo do else, so e executado quando o if e falso, mas o else if, faz uma novo exame em uma condição, e como se você junstasse o if e o else, ele so **executa** caso o if seja **falso**, se for, ele faz uma nova analise da condição.
2. O else if, pode ter seus proprios else.
3. Existe varios simbolos que é utilizado para examinar se algo e verdadeiro ou falso, alguns mais utilizados:  
   </br>
   :small_blue_diamond: Igual (==) </br>
   :small_blue_diamond: Não igual (!=) </br>
   :small_blue_diamond: Estritamente igual (===) </br>
   :small_blue_diamond: Estritamente não igual (!==) </br>
   :small_blue_diamond: Maior que (>) </br>
   :small_blue_diamond: Maior que ou igual (>=) </br>
   :small_blue_diamond: Menor que (<) </br>
   :small_blue_diamond: Menor que ou igual (<=) </br>
   :small_blue_diamond: E os **booleanos:** </br>
   :small_blue_diamond: AND (&) (E) </br>
   :small_blue_diamond: OR (|) (OU) </br>
   :small_blue_diamond: XOR (^) (OU Exclusivo) </br>


## :heavy_check_mark: For
### Original:
```javascript
for (*Elemento*; *Comparação*; *adição ou subtração*) {}
```

### Exemplo:
```javascript
for(let c = 2; c > 0; c--) { console.log(Café e bom!) }
```

:arrow_forward: E uma repetição com um numero limite de vezes, serve mais quando você sabe quantas vezes tem que repetir aquilo.
Ele tem três partes, pegando do exemplo:
:small_orange_diamond: **let c = 2** = A primeira parte você diz qual variavel você quer que ele fique examinando, pode declarar a variavel direto no for, ele ira declarar apenas uma vez, sem problemas. </br>
:small_orange_diamond: **c > 0** = A segunda parte e a condição, ele ira examinar esta condição, se for verdadeiro ele continua, se for falsa ele sai da repetição. </br>
:small_orange_diamond: **c--** = A terceira e ultima parte, ele pega esta variavel e adiciona ou subtrair algo, por quê pensa, se não tivesse isso, ele repetirar para sempre, sendo assim a ultima parte serve para adicionar ou retirar algo. </br>
1. O for so deve ser usado quando sabemos quantas vezes ele se repete, se não soubermos, devemos usar o while que veremos em breve.


## :heavy_check_mark: While, Do while
### Original:
```javascript
while (*comparação*) {}

ou

do {} while (*comparação*)
```

### Exemplo:
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

:arrow_forward: São estruturas de repetição, com o mesmo objetivo do for, repetir um trecho de codigo, mas o while e o do while tem uma pecularidade, eles podem repetir indefinidamente até que a condição seja satisfeita (Ou seja se torne falsa), isso e muito util, para repetir procedimentos que não sabemos quantas vezes precisa
1. **PRECISAMOS** que a condição seja possivel, caso ele nunca seja possivel, ele nunca ira parar, e ira virar um loop infinito.
2. O **while** verifica a condição no começo e executa o codigo, ja o **do while**, executa o codigo e depois verificado a condição.
   

## :heavy_check_mark: Var, Let ou Const
### Original:
```javascript
var Nome = Algo 
let Nome = Algo
const Nome = Algo
```
### Exemplo:
```javascript
var Batata = 'Batata'
let Frita = 'Frita'
const Gostoso = 'Gostoso'
```


:arrow_forward: Vamos separar e ver cada um: <br/>
:small_orange_diamond: **var** = Variáveis e simplesmente qualquer coisa, ela existe em todo o escopo do código não importando onde ela e criada, sendo assim e muito útil fora de uma função e etc.<br/>
:small_orange_diamond: **let** = Let nada mais é que uma variavel, mas o diferencial dela e que ela só existe dentro do 	escopo onde foi chamada, por exemplo, dentro de uma função, ela so vai existir dentro desse escopo.<br/>
:small_orange_diamond: **const** = Constante, e algo que é sempre assim, não pode ser mudada, e imutável, diferente do var e do let, ela e interessante para definir o PI ou para criar objetos, tem uma curiosidade, você não pode mudar o nome do objeto e nem suas propriedades, mas pode mudar o conteúdo destas propriedades, **exemplo**: 

```javascript
const Cafe = {nome: "Cafe importado", tipo: "Cafe importado de algum lugar", nota: 8.5}
```

Podemos mudar a *Propriedades* mas **NÃO** o *Parâmetros* desta forma: 
```javascript
Cafe.nome = “Cafe Brasileiro”
```


## :heavy_check_mark: createElement (Elemento)
### Original:
```javascript
document.createElement()
```

### Exemplo:
```javascript
let aElemento = document.createElement(a)
```

:arrow_forward: Cria um elemento, igual você cria no html, so que via JS, ele pode ser um p, li, a, ... 


## :heavy_check_mark: createTextNode (Texto *ou* 'Texto')
### Original:
```javascript
document.createTextNode()
```

### Exemplo:
```javascript
let aTexto = document.createTextNode(BatataFrita)
```

:arrow_forward: Cria uma palavra, frase ou texto, que depois deve ser acoplado em um elemento p, li, a, ... 
Deve ser acompanhado de uma **variavel**


## :heavy_check_mark: *Elemento*.setAttribute ('Atributo', Algo)
### Original:
```javascript
***.setAttribute()
```

### Exemplo:
```javascript
aElemento.setAttribute('href', 'http://batatafrita.com.br')
```

:arrow_forward: Você adiciona um atributo dentro de um elemento, um atributo tipo ID, Class e etc, e um elemento como p, li, a...


## :heavy_check_mark: *Elemento*.appendChild (Elemento)
### Original:
```javascript
***.appendChild(***)
```

### Exemplo:
```javascript
aElemento.appendChild(aTexto)
```

:arrow_forward: Ele serve para você juntar uma coisa na outra, o primeiro e pai do segundo parametro, ou seja, no exemplo, aTexto e **filho** de aElemento.


##  :heavy_check_mark: *Elemento*.innerHTML ('')
### Original:
```javascript
***.innerHTML()
```

### Exemplo:
```javascript
aElemento.innerHTML('Prefiço cafe') ou ('')
```

:arrow_forward: Serve para escrever com e sobre o html, ou seja, se você quiser pode escrever todo o codigo html com este metodo é mais utilizado para apagar o html.


## :heavy_check_mark: document.querySelector('')
### Original:
```javascript
*elemento* = document.querySelector('')
```

### Exemplo:
```javascript
inputUser = document.querySelector('input#usuario')
```

:arrow_forward: Ele coloca o conteudo de algo do arquivo HTML para dentro de uma variavel, o **querySelector** e uma forma nova de selecionar os ID,Class,Elementos...
1. Dentro do ('') ele usa a mesma sintaxe do CSS então colocando *'input#usuario'* você seleciona o input com o id usuario.
2. Também pode selecionar apenas o id, não importando se for input, div, p..., mas não aconselho, e melhor colocar o caminho.


## :heavy_check_mark: Length e Value
### Original:
```javascript
***.length
ou
***.value
```

### Exemplo:
```javascript
let batata = 'Batata é bom'
batata.length

ou

let nota = 6
nota.value
```

:arrow_forward: Vamos por partes: </br>
:small_orange_diamond: **length** = Serve para retornar o tamanho de algo, seja dos caracteres de uma frase ou o tamanho de uma lista ou algo do tipo. </br>
:small_orange_diamond: **value** = A principal função e retornar um Number em vez de uma string, isso e util quando queremos o conteudo de um Input ou algo assim, ele invez de retornar uma string contendo o numero, com o **value**, ele retorna o valor de dentro desta string.

