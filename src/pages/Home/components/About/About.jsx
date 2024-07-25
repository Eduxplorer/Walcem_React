import styled from "styled-components";

const AboutUsSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10rem 1rem;
  background-color: #fff;
  background-image: url("img/aboutusilustrationbackground.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 10rem 0 0;
  text-align: left;
  padding: 0 2rem;
`;

const Title = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: #91bd24;
  text-shadow: 2px 2px black;
`;

const Text = styled.p`
  font-size: 2rem;
  line-height: 1.6;
  color: #fff;
  margin-bottom: 2rem;
  font-weight: bold;
  text-shadow: 2px 2px black;
  text-align: justify;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const AboutUs = () => {
  return (
    <AboutUsSection>
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
