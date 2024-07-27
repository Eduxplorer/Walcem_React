import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import logo from "/img/logo-walcem.png";
import SearchBar from "../SeachBar/SeachBar";

// Styled Components
const StyledHeader = styled.header`
  @keyframes pulse {
    0% {
      transform: scale(1); /* Tamanho original */
    }
    50% {
      transform: scale(1.05); /* Aumenta o tamanho um pouco */
    }
    100% {
      transform: scale(1); /* Retorna ao tamanho original */
    }
  }

  @keyframes moveLine {
    0% {
      transform: translateX(-100%); /* Inicia fora da tela à esquerda */
    }
    50% {
      transform: translateX(0); /* Move para o início do header */
    }
    100% {
      transform: translateX(100%); /* Move para fora da tela à direita */
    }
  }

  background-color: #164b30;
  padding: var(--header-padding);
  position: fixed;
  width: 100%;
  padding: 2rem;
  top: 0;
  left: 0;
  transition: top var(--transition-duration);
  z-index: 1000;
  max-width: 1920px;
  margin: 0 auto;
  border-bottom: 1px solid #2f7c2f;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
  border-radius: 0 0 10px 5px;
  overflow: hidden; /* Garante que a animação fique contida */

  &::after {
    content: "";
    position: absolute;
    bottom: 0; /* Alinha a linha na parte inferior do header */
    left: 0;
    width: 100%;
    height: 2px; /* Altura da linha ajustada para mais fina */
    background: #32cd32; /* Cor da linha */
    transform: translateX(-100%); /* Inicia a linha fora da tela */
    animation: moveLine 2s linear infinite; /* Animação da linha */
  }

  &.hidden {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 2rem;
`;

const Logo = styled.div`
  a {
    display: block;
    overflow: hidden;
    transform-origin: center;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
  }

  a:hover img {
    transform: scale(0.9);
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;

  li {
    margin-left: 1rem;
    margin-right: 1rem;
    display: inline-block;
  }

  li a {
    display: inline-flex;
    text-decoration: none;
    color: #ffffff;
    font-size: 16px;
    font-weight: bold;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color var(--transition-duration) ease,
      color var(--transition-duration) ease, box-shadow 0.3s ease;

    &:hover {
      background: linear-gradient(45deg, #32cd32, #2daf2d);
      color: #fff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      transform: translateY(-2px);
    }
  }

  .highlight {
    background-color: #32cd32; /* Cor de fundo para o link destacado */
    color: #fff;
    animation: pulse 2s infinite; /* Animação de pulsar */
  }

  .faUserCircle {
    font-size: 2.5rem;
    color: var(--text-color);
    cursor: pointer;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: #4b7d60;
      transform: translateY(-2px);
    }
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 50) {
        // Ajuste o valor conforme necessário
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch = (query) => {
    // Lógica de busca aqui
    console.log("Search query:", query);
  };

  return (
    <StyledHeader className={isVisible ? "" : "hidden"}>
      <Nav>
        <Logo>
          <Link to="/">
            {/* Link para a página inicial */}
            <img src={logo} alt="Logo WALCEM" />
          </Link>
        </Logo>
        <NavLinks>
          <li>
            <Link to="/">Home</Link> {/* Link para a página inicial */}
          </li>
          <li>
            <Link to="/login">Login</Link> {/* Link para a página de login */}
          </li>
          <li>
            <Link to="/register">Cadastro</Link>{" "}
            {/* Link para a página de cadastro */}
          </li>
          <li>
            <Link to="/blog">Blog</Link> {/* Link para a página do blog */}
          </li>
          <li>
            <Link to="/verify" className="highlight">
              Verificar Coleta
            </Link>{" "}
            {/* Link destacado */}
          </li>
          <li>
            <SearchBar onSearch={handleSearch} />
          </li>
          <li>
            <FontAwesomeIcon
              icon={faUserCircle}
              className="faUserCircle"
              onClick={() => navigate("/login")} // Redireciona para a página de login
            />
          </li>
        </NavLinks>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
