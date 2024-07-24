// ContactForm.js
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #f4f3fa;
`;

const ContactFormWrapper = styled.div`
  background-color: #ffffff;
  padding: 2rem;
  margin: 0 50px -250px auto;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  text-align: center;
  border: 2px solid black;
  position: relative;
  z-index: 10;
  top: 0;
`;

const Title = styled.h2`
  color: #8d8d99;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: #8d8d99;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  font-size: 0.9rem;
  background-color: #f9f9fd;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #e1e1e1;
  border-radius: 5px;
  font-size: 0.9rem;
  background-color: #f9f9fd;
  resize: none;
  height: 100px;
`;

const Button = styled.button`
  background-color: #595678;
  color: #ffffff;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #454360;
  }
`;

const Footer = styled.div`
  display: flex;
  background-color: #b0accb;
  padding: 2rem 0;
  margin-top: 100px;
  z-index: 1;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 400px;
  margin-left: 2rem;
  color: #ffffff;
`;

const FooterItem = styled.div`
  margin-bottom: 0.5rem;
  margin-inline: 100px;
`;

const FooterTitle = styled.h3`
  margin-bottom: 0.25rem;
  font-size: 1.1rem;
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
`;

const ContactFooter = () => {
  return (
    <Container>
      <ContactFormWrapper>
        <Title>Fale Conosco</Title>
        <Subtitle>Queremos ouvir você</Subtitle>
        <form>
          <Input type="text" placeholder="Nome" />
          <Input type="email" placeholder="E-mail" />
          <Textarea placeholder="Digite sua mensagem aqui..." />
          <Button type="submit">Enviar mensagem</Button>
        </form>
      </ContactFormWrapper>
      <Footer>
        <FooterContent>
          <FooterItem>
            <FooterTitle>Visite-nos</FooterTitle>
            <FooterText>
              58 Middle Point Rd
              <br />
              San Francisco, 94124
            </FooterText>
          </FooterItem>
          <FooterItem>
            <FooterTitle>Contate-nos</FooterTitle>
            <FooterText>
              (123) 456 – 789
              <br />
              (123) 456 – 789
              <br />
              contact@company.com
            </FooterText>
          </FooterItem>
        </FooterContent>
      </Footer>
    </Container>
  );
};

export default ContactFooter;
