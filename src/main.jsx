import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap");

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    scroll-behavior: smooth;
    scroll-padding-top: 2rem;
    font-family: "DM sans", sans-serif;
  }

  :root {
    --main-color: #64c62b;
    --text-color: #4d6183;
    --bg-color: #fff;
  }

  body {
    color: var(--text-color);
    background: var(--bg-color);
  }
`;


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
)

