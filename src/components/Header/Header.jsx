import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--bg-color);
  padding: 22px 5% 22px 20px;
  border-bottom: 1px solid black;
  transition: all 0.45s ease;
  &.shadow {
    background: var(--bg-color);
    box-shadow: 0 0 0.25rem rgb(14 55 54 / 15%);
    border-color: #b2bec3;
  }
`;

const Navbar = styled.nav`
  display: flex;
`;

const NavLink = styled.a`
  color: var(--text-color);
  font-size: 1.1rem;
  font-weight: 500;
  padding: 5px 0;
  margin: 0px 30px;
  transition: all 0.45s ease;

  &:hover {
    color: var(--main-color);
  }

  &.active {
    color: var(--main-color);
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2.8125rem;

  img {
    height: 5.3125rem;
    margin-right: 0.3125rem;
  }
`;

const NavUl = styled.ul`
  display: flex;
  align-items: center;
  `;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>
        <img src="/img/logowalcemIA2.0.jpeg" alt="logo" />
      </Logo>
      <Navbar>
        <NavUl>
          <li>
            <NavLink href="#">Faça Parte</NavLink>
          </li>
          <li>
            <NavLink href="#">Sobre Nós</NavLink>
          </li>
          <li>
            <NavLink href="#">Contato</NavLink>
          </li>
        </NavUl>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
