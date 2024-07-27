import styled from "styled-components";
import {
  FooterLinks as OriginalFooterLinks,
  FooterLink,
} from "../../../../components/Footer/Footer";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #f4f3fa;
`;

const ContactFormWrapper = styled.div`
  background-color: #ffffff;
  padding: 3rem;
  margin: 0 100px -250px auto;
  width: 90%;
  max-width: 400px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  text-align: center;
  border: 2px solid black;
  position: relative;
  z-index: 10;
  top: 0;
`;

const Title = styled.h2`
  color: #164b30;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: #396e41;
  margin-bottom: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #e1e1e1;
  border-radius: 20px;
  font-size: 0.9rem;
  background-color: #D9D9D9;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #e1e1e1;
  border-radius: 20px;
  font-size: 0.9rem;
  background-color: #D9D9D9;
  resize: none;
  height: 100px;
`;

const Button = styled.button`
  background-color: #6BCB79;
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

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  background-color: #164b30;
  padding: 5rem 0;
  margin-top: 100px;
  z-index: 1;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1600px;
  margin: 0 50% 0 2rem;
  color: #ffffff;
  flex-wrap: wrap;
`;

const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  flex: 1;
  min-width: 200px;
`;

const FooterTitle = styled.h3`
  margin-bottom: 0.25rem;
  font-size: 1.1rem;
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
`;

const CustomFooterLinks = styled(OriginalFooterLinks)`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  flex: 1;
  min-width: 100px;
`;

const ImageAndForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`;

const PersonImage = styled.div`
  display: flex;
  margin-left: 5rem;
  margin-bottom: -17rem;
  justify-content: space-between;
  align-items: flex-end;
  height: 100%;
`;

const ContactFooter = () => {
  return (
    <Container>
      <ImageAndForm>
      <PersonImage>
        <img
          src="/img/pessoasemreuniao.png"
          alt="Pessoas em Reunião"
          />
          </PersonImage>
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
      </ImageAndForm>
      <Footer>
        <FooterContent>
          <FooterItem>
            <FooterTitle>Endereço</FooterTitle>
            <FooterText>
              Rua Dr. Antônio Bento, 393
              <br />
              Santo Amaro, São Paulo - SP, 04750-000
            </FooterText>
          </FooterItem>
          <FooterItem>
            <FooterTitle>Contate-nos</FooterTitle>
            <FooterText>(11) 96278-8593</FooterText>
          </FooterItem>
          <CustomFooterLinks>
            <FooterLink to="/privacy-policy">
              Política de privacidade
            </FooterLink>
            <FooterLink to="/support">Suporte</FooterLink>
            <FooterLink to="/terms">Termos e Condições</FooterLink>
          </CustomFooterLinks>
        </FooterContent>
      </Footer>
    </Container>
  );
};

export default ContactFooter;
