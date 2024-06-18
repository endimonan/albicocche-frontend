# Albicocche
## La sfida

[![N|Solid](https://cdn-icons-png.flaticon.com/256/590/590688.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/endimonan/albicocche.svg?branch=master)](https://travis-ci.org/endimonan/albicocche)

# Albicocche

## Descrição
 
Albicocche é um projeto web desenvolvido utilizando React, Vite e TypeScript. Este projeto é projetado para ser uma base robusta para aplicações web modernas, com foco em desempenho, modularidade e facilidade de desenvolvimento.

### Estrutura de Pastas

- **`public/`**
  - **`vite.svg`**: Logo do Vite usada na página principal.
- **`src/`**: Contém o código-fonte da aplicação.
  - **`assets/`**
    - **`react.svg`**: Logo do React usada na aplicação.
  - **`components/`**: Contém os componentes React reutilizáveis.
  - **`context/`**
    - **`WrappedProviders.tsx`**: Componente que encapsula todos os providers (i18n, QueryClient, BrowserRouter, etc.).
  - **`i18n/`**: Configuração e arquivos de tradução para internacionalização.
    - **`en/`**
      - **`translation.json`**: Arquivo de tradução para inglês.
    - **`it/`**
      - **`translation.json`**: Arquivo de tradução para italiano.
    - **`pt/`**
      - **`translation.json`**: Arquivo de tradução para português.
    - **`index.ts`**: Configuração do `i18next`.
  - **`pages/`**: Páginas principais da aplicação.
    - **`App/`**
      - **`App.tsx`**: Componente principal da aplicação.
      - **`index.ts`**: Exportações e configuração relacionadas ao componente `App`.
  - **`routes/`**: Configuração de rotas da aplicação.
    - **`routes.tsx`**: Definição das rotas principais da aplicação.
    - **`index.css`**: Estilos aplicados às rotas.
  - **`main.tsx`**: Ponto de entrada principal da aplicação.
  - **`vite-env.d.ts`**: Declarações de tipos específicas do Vite.
- **`.eslintrc.json`**: Configuração do ESLint para linting do código.
- **`.eslintignore`**: Arquivos e diretórios ignorados pelo ESLint.
- **`.gitignore`**: Arquivos e diretórios ignorados pelo Git.
- **`.prettierignore`**: Arquivos e diretórios ignorados pelo Prettier.
- **`.prettierrc.json`**: Configuração do Prettier para formatação de código.
- **`index.html`**: Página HTML principal usada como template pelo Vite.
- **`package.json`**: Lista de dependências e scripts do projeto.
- **`tsconfig.json`**: Configuração do TypeScript.
- **`tsconfig.node.json`**: Configuração específica do Node.js para TypeScript.
- **`vite.config.ts`**: Configuração do Vite.
- **`yarn.lock`**: Arquivo de bloqueio de dependências gerenciado pelo Yarn.

### Detalhes Adicionais

- **`public/`**: Contém arquivos estáticos que são servidos diretamente. Coloque aqui imagens e outros ativos que precisam ser acessíveis diretamente pelo navegador.
- **`src/`**: Diretório principal para todo o código fonte da aplicação.
  - **`assets/`**: Para armazenar ativos como imagens, ícones e outros arquivos estáticos utilizados no código.
  - **`components/`**: Contém componentes reutilizáveis do React que podem ser usados em várias partes da aplicação.
  - **`context/`**: Contém contextos do React, como provedores de estado global ou de configuração.
  - **`i18n/`**: Armazena arquivos de configuração e tradução para internacionalização, facilitando a manutenção e adição de novos idiomas.
  - **`pages/`**: Contém as páginas principais ou seções do aplicativo, geralmente correspondendo às rotas principais.
  - **`routes/`**: Arquivos relacionados à configuração e definição das rotas da aplicação.
  - **`main.tsx`**: Ponto de entrada do aplicativo, onde o aplicativo React é renderizado.
  - **`vite-env.d.ts`**: Arquivo de declaração de tipos específico para o Vite.
- **Arquivos de configuração (`.eslintrc.json`, `.prettierrc.json`, etc.)**: Configurações para ferramentas de linting e formatação para manter a qualidade do código.


## Instalação

Para instalar e configurar o projeto, siga os passos abaixo:

1. Clone o repositório:
    ```bash
    git clone https://github.com/endimonan/albicocche.git
    ```
2. Entre na pasta do projeto:
    ```bash
    cd albicocche
    ```
3. Instale as dependências:
    ```bash
    yarn install
    ```


## Uso

Para iniciar o servidor de desenvolvimento:

 1. Inicie o servidor vite pelo comando:   
    ```sh
    yarn start
    ```
    > Nota: `rm -rf node_module && rm -rf yarn.lock` em caso de algum problema.
 2. Acesse pela url:   
    ```sh
    localhost:5173
    ```
