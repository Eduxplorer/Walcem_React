import styled from "styled-components";

const WhyRecycleSection = styled.section`
margin-top: -6rem;
  position: relative;
  background-image: url("/img/porquereciclarbackground.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  padding: 10rem 0;
  color: white;
  min-height: 100vh; /* Garante altura mínima */

  @media (max-width: 1024px) {
    padding: 8rem 0;
    min-height: 80vh;
  }

  @media (max-width: 768px) {
    padding: 6rem 0;
    min-height: 60vh;
  }

  @media (max-width: 480px) {
    padding: 4rem 0;
    min-height: 50vh;
  }
`;

const ContentContainer = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 100%;
  padding-left: 2rem;

  @media (max-width: 1024px) {
    max-width: 80%;
    padding-left: 4%;
  }

  @media (max-width: 768px) {
    max-width: 95%;
    padding-left: 3%;
  }

  @media (max-width: 480px) {
    padding-left: 2%;
  }
`;

const TextContent = styled.div`
  max-width: 40%;
  margin-top: 20%
  text-align: justify;
  font-size: 1.1rem;
  line-height: 1.6;

  @media (max-width: 1024px) {
    max-width: 40%;
    font-size: 1.4rem;
  }

  @media (max-width: 768px) {
    max-width: 60%;
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    max-width: 90%;
    font-size: 1.2rem;
  }
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
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
