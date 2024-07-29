import styled from "styled-components";

const AboutUsSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10rem 1rem;
  background-color: #070707;
  background-image: url("img/aboutusilustrationbackground.png");
  background-size: cover; /* Alterado de contain para cover */
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  width: 100vw; /* Certificar-se de que ocupa toda a largura da tela */
  height: 100vh; /* Certificar-se de que ocupa toda a altura da tela */

  @media (max-width: 1920px) {
    padding: 8rem 1rem;
  }

  @media (max-width: 1440px) {
    padding: 6rem 1rem;
  }

  @media (max-width: 1024px) {
    padding: 4rem 1rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 1rem;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Container = styled.div`
  max-width: 800px; /* Aumentado para centralizar mais */
  width: 100%;
  margin: 0 2rem; /* Ajustado para não ficar muito no canto */
  text-align: left;
  padding: 0 2rem;
  z-index: 2; /* Garantir que o texto esteja acima do overlay */

  @media (max-width: 1920px) {
    margin: 0 1.5rem;
  }

  @media (max-width: 1440px) {
    margin: 0 1rem;
  }

  @media (max-width: 1024px) {
    margin: 0 0.5rem;
  }

  @media (max-width: 768px) {
    margin: 0;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    margin: 0;
    padding: 0 1rem;
  }
`;

const Title = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: #91bd24;
  text-shadow: 2px 2px black;

  @media (max-width: 1920px) {
    font-size: 3rem;
  }

  @media (max-width: 1440px) {
    font-size: 2.5rem;
  }

  @media (max-width: 1024px) {
    font-size: 2rem;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const Text = styled.p`
  font-size: 2rem;
  line-height: 1.6;
  color: #ccc;
  margin-bottom: 2rem;
  font-weight: bold;
  text-shadow: 2px 2px black;
  text-align: justify;

  @media (max-width: 1920px) {
    font-size: 1.8rem;
  }

  @media (max-width: 1440px) {
    font-size: 1.5rem;
  }

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    text-align: justify;
  }
`;

const AboutUs = () => {
  return (
    <AboutUsSection id="about">
      <Overlay />
      <Container>
        <Title>Sobre Nós</Title>
        <Text>
          A Reciclagem Walcem é uma empresa composta por um grupo de estudantes
          dedicados a resolver o problema de descarte inadequado de resíduos
          eletrônicos. A iniciativa surgiu em uma aula focada na criação de
          ideias para ajudar o mundo, onde os alunos pensaram no problema do
          lixo eletrônico, que, quando descartado de forma inadequada, libera
          substâncias tóxicas prejudiciais ao meio ambiente e à saúde humana. Em
          resposta a essa necessidade urgente, os estudantes desenvolveram uma
          solução digital para promover a reciclagem eficiente e acessível de
          dispositivos eletrônicos como computadores, celulares e tablets.
        </Text>
      </Container>
    </AboutUsSection>
  );
};

export default AboutUs;

