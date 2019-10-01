<h1 align='center'> Manual do Yarn :star2:</h1>

# **Tabela de conteudo**
- [**Tabela de conteudo**](#tabela-de-conteudo)
  - [Começando...](#come%c3%a7ando)
  - [Inicando Projeto](#inicando-projeto)
  - [Instalando e configurando o Babel](#instalando-e-configurando-o-babel)
  - [Adicionando o Webpack](#adicionando-o-webpack)
  - [Adicionando Axios](#adicionando-axios)

<div id='começando'></div>

## Começando...

Vamos pelo começo então, como começar a usar o yarn no linux?

Primeiramente devemos adicionar a chave e o repositório no linux, com todo esse comando, so copiar e colar:

```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/source
```

Depois devemos atualizar e instalar o Yarn de fato, bem simples, segue o comando:
```
sudo apt-get update && sudo apt-get install yarn
```

Feito isso, devemos testar no terminar se esta tudo funcionando, por exemplo: `yarn -v`


## Inicando Projeto

Par começar um projeto no yarn, devemos abrir o terminal e ir até a pasta que queremos começar o projeto, com isso vamos colocar o comando: `yarn init`

Com isso ele ira criar o *package.json* que ira armazenar as dependências do projeto.


## Instalando e configurando o Babel

Para instalar o babel ou qualquer outra dependencia, devemos colocar `yarn add ***`
No caso do Babel, vamos começar: 
```
yarn add @babel/cli @babel/preset-env @babel/core babel-loader
```

Depois vamos configurar o babel, crie um arquivo chamado *.babelrc* e colocar dentro
```
{
    "presets" : ["@babel/preset-env"]
}
```
O `preset-env` vai identificar o ambiente que esta trabalhando e converter o .js para a forma que o ambiente entenda, por exemplo, o browser.

Depois entre no *package.json* e crie o seguinte: (Caso você use webpack, pule esta parte!)
```
"scripts": {
    "dev": "babel ./src/main.js -o ./src/bundle.js -w"
}
```

Com isso você cria um script que se chama `dev`, ou seja, quando quisermos executar devemos colocar `yarn dev`, com isso ele executa o babel, ele olha o arquivo *main.js* e cria um arquivo ascessivel para todos os navegadores chamado *bundle.js*.
O `-w` apenas informa que o babel fique monitorando o arquivo *main.js*, assim quando salvar o arquivo ele ja cria o *bundle.js*.


## Adicionando o Webpack

O webpack vai fornecer a opção de trabalhar com varios arquivos *.js* o que facilita bastante o trabalho, então vamos começar.

Não esqueça de criar as pastas *src* e *public*, sendo na pasta *src* colocar todos os *.js* e no *public* os HTML e etc.

Para instalar, devemos colocar no terminal:
```
yarn add webpack webpack-cli webpack-dev-server -D 
```
Com isso, devemos criar o arquivo de configuração do webpack, que se chama *webpack.config.js*, este arquivo ira conter a configuração do webpack, então abra ele e coloque:
```
module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/public', 
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: __dirname + '/public'
    },
    module: {
        rules: [ 
            {
                test: /\.js$/,
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
}
```
Em geral, o arquivo diz que ele vai pegar todos os *.js* e converter para que o browser entenda.

Depois modifique o *package.json* colocando o seguinte:
```
"scripts": {
  "dev": "webpack-dev-server --mode=development"
}
```
Com isso você ira colocar no terminal a mesma coisa `yarn dev` mas ele ira analizar os arquivos *.js* e converter para que o browser entenda, simples assim.
Fora que ele criara um server local, que atualiza conforme atualizamos os arquivos, o que facilita muito.

## Adicionando Axios

Para adicionar o axios devemos colocar no terminal:
```
yarn add axios
```

E então importar para dentro do *.js* colocando:
```
import axios from 'axios'
```

E é isso, super simples.