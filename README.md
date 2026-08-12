# meu-projeto-backend3

## 1. Preparação do Ambiente

Execute os comandos abaixo no terminal para inicializar o projeto e instalar o TypeScript:

```bash
npm init -y
npm i -D typescript @types/node tsx
npx tsc --init
```

## 2. Instalação do Express

Execute os comandos a seguir para instalar o framework Express e seus tipos:

```bash
npm install express
npm install -D @types/express
```

## 3. Estrutura do Projeto

Crie a pasta `src` e o arquivo `src/app.ts`. A estrutura do diretório ficará assim:

```text
meu-projeto-backend
│
├── node_modules
├── src
│   └── app.ts
├── package.json
└── tsconfig.json
```

## 4. Criar o Servidor com Express

No arquivo `src/app.ts`, adicione o seguinte código:

```typescript
// Importa a biblioteca Express e também o tipo Express
// O Express será utilizado para criar o servidor web
import express from "express";
import type { Express } from "express";

// Cria uma aplicação Express
// A função express() devolve um objeto que representa o servidor da aplicação
const app: Express = express();

// Define a porta onde o servidor ficará disponível
// Neste caso, o servidor poderá ser acessado pela porta 8081
const PORT: number = 8081;

// Inicializa o servidor utilizando a porta definida
// O método listen() faz o servidor começar a "escutar" requisições HTTP
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
```

## 5. Configurar o Script de Execução

Abra o arquivo `package.json` e altere a seção `"scripts"` para:

```json
"scripts": {
  "dev": "tsx watch src/app.ts"
}
```

## 6. Executar o Servidor

No terminal, execute:

```bash
npm run dev
```

Se tudo estiver correto, o terminal exibirá:

```text
Servidor rodando em http://localhost:8081
```