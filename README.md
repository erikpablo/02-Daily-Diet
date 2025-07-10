# Daily Diet API

API para controle de refeições diárias, permitindo que usuários registrem, editem e acompanhem suas refeições, além de obter métricas sobre sua alimentação.

## ✨ Funcionalidades

- Cadastro de usuários
- Autenticação por sessão (via cookie)
- Registro de refeições (nome, descrição, data/hora, dentro/fora da dieta)
- Edição e remoção de refeições
- Listagem de refeições do usuário
- Visualização de uma refeição específica
- Métricas do usuário: total de refeições, dentro/fora da dieta, melhor sequência dentro da dieta

## 🚀 Tecnologias

- Node.js
- Fastify
- Knex.js (SQLite)
- Zod (validação)
- TypeScript

## 📦 Instalação

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/seu-usuario/02-daily-diet.git
   cd 02-daily-diet
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Configure o ambiente:**
   - Copie `.env.example` para `.env` e ajuste se necessário.

4. **Rode as migrations:**
   ```sh
   npm run knex -- migrate:latest
   ```

5. **Inicie o servidor:**
   ```sh
   npm run dev
   ```

## 🛣️ Rotas da API

### Usuários

- `POST /users`  
  Cria um novo usuário.  
  **Body:** `{ "name": string, "email": string }`

- `POST /users/sessions`  
  Realiza login e retorna cookie de sessão.  
  **Body:** `{ "email": string }`

- `GET /users/me`  
  Retorna dados do usuário autenticado.  
  **Headers:** Cookie de sessão

### Refeições

- `POST /meals`  
  Cria uma refeição.  
  **Body:** `{ "name": string, "description": string, "is_diet": boolean }`  
  **Headers:** Cookie de sessão

- `PUT /meals/:mealId`  
  Edita uma refeição do usuário.  
  **Body:** Campos opcionais: `name`, `description`, `is_diet`  
  **Headers:** Cookie de sessão

- `DELETE /meals/:id`  
  Remove uma refeição do usuário.  
  **Headers:** Cookie de sessão

- `GET /meals`  
  Lista todas as refeições do usuário.  
  **Headers:** Cookie de sessão

- `GET /meals/:id`  
  Detalha uma refeição específica.  
  **Headers:** Cookie de sessão

- `GET /metrics`  
  Retorna métricas do usuário: total, dentro/fora da dieta, melhor sequência.  
  **Headers:** Cookie de sessão

## 🗄️ Banco de Dados

- SQLite (arquivo local)
- Migrations em `/db/migrations`

## ✅ Regras da aplicação

- [x] Deve ser possível criar um usuário
- [x] Deve ser possível identificar o usuário entre as requisições
- [x] Deve ser possível registrar uma refeição feita, com as seguintes informações:
  - As refeições devem ser relacionadas a um usuário.
  - Nome
  - Descrição
  - Data e Hora
  - Está dentro ou não da dieta
- [x] Deve ser possível editar uma refeição, podendo alterar todos os dados acima
- [x] Deve ser possível apagar uma refeição
- [x] Deve ser possível listar todas as refeições de um usuário
- [x] Deve ser possível visualizar uma única refeição
- [x] Deve ser possível recuperar as métricas de um usuário
    - [x] Quantidade total de refeições registradas
    - [x] Quantidade total de refeições dentro da dieta
    - [x] Quantidade total de refeições fora da dieta
    - [x] Melhor sequência de refeições dentro da dieta
- [x] O usuário só pode visualizar, editar e apagar as refeições o qual ele criou

Feito com 💚 por [Erik Pablo](https://github.com/erikpablo)