# Front end
react native
typescript
redux
axios
material ui, styled components

**Figma:** https://www.figma.com/file/Y0stcEHgjbWzaoZvkTNHew/full-stack-1---front-end-base?node-id=0%3A1&t=4jGAleR6Mvu7N6aw-0

# Backend
node express
prisma
postgreSQL


# DevTechCenter
>Uma aplicação fullstack contendo back e front end em duas pastas separadas dentro do projeto, a aplicação tem como função ser uma lista de tecnologias simples para exercitar varios conceitos e tecnologias de desenvolvimento front e back end, como componentização, authenticação, redux, react-router-dom e ORM com prisma.

## Tecnologias Usadas
Backend:
- typescript
- javascript
- node.js 
- express
- prisma
- jwt
- bcrypt
- banco de dados relacional em PostgreSQL

Frontend:
- framework react
- typescript
- javascript
- css
- html
- material-ui, material-ui icons
- styled components
- router-dom 
- react redux
- axios
- yup

## Passos de Instalação
- Crie um fork ou apenas clone o repositorio e acesse a pasta:
```Github link
https://github.com/lVladimirl/DevTechCenter-fullstack-project.git
```

> Recomendo que ao executar a aplicação localmente utilize dois terminais, uma para ativar o backend e outro para o front.

- Abra o terminal e entre na pasta front
```terminal
cd ./front
```

- Instale as dependencias nescessarias para o frontend
```terminal
yarn
```

- Com outro terminal acesse a pasta back e instale as dependencias nescessarias para o back
```terminal
//acessando no mesmo terminal
cd ../
cd ./back

//acessando a pasta em outro terminal
cd ./back

//instalando dependencias
yarn
```

## Passos para execução em ambiente de desenvolvimento (local).

- Dentro da pasta back faça uma copia do arquivo .env.example, altere o nome para apenas '.env' e preencha os dados nescessarios para a criação do banco de dados
```javascript
PORT = 3001

DATABASE_URL="postgresql://postgresUser:userPassword@localhost:port/dbName"

SECRET_KEY = "YOUR_SECRET_KEY"
```

- Crie um banco de dados PostgreSQL. A aplicação pode criar o banco para você caso ja tenha preenchido o arquivo .env, caso queira pular essa etapa manual não há problema.
```DB manager
CREATE DATABASE nome_do_banco_de_dados
```

- Criando e rodando as migrations para o banco de dados
```terminal
//criação das migrations, cria o DB e aplica as migrations

yarn prisma migrate dev

//o terminal irá pedir por um nome para a migration, insira oque desejar eu uso 01 por exemplo
```

- Rodando a aplicação localmente entre em cada uma das pastas e use o respectivo comando para rodar a aplicação. (use dois terminais um para o back e outro para o front)
```terminal
// ./back
yarn dev

// ./front
yarn start
```

## Funcionamento do Front

### Home
A primeira pagina da aplicação é a home, logo que você entrar nela haverá duas verificações, se no session storage do navegador não houver um item chamado @DTC-token você será redirecionado para o login, caso tenha um token a home irá fazer uma requisição para coletar dados simples do seu perfil e outra para as suas tecnologias.

Caso ja esteja logado e suas informações tenham sido recebidas a home é bem simples possuindo apenas 3 divisões simples. 

#### Navbar
No topo existe uma navbar com apenas um h1 para a logo e um botão de logout, a navbar é fixada. 

#### Header
Logo abaixo existe a header que exibe o nome do usuario e a direita o nivel de desenvolvedor do mesmo. 

#### Techs
Abaixo do header o component tech exibe uma lista de tecnologias que você possui se houver alguma, lá existe um botão para criar uma nova tecnologia, clickando na lista uma vez que ela for populada o item clickado exibe a opção de editar ou apagar o item, todas as requisições da home, login e register possuem snackbar alerts exibidos no topo a direita com um codigo e mensagem referente ao erro ou sucesso.

### login
Caso você não posua um token referente ao seu login na sessionStorage do seu navegador a home rediciona para o login, a pagina é ainda mais simples possuindo apenas um formulario.

#### Form
Para fazer login basta inserir seu email e senha, caso haja algum erro ou sucesso uma mensagem surgira no topo a direita da pagina, caso o login ocorra normalmente você será direcionado para a home em poucos segundos.

Caso você não possua login existe um botão para se registrar logo abaixo do botão de logar, ele irá te direcionar para a pagina de registro.

### Register
Caso você não posua um conta, a pagina de registro é simples possuindo apenas um formulario.

#### Form
Você pode criar suas conta preenchendo alguns dados como nome, email, telefone, nivel de desenvolvedor e a senha.

Assim como a pagina de login o formulario irá exibir mensagens de errou ou sucesso de acordo. Além disso caso você tenha um conta e por algum motivo tenha vindo ate aqui, você pode voltar para o login atraves do botão no final do formulario

## Funcionamento do Back
Detalhamento do funcionamento das rotas da api REST citando o que é nescessario para cada requisição funcione corretamente.

### ROTAS

#### User
A rota é bem simples possuindo apenas register, login e um get

##### POST – /users/register 
Responsável por cadastrar um novo usuario. 

**Requisitos**: 
  - nenhum

Os dados solicitados pela API são:

	{
		"name":"pedro",
		"email":"pedro@gmail.com",
		"password":"senha123",
		"bio":"eu gosto muito de JS",
		"contact":"988341057",
		"status":"JUNIOR"
	}
   
**Retornos:**

	{
		"name": "pedro",
		"email": "pedro@gmail.com",
		"bio": "eu gosto muito de JS",
		"technologies": []
	}

| Status | Mensagem |
|--|--|
|201 |""|
|401 |"Email ja Cadastrado"|

##### POST – /users/login
Rota responsável por listar todos os pacientes. 

**Requisitos:**
- nenhum

Os dados solicitados pela API são:

	{
		"email":"pedro@gmail.com",
		"password":"senha123"
	}

**Retornos:**

	{
		"token": "token_exemploeyJhbGciOiJIUzI1NiIsInR5c"
	}

| Status | Mensagem |
|--|--|
|201 |""|
|404 |"User is not found"|

##### GET – /users/
Rota responsável por listas um paciente especifico com base no ID.

**Requisitos:**
- Autenticação de token

**Retornos:**

	{
		"profile": {
			"id": "8c59d574-7767-4f5b-87d1-1c7503586932",
			"name": "pedro",
			"bio": "eu gosto muito de JS",
			"status": "JUNIOR"
		}
	}

| Status | Mensagem |
|--|--|
|200 |""|
|401 |"Credenciais Invalidas"|
|404 |"Token não encontrado"|

---

#### Technologies

##### POST – /technologies/register
Responsável por cadastrar uma nova tecnologia. 

**Requisitos:** 
- Autenticação

Os dados solicitados pela API são:

	{
		"name":"Typescript",
		"status":"INICIANTE"
	}

**Retornos:**

| Status | Mensagem | Descrição |
|--|--|--|
|201 |Sucesso |	 |
|404 |Sem Token |User Not Found |
|401 |Tecnologia ja existe | this tech alredy is registered in your repertoire | 

##### GET – /technologies/
Responsável por listar todas tecnologias de um usuario. 

**Requisitos:**
- Autenticação

##### PATCH – /technologies/update/:techId
Responsavel por editar as informações de uma tecnologia.

**Requisitos:** 
- Autenticação
- Id da tecnologia.

### PATCH – /medicos/:id 
Responsável por alterar os dados de um médico especifico.

**Requisitos:** 
- Autenticação
- Id da tecnologia.

Os dados solicitados pela API são:

	{
		"name":"TS",
		"status":"INTERMEDIARIO"
	}

**Retornos**
 
| Status | Mensagem | Descrição |
|--|--|--|
|201 |Sucesso |	 |
|404 |Sem Token |User Not Found |
|404 |Sem id da tecnologia |Technology was not found |
|401 |Tecnologia ja existe | this tech alredy is registered in your repertoire |


##### DELETE – /technologies/delete/:techId
Rotas responsável por deletar a tecnologia de um usuario. 
**Requisitos:** 
- Autenticação
- Id da tecnologia.

**Retornos**

| Status | Mensagem | Descrição |
|--|--|--|
|204 |Sucesso |	 |
|404 |Sem Token |User Not Found |
|404 |Sem id da tecnologia |Technology was not found |

---

