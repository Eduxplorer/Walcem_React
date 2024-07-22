import styled from "styled-components";

const ImpactSectionContainer = styled.section`
  margin: 12.5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const ImpactContainer = styled.div`
  width: 100%;
`;

const ImpactTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.875rem;
`;

const ImpactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ImpactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 0.625rem 0;
`;

const ImpactText = styled.div`
  flex: 1;
  text-align: left;
`;

const ImpactImage = styled.div`
  flex-shrink: 0;
  margin-left: 28.125rem;

  img {
    max-width: 9.375rem;
    height: auto;
  }
`;

const ImpactSection = () => {
  return (
    <ImpactSectionContainer id="impactoambiental">
      <ImpactContainer className="impact">
        <ImpactTitle>O Impacto Ambiental</ImpactTitle>
        <ImpactsContainer className="impacts-container">
          <ImpactItem className="impacts">
            <ImpactText className="text">
              <p>
                Os resíduos eletrônicos contêm substâncias tóxicas que podem
                contaminar o solo e a água.
              </p>
            </ImpactText>
            <ImpactImage className="image">
              <img src="/img/aguacontaminada.png" alt="água contaminada" />
            </ImpactImage>
          </ImpactItem>
          <ImpactItem className="impacts">
            <ImpactText className="text">
              <p>Reciclar ajuda a reduzir a extração de recursos naturais.</p>
            </ImpactText>
            <ImpactImage className="image">
              <img src="/img/recursosnaturais.png" alt="recursos naturais" />
            </ImpactImage>
          </ImpactItem>
          <ImpactItem className="impacts">
            <ImpactText className="text">
              <p>O descarte inadequado contribui para o aquecimento global.</p>
            </ImpactText>
            <ImpactImage className="image">
              <img
                src="/img/planetaesquentando.png"
                alt="planeta esquentando"
              />
            </ImpactImage>
          </ImpactItem>
        </ImpactsContainer>
      </ImpactContainer>
    </ImpactSectionContainer>
  );
};

export default ImpactSection;
