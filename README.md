<h1 align="center">
  <img alt="" src=".github/cover-node.js.png">
  
  <br />

  Ignite Journey
</h1>

<p align="center">
  <img alt="Node.js Logo" src="https://img.shields.io/badge/Node.js-LTS-339933?logo=node.js">&nbsp;&nbsp;
   <img alt="GitHub" src="https://img.shields.io/github/license/lemuelZara/concepts-nodejs.svg">
</p>

<br />

## Chapter VI - Desafio 01 - Construindo com serverless

Nesse desafio você irá recriar uma parte da API de *todos* que foi desenvolvida no desafio [Conceitos do Node.js](https://www.notion.so/Desafio-01-Conceitos-do-Node-js-59ccb235aecd43a6a06bf09a24e7ede8) mas dessa vez deverá ser usado o framework [Serverless](https://www.serverless.com/).

<br />

Cada funcionalidade deverá ser criada em um arquivo de função separada de acordo com o que foi visto nesse último módulo.
As rotas que deverão existir são:


- **POST -** `/createTODO/{userid}`

    Essa rota deve receber o `id` de um usuário pelo `pathParameters` (você pode criar esse id manualmente apenas para preencher o campo) e os seguintes campos no corpo da requisição: `title` e `deadline`, onde `deadline` é a data limite para o *todo*.

    O *todo* deverá ser salvo com os seguintes campos no DynamoDB:

    ```
    { 
    	id: 'uuid', // id gerado para garantir um único todo com o mesmo id
    	user_id: 'uuid' // id do usuário recebido no pathParameters
    	title: 'Nome da tarefa',
    	done: false, // iniciado sempre como false
    	deadline: '2021-06-26'
    }
    ```

- **GET -** `/listTODO/{userid}`

    Essa rota deve receber o `id` de um usuário pelo `pathParameters` (o mesmo id que foi usado para criar algum *todo*).

    A rota deve retornar os *todos* que possuírem o `user_id` igual ao `id` recebido pelos parâmetros.

<br />

## 💻 Download, instação de dependências e executação do Projeto
**1.** Clone este repositório 
```
git clone git@github.com:evertonpavan/ignite-challenge-serverless.git

``` 
**2.** Vá até o diretório raiz do projeto
```
cd ignite-challenge-serverless
``` 
**3.** Instale as dependências necessárias
```
yarn install
```
**4.** Crie o arquivo .env (utilizando como exemplo o .env.example)
```
cp .env.example .env
```
**5.** Instale e inicie o dynamoDB
```
serverless dynamodb install
serverless dynamodb start
```
**6.** Execute a aplicação
```
yarn dev
```

<br />

## Usando a Aplicação
Para realização de **requisições** na aplicação, deve ser utilizado o **Insomnia** ou **Postman**, importando o [arquivo](insomnia) de requisições.
