# Desafio Dock REST API

Veja quais foram os [critérios para esse desafio](./docs/desafio.pdf).
Data de entrega informada por email: até 09/12/2020.

## Manual de execução

Para rodar a aplicação localmente é necessário ter instalado em sua máquina tanto
o Docker quanto o Docker Compose

- [Docker](https://docs.docker.com/engine/install/) versão 19.03.3, build a872fc2f86 ou superior
- [docker-compose](https://docs.docker.com/compose/install/) versão 1.24.1, build 4667896b ou superior

Após instalar os pré-requisitos, na raiz do projeto você pode rodar dois comandos
para subir a aplicação

- `docker-compose up dock-database` // para subir o banco de dados
- `docker-compose up dock-api` // para subir a api

Não é necessário nenhuma outra configuração, já estará pronta para usar pela url: http://localhost:3333.

## Arquitetura do projeto

<img src="./docs/project-structure.png" alt="Estrutura do projeto" height="auto" width="100%" />
