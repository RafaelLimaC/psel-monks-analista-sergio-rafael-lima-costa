# 📜 Landing Page Monks - Backend WordPress

# 📚 Sumário

1. [Descrição](#descrição)
2. [Deploy](#deploy-🚨)
3. [Tecnologias Utilizadas](#tecnologias-utilizadas)
4. [Estrutura do Projeto](#estrutura-do-projeto)
5. [Como Executar o Projeto](#como-executar-o-projeto)
6. [Sobre o WordPress](#sobre-o-wordpress)

## Descrição

Uma landing page feita em **React** + **Vite** recebendo os dados que
são exibidos no front através da API REST do WordPress. O site é completamente responsivo
para todos os tamanhos de tela e conta com ferramentas de acessibilidade para
melhorar a experiência do usuário.

## Deploy 🚨

Se você não quiser baixar e configurar o projeto localmente, tudo está hospedado online!

- **Frontend**: React - acesse [https://psel-monks-analista-sergio-rafael-lima-costa.vercel.app/](https://psel-monks-analista-sergio-rafael-lima-costa.vercel.app/)
- **Backend**: Instância do WordPress hospedada na Hostinger, acesse aqui: [link](https://linen-horse-773831.hostingersite.com/wp-json/wp/v2/).
- **Banco de Dados**: MySQL (WordPress)

## Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **Vite**: Ferramenta de build rápida e moderna.
- **ESLint**: Ferramenta de linting para manter a qualidade do código.
- **React Hook Form**: Gerenciamento eficiente de formulários.
- **Sass Embedded**: Suporte para pré-processamento de estilos com Sass.
- **Vitest**: Biblioteca de testes do Vite, junto com ela usei a @testing-library/react.
- **dotenv**: Biblioteca para carregar variáveis de ambiente a partir de um arquivo .env, útil para configurar dados sensíveis como credenciais de banco de dados e chaves de API.

## Estrutura do Projeto

- **`src/`**: Contém os arquivos principais do projeto.

  - **`components/`**: Cada componente possui seu próprio arquivo `.jsx` e `.scss` para estilos.
  - **`hooks/`**: Centraliza os hooks para melhor organização, reutilização e escalabilidade do código.
  - **`services/`**: Mantém a lógica de serviços separada dos hooks e dos componentes, permitindo a criação de **dumb components**, que se limitam à exibição de elementos na tela sem lógica de negócio.
  - **`tests/`**: Todos os testes estão organizados nessa pasta para melhor visualização.

- **`.env`**: Gerenciamento de variáveis de ambiente.
- **`vite.config.js`**: Configuração do Vite, incluindo alias para facilitar importações.
- **`package.json`**: Gerenciamento de dependências e scripts.

## Como Executar o Projeto

### Definição das Variáveis de Ambiente (Hostinger ou Local)

Defina a variável `VITE_API_URL` conforme a origem da API:

- Para executar o servidor local do WordPress:
  ```bash
  VITE_API_URL=https://localhost/wpmonks/wp-json
  ```
- Para buscar informações da API hospedada na Hostinger:
  ```bash
  VITE_API_URL=https://linen-horse-773831.hostingersite.com/wp-json
  ```

### Instalação das Dependências

```bash
pnpm install
```

### Scripts Disponíveis

No diretório do projeto, você pode executar os seguintes comandos:

- `pnpm run dev` → Inicia o servidor de desenvolvimento em: [http://localhost:5173](http://localhost:5173).
- `pnpm run build` → Gera a build de produção.
- `pnpm run preview` → Visualiza a build de produção localmente.
- `pnpm run lint` → Executa o ESLint para verificar problemas no código.
- `pnpm run test` → Executa os testes do Vitest.

## Sobre o WordPress

### Plugins Utilizados

1. **ACF - Advanced Custom Fields**

   - Permite criar um post type com os campos necessários e adicionar registros personalizados.

2. **Contact Form 7**

   - Utilizado para gerenciar os dados enviados pelos formulários.

3. **Contact Form CFDB7**

   - Armazena os dados enviados pelo formulário em um custom post type.

https://github.com/user-attachments/assets/7fb1e094-1d81-4fec-9078-39b3231596bd
