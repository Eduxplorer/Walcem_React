import styled from "styled-components";

// Styled components
const PrivacyPolicySection = styled.section`
  padding: 2rem;
  width: 50%;
  max-width: 1920px;
  margin: 10% auto;
  background-color: #f9f9f9;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: 1px solid #90ee90;
  animation: fadeIn 1s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 1920px) {
    width: 70%;
  }

  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 992px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0.5rem;
  }
`;

const IconsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 2rem;

  @media (max-width: 480px) {
    flex-direction: column;
    margin: 10px 0;
  }
`;

const Icon = styled.img`
  width: 50px;
  height: auto;

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

const Title = styled.h1`
  text-align: center;
  color: #4caf50; /* Adjust to match your secondary color */
  margin-bottom: 20px;

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Heading = styled.h2`
  color: #333; /* Adjust to match your text color */
  margin-top: 20px;
  margin-bottom: 10px;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const Paragraph = styled.p`
  margin-bottom: 20px;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const List = styled.ul`
  padding-left: 20px;
  margin-bottom: 20px;

  @media (max-width: 480px) {
    padding-left: 10px;
  }
`;

const ListItem = styled.li`
  margin-bottom: 10px;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const Strong = styled.strong`
  color: #666; /* Adjust to match your dark gray color */
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ContactItem = styled.li`
  margin-bottom: 10px;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const PrivacyPolicy = () => {
  return (
    <PrivacyPolicySection>
      <IconsWrapper>
        <Icon src="/img/cadeado-politica.png" alt="Cadeado de segurança" />
        <Title>Política de Privacidade</Title>
        <Icon
          src="/img/user-politica.png"
          alt="Ícone de segurança do usuário"
        />
      </IconsWrapper>

      <Paragraph>
        A privacidade dos nossos clientes é de extrema importância para nós.
        Este documento descreve como coletamos, usamos, armazenamos e protegemos
        suas informações pessoais quando você visita nosso site, WALCEM.
      </Paragraph>

      <Heading>Quais dados coletamos?</Heading>
      <Paragraph>Coletamos diversos tipos de dados, incluindo:</Paragraph>
      <List>
        <ListItem>
          <Strong>Dados pessoais fornecidos pelo usuário:</Strong> Nome,
          telefone, CPF, endereço de e-mail.
        </ListItem>
        <ListItem>
          <Strong>Dados coletados automaticamente:</Strong> Endereço IP, tipo de
          navegador, páginas visitadas, tempo gasto no site.
        </ListItem>
      </List>

      <Heading>Como usamos esses dados?</Heading>
      <Paragraph>Os dados coletados são utilizados para:</Paragraph>
      <List>
        <ListItem>
          Melhorar sua experiência no site e personalizar o conteúdo.
        </ListItem>
        <ListItem>Garantir a segurança dos nossos serviços.</ListItem>
        <ListItem>Comunicar informações importantes e atualizações.</ListItem>
        <ListItem>Realizar análises e melhorias contínuas do site.</ListItem>
      </List>

      <Heading>Com quem compartilhamos seus dados?</Heading>
      <Paragraph>Seus dados podem ser compartilhados com:</Paragraph>
      <List>
        <ListItem>
          <Strong>Fornecedores de serviços:</Strong> Empresas responsáveis pelos
          postos de coleta.
        </ListItem>
        <ListItem>
          <Strong>Parceiros comerciais:</Strong> Empresas com as quais
          colaboramos para oferecer produtos e serviços.
        </ListItem>
        <ListItem>
          <Strong>Obrigação legal:</Strong> Quando necessário para cumprir a
          legislação aplicável ou responder a processos legais.
        </ListItem>
      </List>

      <Heading>Como guardamos e protegemos seus dados?</Heading>
      <Paragraph>
        Seus dados são armazenados em servidores seguros e protegidos por
        medidas técnicas e administrativas. Utilizamos criptografia, firewalls e
        controles de acesso para garantir a segurança dos dados.
      </Paragraph>

      <Heading>Seus direitos como titular dos dados</Heading>
      <Paragraph>
        Você tem os seguintes direitos em relação aos seus dados pessoais:
      </Paragraph>
      <List>
        <ListItem>Acessar seus dados.</ListItem>
        <ListItem>Corrigir dados incorretos ou incompletos.</ListItem>
        <ListItem>Solicitar a exclusão dos seus dados.</ListItem>
        <ListItem>Restringir o processamento dos seus dados.</ListItem>
        <ListItem>Solicitar a portabilidade dos dados.</ListItem>
        <ListItem>Retirar o consentimento a qualquer momento.</ListItem>
      </List>
      <Paragraph>
        Para exercer esses direitos, entre em contato conosco através das
        informações fornecidas abaixo.
      </Paragraph>

      <Heading>Alterações na política de privacidade</Heading>
      <Paragraph>
        Podemos atualizar periodicamente esta política de privacidade e
        notificaremos você sobre quaisquer alterações publicando a nova versão
        no site. Recomendamos que você revise regularmente para se manter
        informado sobre como estamos protegendo seus dados.
      </Paragraph>

      <Heading>Contato</Heading>
      <Paragraph>
        Se você tiver dúvidas ou preocupações sobre nossa política de
        privacidade, entre em contato conosco:
      </Paragraph>
      <ContactList>
        <ContactItem>
          Email:{" "}
          <a href="mailto:contato@walcem.com.br">contato@walcem.com.br</a>
        </ContactItem>
        <ContactItem>
          Telefone: <a href="tel:1140940378">11 4094-0378</a>
        </ContactItem>
      </ContactList>

      <Heading>Legislação Aplicável</Heading>
      <Paragraph>
        Esta política de privacidade está em conformidade com a Lei Geral de
        Proteção de Dados (LGPD) do Brasil. Para mais informações sobre seus
        direitos, visite o site oficial da ANPD (Autoridade Nacional de Proteção
        de Dados).
      </Paragraph>
    </PrivacyPolicySection>
  );
};

export default PrivacyPolicy;
