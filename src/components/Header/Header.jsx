import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import logo from '/img/logo-walcem.png'; 
import SearchBar from '../SeachBar/SeachBar'; 

// Styled Components
const StyledHeader = styled.header`
  background-color: var(--background-color);
  padding: var(--header-padding);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  transition: top var(--transition-duration);
  z-index: 1000;
  max-width: 1920px;
  margin: 0 auto;

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
  width: 80%;
  margin: auto;
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
    margin-left: 15px;
    display: inline-block;
  }

  li a {
    display: inline-flex;
    text-decoration: none;
    color: var(--text-color);
    font-size: 16px;
    font-weight: bold;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color var(--transition-duration) ease, color var(--transition-duration) ease, box-shadow 0.3s ease;

    &:hover {
      background: linear-gradient(45deg, #4B7D60, #6FAE89);
      color: #fff;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
      transform: translateY(-2px);
    }
  }

  .faUserCircle {
    font-size: 35px;
    color: var(--text-color);
    cursor: pointer;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: #4B7D60;
      transform: translateY(-2px);
    }
  }
`;

const [isVisible, setIsVisible] = useState(true);

useEffect(() => {
    const handleScroll = () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 50) { // Ajuste o valor conforme necessário
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

    return (
        <StyledHeader className={isVisible ? '' : 'hidden'}>
            <Nav>
                <Logo>
                    <Link to="/"> {/* Link para a página inicial */}
                        <img src={logo} alt="Logo WALCEM" />
                    </Link>
                </Logo>
                <NavLinks>
                    <li>
                        <Link to="/">Home</Link> {/* Link para a página inicial */}
                    </li>
                    <li>
                        <SearchBar onSearch={handleSearch} /> 
                    </li>
                    <li>
                        <FontAwesomeIcon
                            icon={faUserCircle}
                            className="faUserCircle"
                            onClick={() => navigate('/login')} // Redireciona para a página de login
                        />
                    </li>
                </NavLinks>
            </Nav>
        </StyledHeader>
    );
};

export default Header;
