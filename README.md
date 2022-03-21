<h1 align="center">Shot Url Api</h1>

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:  

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/) 
- [Heroku](https://www.heroku.com/)
- [Swagger](https://swagger.io/)

## 👀 Features

As seguintes funcionalidades foram implementadas:

- [x] Encode 
- [x] Decode
- [x] Documentação de API
- [x] Testes unitários

## 🖥 Como testar?

- [Api-Swagger](https://theshort-url.herokuapp.com/swagger/)

 -- Para gerar uma URL encurtada, basta acessar a rota ENCODE, click em Try it Out e informe no body a url de origem.
 
 -- Para retornar uma URL encurtada em URL original, basta acessar a rota DECODE, click em Try it Out e informe no body a url encurtada.
 
 <h1>📱 Como usar?</h1>

### Pré-requisitos

Primeiramente, você precisa ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), o instalador de pacotes [Yarn](https://yarnpkg.com/) e o [Docker](https://www.docker.com/). 
E lógico é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando a aplicação

```bash
# Clone este repositório
$ git clone <https://github.com/caduxl007/the-short-url>

# Após instalar o docker execute no terminal/cmd
$ docker run --name "nome-que-quiser" -e POSTGRES_PASSWORD=docker -p 5434:5432 -d postgres

# Use qualquer gerenciar de banco de dados e crie uma database no postgres:
$ nome da database: short-url
$ port: 5434

# Acesse a pasta do projeto backend no terminal/cmd
$ cd the-short-url

Instale as dependências
$ yarn

# Acesse o arquivo .ENV e configure as variaveis(alguns já estao setados por padrão)

# Execute a aplicação
$ yarn start:dev

## Prontinho você terá acesso a aplicação!!!
```

### 🚀 Rodando os testes

```bash
# Para executar os testes:
$ yarn test

## Prontinho você terá acesso aos testes!!! 
```
