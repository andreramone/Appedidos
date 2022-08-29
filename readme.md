
# APPEDIDOS API

APPEDIDOS API é um projeto de teste para a empresa APPEDIDOS.

## Instalação

Após o clone do repositório git é necessário executar os seguintes comandos:

```bash
docker compose up -d
```

Se deseja alterar as configurações do database, modifique no arquivo:
### database.js
```js
module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'admin',
  password: 'admin',
  database: 'appedidos',
  ssl: 'false',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
  },
  timezone: 'America/Sao_Paulo',
};

```
Após a criação dos arquivos de configuração devemos executar npm install para baixarmos todas as dependências necessárias para o projeto ser executado.

```bash
npm install
```
## Necessario executar o comando:
```bash
npx sequelize-cli db:migrate
```

## Executar

Para executarmos o projeto em modo de desenvolvimento podemos rodar o comando npm run dev no terminal dentro da pasta principal do projeto.

```bash
npm run dev
```

Para rodar os testes do projeto o comando npm run test no terminal.

    ```bash
    npm run test
    ```