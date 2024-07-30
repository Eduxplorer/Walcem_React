import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "/img/logo-walcem.png";
import SearchBar from '../SeachBar/SeachBar';

// Styled Components
const StyledHeader = styled.header`
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes moveLine {
    0% {
      transform: translateX(-100%);
    }
    50% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    }
  }

  background-color: #164b30;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  transition: top var(--transition-duration);
  z-index: 1000;
  border-bottom: 1px solid #2f7c2f;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
  border-radius: 0 0 10px 5px;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #32cd32;
    transform: translateX(-100%);
    animation: moveLine 2s linear infinite;
  }

  &.hidden {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease;
  }

  @media (max-width: 1920px) {
    padding: 1rem 1.5rem;
  }

  @media (max-width: 1440px) {
    padding: 1rem 1.25rem;
  }

  @media (max-width: 1024px) {
    padding: 0.75rem 1rem;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 0.75rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
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
  align-items: center;
  margin: 0;
  padding: 0;

  li {
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
  }

  li:first-child {
    margin-left: 0;
  }

  li a {
    text-decoration: none;
    color: #ffffff;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.5rem 0.75rem;
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

  @media (max-width: 1024px) {
    li a {
      font-size: 0.875rem;
      padding: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    li {
      margin: 0.25rem 0;
    }
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const [headerClass, setHeaderClass] = useState("");

  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        setHeaderClass("");
      } else if (currentScroll > lastScroll) {
        setHeaderClass("hidden");
      } else {
        setHeaderClass("");
      }
      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch = (results) => {
    // Lógica para redirecionar para a página de resultados
    // Dependendo da sua estrutura, você pode redirecionar para uma página de resultados ou exibir resultados na mesma página
    // Exemplo: navigate(`/search?query=${encodeURIComponent(query)}`);
    console.log(results); // Apenas um exemplo
  };

  return (
    <StyledHeader className={headerClass}>
      <Nav>
        <Logo>
          <Link to="/">
            <img src={logo} alt="Logo WALCEM" />
          </Link>
        </Logo>
        <NavLinks>
          <li>
            <Link to="/" onClick={() => navigate("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={() => navigate("/blog")}>
              Blog
            </Link>
          </li>
          <li>
          <Link to="/maintenance" onClick={() => console.log('Navigating to maintenance')}>
              Login
            </Link>
          </li>
          <li>
            <SearchBar onSearch={handleSearch} />
          </li>
        </NavLinks>
      </Nav>
    </StyledHeader>
  );
};

export default Header;