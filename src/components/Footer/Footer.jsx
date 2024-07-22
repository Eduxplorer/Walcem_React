import styled from "styled-components";

const FooterContainer = styled.footer`
  background: var(--bg-color);
  padding: 1.875rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 2.5rem;
`;

const FooterLink = styled.a`
  color: var(--text-color);
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: var(--main-color);
  }
`;

const FooterText = styled.p`
  font-size: 1rem;
  color: var(--text-color);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink href="#about">Sobre Nós</FooterLink>
        <FooterLink href="#mission">Nossa Missão</FooterLink>
        <FooterLink href="#faq">FAQ</FooterLink>
        <FooterLink href="#contact">Contato</FooterLink>
      </FooterLinks>
      <FooterText>
        &copy; 2024 Reciclagem Walcem. Todos os direitos reservados.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
