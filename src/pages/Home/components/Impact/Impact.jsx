import styled from "styled-components";

const ImpactSectionContainer = styled.section`
  background-color: white;
  padding: 3rem 0;
  color: #77b0aa;
  margin-top: -6rem; /* Ajuste do margin-top */
  width: 100%;
  margin: 100px 0;

  @media (max-width: 1024px) {
    padding: 8rem 0;
  }

  @media (max-width: 768px) {
    padding: 6rem 0;
  }

  @media (max-width: 480px) {
    padding: 4rem 0;
  }
`;

const ImpactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: auto;
  padding: 0 1rem;
`;

const ImpactTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 5rem;
  color: #37474f;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
    margin-bottom: 4rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
`;

const ImpactsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TextsColumn = styled.div`
  flex: 1;
  padding-right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 4rem; /* Espaçamento entre os blocos de texto e imagem correspondentes */

  @media (max-width: 1024px) {
    padding-right: 0;
    margin-bottom: 3rem;
    gap: 3rem;
  }

  h3 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #37474f;

    @media (max-width: 1024px) {
      font-size: 2.2rem;
    }

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.8rem;
    }
  }
`;

const ImagesColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* Alinhar imagens à direita */
  margin-left: 2rem; /* Mover para a direita */
  gap: 5rem; /* Espaçamento entre as imagens */

  @media (max-width: 1024px) {
    align-items: center;
    margin-left: 0;
    gap: 3rem;
  }
`;

const ImpactText = styled.div`
  text-align: left;
  font-size: 2rem;
  line-height: 1.6;

  @media (max-width: 1024px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
  }

  p {
    margin-top: 0.5rem;

    @media (max-width: 480px) {
      margin-top: 0.3rem;
    }
  }
`;

const ImpactImage = styled.div`
  img {
    max-width: 100%;
    height: 15rem;

    @media (max-width: 1024px) {
      max-width: 10rem;
    }

    @media (max-width: 768px) {
      max-width: 8rem;
    }

    @media (max-width: 480px) {
      max-width: 6rem;
    }
  }
  &:nth-child(2) {
    margin-top: 1rem; /* Reduzida a margem superior */
  }

  &:nth-child(3) {
    margin-top: 1rem; /* Reduzida a margem superior */
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
