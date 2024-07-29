import styled, { keyframes } from "styled-components";

// Animação para as imagens
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

// Estilos para a seção de missão
const MissionSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  background-color: #ffffff;
  text-align: center;
  margin-top: -4rem; /* Ajuste para ficar mais perto da seção de boas-vindas */

  @media (min-width: 1920px) {
    padding: 10rem 6rem;
  }

  @media (min-width: 1440px) {
    padding: 8rem 4rem;
  }

  @media (min-width: 1024px) {
    padding: 8rem 4rem;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
    padding: 6rem 2rem;
  }
`;

// Contêiner para o texto
const TextContainer = styled.div`
  flex: 1;
  width: 100%;
  max-width: auto; /* Alinhar com o tamanho das imagens */
  height: auto; /* Ajustar a altura para ser igual à das imagens */
  margin-bottom: 3rem;
  padding: 2rem;
  margin-top: -1rem; /* Ajuste conforme necessário */

  @media (min-width: 1920px) {
    max-width: 350px;
    padding: 4rem;
    margin-top: -2rem; /* Ajuste conforme necessário */
  }

  @media (min-width: 1440px) {
    max-width: 330px;
    padding: 4rem;
    margin-top: -2rem; /* Ajuste conforme necessário */
  }

  @media (min-width: 1024px) {
    max-width: auto;
    padding: 1rem;
    margin-top: -1rem; /* Ajuste conforme necessário */
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 2rem;
    margin-top: -1rem; /* Ajuste conforme necessário */
  }
`;


// Título da missão
const Title = styled.h2`
  font-size: 2.5rem;
  color: #4d6183;
  font-weight: bold;
  margin-bottom: 1rem;

  @media (min-width: 1920px) {
    font-size: 3.5rem;
  }

  @media (min-width: 1440px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

// Texto de descrição
const Description = styled.p`
  font-size: 1.2rem;
  color: #4d6183;
  line-height: 1.2;
  text-align: justify;

  @media (min-width: 1920px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1440px) {
    font-size: 1.6rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.1rem;
  }
`;

// Contêiner para as imagens
const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  max-width: 100%;

  @media (min-width: 768px) {
    gap: 1.5rem;
    flex-wrap: nowrap;
  }
`;

// Estilo das imagens com a mesma animação
const Image = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  background-color: #f7f5f9;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${bounce} 2s infinite;

  @media (min-width: 1920px) {
    max-width: 350px;
  }

  @media (min-width: 1440px) {
    max-width: 330px;
  }

  @media (min-width: 1024px) {
    max-width: 300px;
  }

  @media (min-width: 768px) {
    max-width: 260px;
  }
`;

const Mission = () => {
  return (
    <MissionSection id="missão">
      <TextContainer>
        <Title>Nossa missão</Title>
        <Description>
          Nossa missão é auxiliar as pessoas no descarte correto de lixo
          eletrônico e fornecer uma plataforma de fácil acesso para que todos
          possam entender e conhecer melhor essa causa global. Sabemos que o
          lixo eletrônico é um dos resíduos que mais crescem no mundo e que seu
          descarte inadequado pode causar danos significativos ao meio ambiente
          e à saúde pública. Por isso, estamos comprometidos em educar e
          capacitar as pessoas sobre a importância do manejo adequado desses
          materiais. Nossa plataforma oferece informações detalhadas sobre como
          descartar dispositivos eletrônicos de forma segura e responsável, além
          de fornecer dados atualizados sobre os impactos do lixo eletrônico em
          nosso planeta.
        </Description>
      </TextContainer>
      <ImageContainer>
        <Image
          src="/img/reciclagemfacilitada.jpg"
          alt="Acesse nosso mapa interativo"
        />
        <Image
          src="/img/acessenossoblog.jpg"
          alt="Saiba como reciclar eletrônicos"
        />
        <Image
          src="/img/saibacomolucrar.png"
          alt="Descubra como lucrar com a reciclagem"
        />
      </ImageContainer>
    </MissionSection>
  );
};

export default Mission;
