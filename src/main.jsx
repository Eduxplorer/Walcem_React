import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

// Definindo os estilos globais
export const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #007bff;
    --secondary-color: #4D6183;
    --text-primary-color: #000;
    --background-color: #fff;
    --footer-background: #164B30;
    --hover-color: #006400;
    --dark-gray: #333333; /* Adicionado no blog, mas pode ser útil globalmente */
    --main-padding: 20px;
    --header-padding: 10px 20px;
    --footer-padding: 50px 0;
    --main-margin: 20px auto;
    --footer-margin-top: 20px;
    --transition-duration: 0.3s;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "DM Sans", sans-serif;
    background-color: var(--background-color);
    color: var(--text-primary-color);
  }
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
