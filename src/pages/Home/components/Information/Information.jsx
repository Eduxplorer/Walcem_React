import styled from "styled-components";

const WhyRecycleSection = styled.section`
  background-image: url("/img/porquereciclarbackground.png");
  background-size: cover;
  background-position: center;
  padding: 10rem 0; /* Ajuste o padding conforme necessário */
  color: white;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Alinhar à esquerda */
  max-width: 100%; /* Ajuste o tamanho conforme necessário */
  padding-left: 5%; /* Espaçamento da esquerda */
`;

const TextContent = styled.div`
  max-width: 30%;
  margin: 1rem 0;
  text-align: justify;
  font-size: 1.5rem; /* Aumenta o tamanho do texto */
  line-height: 1.6; /* Aumenta o espaçamento entre linhas */
`;

const Title = styled.h2`
  font-size: 3rem; /* Aumenta o tamanho do título */
  margin-bottom: 1rem; /* Espaçamento abaixo do título */
`;

const WhyRecycle = () => {
  return (
    <WhyRecycleSection id="why-recycle">
      <ContentContainer>
        <Title>Por que Reciclar?</Title>
        <TextContent>
          <p>
            Reciclar eletrônicos é crucial para a sustentabilidade. Isso ajuda a
            preservar recursos naturais valiosos, como metais e plásticos, que
            podem ser reutilizados em novos produtos, reduzindo a necessidade de
            extração de novos materiais. Além disso, a reciclagem diminui a
            poluição, evitando que substâncias tóxicas contaminem o solo e a
            água. 
          </p>
        </TextContent>
      </ContentContainer>
    </WhyRecycleSection>
  );
};

export default WhyRecycle;
