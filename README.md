## Configuração do Ambiente

Para rodar este projeto após clonar o repositório, siga os passos abaixo:

1. **Instalação de Dependências**

   - Primeiro, instale as dependências principais do projeto executando o comando:
     ```bash
     npm install
     ```
   - Em seguida, instale as bibliotecas adicionais necessárias, executando os seguintes comandos um por vez:
     ```bash
     npm install styled-components
     npm install react-router-dom
     npm install @fortawesome/react-fontawesome
     npm install @fortawesome/free-solid-svg-icons
     npm install @fortawesome/free-brands-svg-icons
     npm install react-toastify
     ```

2. **Iniciar o Servidor de Desenvolvimento**
   - Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento com o comando:
     ```bash
     npm run dev
     ```

## Estrutura do Projeto

Na pasta `src`, você encontrará duas pastas principais: `components` e `pages`.

### 1. Pasta `components`

Esta pasta contém componentes globais, que são partes da interface que podem ser usadas em várias páginas, como a barra de navegação. **Não adicione nada nesta pasta a menos que o componente realmente precise estar em várias páginas.**

### 2. Pasta `pages`

Esta é a pasta onde você vai trabalhar a maior parte do tempo. Aqui você encontrará subpastas para cada página do projeto. Por exemplo:

- `Home`: Contém a estrutura da página inicial.
- `Login`: Contém a estrutura da página de login.

Dentro de cada pasta de página (`Home` e `Login`), a estrutura é a seguinte:

- `assets`: Armazena imagens e outros recursos.
- `components`: Armazena componentes específicos dessa página.
- O arquivo principal da página, como `Home.jsx` ou `Login.jsx`.

#### Criando uma Nova Página

Para adicionar uma nova página ao projeto, siga estas etapas:

1. Crie uma nova pasta dentro de `pages` com o nome da página.
2. Dentro desta nova pasta, crie as seguintes subpastas e arquivos:
   - `assets`: Para imagens e outros recursos.
   - `components`: Para componentes específicos da nova página.
   - O arquivo principal da página, nomeado com o nome da página (por exemplo, `NovaPagina.jsx`).

### Estilizando com Styled-components

Em vez de criar arquivos CSS separados, você deve incluir os estilos diretamente nos arquivos dos componentes usando `styled-components`.

#### O que é Styled-components?

`styled-components` é uma biblioteca que permite escrever CSS diretamente dentro de arquivos JavaScript, o que facilita a manutenção e a reutilização dos estilos.

#### Como Usar Styled-components

1. Primeiro, importe o `styled-components` no seu arquivo:

   ```jsx
   import styled from "styled-components";
   ```

2. Depois, crie componentes estilizados:

   ```jsx
   const Container = styled.div`
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
   `;

   const Titulo = styled.h1`
     color: #333;
   `;
   ```

3. Utilize esses componentes dentro do seu componente React:

   ```jsx
   const MeuComponente = () => {
     return (
       <Container>
         <Titulo>Meu Componente</Titulo>
       </Container>
     );
   };

   export default MeuComponente;
   ```

### Navegação com React Router

Para gerenciar a navegação entre as páginas, usamos o `react-router-dom`.

#### Adicionando uma Nova Rota

1. Abra o arquivo `App.jsx` e adicione uma nova rota dentro do componente `Routes`:
2. O primeiro import serve justamente para adicionar esses componentes

   ```jsx
   import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
   import NovaPagina from "./pages/NovaPagina/NovaPagina";

   function App() {
     return (
       <Router>
         <Routes>
           <Route path="/nova-pagina" element={<NovaPagina />} />
           {/* Outras rotas */}
         </Routes>
       </Router>
     );
   }

   export default App;
   ```

3. Para adicionar um link de navegação à nova página, edite o componente `Header`:

   ```jsx
   import { Link } from "react-router-dom";

   const Header = () => {
     return (
       <nav>
         <Link to="/nova-pagina">Nova Página</Link>
         {/* Outros links */}
       </nav>
     );
   };

   export default Header;
   ```

### Exportação e Importação de Componentes

Sempre que você criar um novo componente, lembre-se de exportá-lo e importá-lo conforme necessário.

#### Exportando um Componente

No arquivo do componente, adicione a linha de exportação:

```jsx
const MeuComponente = () => {
  // Código do componente
};

export default MeuComponente;
```

#### Importando um Componente

No arquivo onde você deseja usar o componente, importe-o:

```jsx
import MeuComponente from "./components/MeuComponente";
```

## Boas Práticas

- **Mantenha a Estrutura Organizada:** Siga a estrutura de pastas e arquivos conforme descrito para manter o projeto limpo e organizado.
- **Use Styled-components:** Mantenha os estilos encapsulados nos componentes para facilitar a manutenção.
- **Teste as Funcionalidades:** Verifique a navegação e o funcionamento dos componentes após qualquer alteração significativa.

Bom trabalho e divirta-se codando!

```

```
