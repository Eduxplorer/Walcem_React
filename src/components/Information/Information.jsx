
import styled from 'styled-components';

const InformationSectionContainer = styled.section`
  text-align: center;
  margin: 18.75rem 0;
`;

const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextAndIcons = styled.div`
  display: flex;
  height: 12.5rem;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
`;

const TextAndIconsText = styled.div`
  max-width: 23.75rem;
  margin: 0 1.25rem;
  text-align: justify;
`;

const Icon = styled.div`
  flex-shrink: 0;
`;

const InformationSection = () => {
  return (
    <InformationSectionContainer id="informacoes">
      <InformationContainer className="information">
        <h2>Por que Reciclar</h2>
        <TextAndIcons className="text-and-icons">
          <Icon className="icon left">
            <img src="/img/ondescartar.png" alt="onde descartar" />
          </Icon>
          <TextAndIconsText>
            <p>
              Reciclar eletrônicos ajuda a preservar recursos naturais, reduz a poluição e diminui a quantidade de lixo nos aterros.
            </p>
          </TextAndIconsText>
          <Icon className="icon right">
            <img src="/img/questionicon.png" alt="ícone de questão" />
          </Icon>
        </TextAndIcons>
      </InformationContainer>
    </InformationSectionContainer>
  );
};

export default InformationSection;
