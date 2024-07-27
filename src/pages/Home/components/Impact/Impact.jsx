import styled from "styled-components";

const ImpactSectionContainer = styled.section`
  background-color: white;
  padding: 10rem 0;
  color: #77b0aa; /* Cor do texto para contraste com o fundo branco */
`;

const ImpactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: auto;
`;

const ImpactTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 5rem;
  color: #37474f;
`;

const ImpactsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

const TextsColumn = styled.div`
  flex: 1;
  padding-right: 2rem;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #37474f;
  }
`;

const ImagesColumn = styled.div`
  flex: 1;
  gap: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const ImpactText = styled.div`
  margin-bottom: 2rem;
  text-align: left;
  font-size: 2rem;
  line-height: 1.6;
`;

const ImpactImage = styled.div`
  margin-bottom: 2rem;

  img {
    max-width: 12.5rem;
    height: auto;
  }
`;

const ImpactSection = () => {
  return (
    <ImpactSectionContainer id="impactoambiental">
      <ImpactContainer>
        <ImpactTitle>O Impacto Ambiental do Lixo Eletrônico</ImpactTitle>
        <ImpactsWrapper>
          <TextsColumn>
            <ImpactText>
              <h3>Contaminação do Solo e da Água</h3>
              <p>
                O lixo eletrônico libera metais pesados e substâncias tóxicas
                que contaminam solo e água, prejudicando ecossistemas e saúde
                humana.
              </p>
            </ImpactText>
            <ImpactText>
              <h3>Esgotamento de Recursos Naturais</h3>
              <p>
                Descartar eletrônicos desperdiça metais preciosos. A reciclagem
                recupera esses materiais, reduzindo a necessidade de extração de
                novos recursos.
              </p>
            </ImpactText>
            <ImpactText>
              <h3>Emissão de Gases de Efeito Estufa</h3>
              <p>
                A decomposição e incineração de eletrônicos emitem gases de
                efeito estufa. A reciclagem diminui essas emissões e a energia
                necessária para fabricar novos dispositivos, ajudando a combater
                o aquecimento global.
              </p>
            </ImpactText>
          </TextsColumn>
          <ImagesColumn>
            <ImpactImage>
              <img src="/img/aguacontaminada.png" alt="água contaminada" />
            </ImpactImage>
            <ImpactImage>
              <img
                src="/img/esgotamentoderecursos.png"
                alt="recursos naturais"
              />
            </ImpactImage>
            <ImpactImage>
              <img
                src="/img/planetaesquentando.png"
                alt="planeta esquentando"
              />
            </ImpactImage>
          </ImagesColumn>
        </ImpactsWrapper>
      </ImpactContainer>
    </ImpactSectionContainer>
  );
};

export default ImpactSection;
