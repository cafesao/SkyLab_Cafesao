<h1 align='center'> Manual do Yarn :star2:</h1>

# **Tabela de conteudo**
- [**Tabela de conteudo**](#tabela-de-conteudo)
  - [Começando...](#come%c3%a7ando)
  - [Inicando Projeto](#inicando-projeto)
  - [Instalando o Babel](#instalando-o-babel)

<div id='começando'></div>

## Começando...

Vamos pelo começo então, como começar a usar o yarn no linux???

Primeiramente devemos adicionar a chave e o repositório no linux, com todo esse comando, so copiar e colar:

```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/source
```

Depois devemos atualizar e instalar o Yarn de fato, bem simples, segue o comando:
```
sudo apt-get update && sudo apt-get install yarn
```

Feito isso, devemos testar no terminar se esta tudom funcionando, por exemplo: `yarn -v`


<div id='projeto'></div>

## Inicando Projeto

Par começar um projeto no yarn, devemos abrir o terminal e ir até a pasta que queremos começar o projeto, com isso vamos colocar o comando: `yarn init`

Com isso ele ira criar o "package.json" que ira armazenar as dependências do projeto.

<div id='babel'></div>

## Instalando o Babel

Par começar um projeto no yarn, devemos abrir o terminal e ir até a pasta que queremos começar o projeto, com isso vamos colocar o comando: `yarn init`

Com isso ele ira criar o "package.json" que ira armazenar as dependências do projeto.