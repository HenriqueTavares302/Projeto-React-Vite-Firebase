
# 🔐 TodoList com Autenticação (React + Vite + Firebase)

Este projeto é uma aplicação web simples de autenticação de usuários utilizando **React**, **Vite** e **Firebase Authentication**.

O objetivo é permitir que usuários possam:
- Criar uma conta
- Fazer login
- Visualizar seu e-mail autenticado
- Sair da conta

---

## 🚀 Tecnologias utilizadas

- ⚛️ React
- ⚡ Vite
- 🔥 Firebase Authentication
- 🟨 JavaScript (ES6+)
- 🎨 CSS

---
## 📂 Estrutura do projeto
src/
 ├── assets
 ├── Components/
 │    ├── AuthForm.jsx
 │    ├── Login.jsx
 │    ├── Register.jsx
 │    ├── DashBoard.jsx
 │
 ├── App.css
 ├── App.jsx
 ├── auth.js
 ├── firebase.js
 ├── index.css
 ├── main.jsx

 
---

## 🔧 Funcionalidades

- ✅ Cadastro de usuário com e-mail e senha
- ✅ Login de usuário
- ✅ Logout
- ✅ Monitoramento de autenticação em tempo real (`onAuthStateChanged`)
- ✅ Interface dinâmica (login/cadastro)
- ✅ Feedback de carregamento

---

## 🔥 Configuração do Firebase

1. Acesse o site do Firebase:
👉 https://console.firebase.google.com/

2. Crie um projeto

3. Ative o método de autenticação:
- Email/Senha

4. Copie sua configuração e adicione em:

```js
// src/Components/firebase.jsx

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_DOMINIO",
  projectId: "SEU_ID",
  storageBucket: "SEU_BUCKET",
  messagingSenderId: "SEU_ID",
  appId: "SEU_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

▶️ Como rodar o projeto
1. Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git
2. Acesse a pasta
cd vite-project
3. Instale as dependências
npm install
4. Instale o Firebase
npm install firebase
5. Rode o projeto
npm run dev
📸 Preview

A aplicação possui:

Tela de login
Tela de cadastro
Tela de usuário autenticado
⚠️ Observações
A API Key do Firebase não é secreta, pode ficar no frontend.
Certifique-se de ativar o método de login por e-mail no Firebase.
As imagens devem estar na pasta /public/assets.
🚀 Melhorias futuras
🔹 Integração com banco de dados (Firestore)
🔹 Sistema de tarefas (TodoList completo)
🔹 Validação de formulário mais robusta
🔹 Estilização com framework (Tailwind, etc.)
🔹 Proteção de rotas
👨‍💻 Autor

Desenvolvido por Henrique Tavares

📄 Licença

Este projeto está sob a licença MIT.


---


