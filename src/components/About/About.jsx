
import styled from 'styled-components';

const AboutSectionContainer = styled.section`
  margin: 12.5rem 0;
  max-width: 120rem;
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1.25rem;
`;

const AboutTextAndIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12.5rem;
`;

const AboutIcon = styled.div`
  flex: 0 0 auto;
`;

const AboutTextContent = styled.div`
  flex: 1;
  padding: 0 1.25rem;

  p {
    color: #77b0aa;
    text-align: center;
    font-size: 1.5rem;
    line-height: 1.6;
  }
`;

const AboutSection = () => {
  return (
    <AboutSectionContainer id="sobre">
      <AboutContainer className="sobre-about">
        <AboutTitle>Sobre Nós</AboutTitle>
        <AboutTextAndIcons className="sobre-text-and-icons">
          <AboutIcon className="sobre-icon">
            <img src="/img/redes.png" alt="redes" />
          </AboutIcon>
          <AboutTextContent className="sobre-text-content">
            <p>
              Somos uma equipe comprometida com a sustentabilidade e a preservação do meio ambiente através da reciclagem de resíduos eletrônicos.
            </p>
          </AboutTextContent>
          <AboutIcon className="sobre-icon">
            <img src="/img/redes2.png" alt="redes 2" />
          </AboutIcon>
        </AboutTextAndIcons>
      </AboutContainer>
    </AboutSectionContainer>
  );
};

export default AboutSection;
