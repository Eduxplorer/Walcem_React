import styled from "styled-components";
// import post1 from "public/img/recilagemfacilitada.jpg";
// import post2 from "public/img/acessenossoblog.jpg";
// import post3 from "public/img/saibacomolucrar.jpg";

// Estilos para a seção de missão
const MissionSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 1rem;
  background-color: #ffffff;
  text-align: center;

  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`;

// Contêiner para o texto
const TextContainer = styled.div`
  flex: 1;
  max-width: 500px;
  margin-bottom: 3rem;
  margin-left: 2rem;
  padding: 4rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 2rem;
  }
`;

// Título da missão
const Title = styled.h2`
  font-size: 2.5rem;
  color: #4d6183;
  font-weight: bold;
  margin-bottom: 1rem;
`;

// Texto de descrição
const Description = styled.p`
  font-size: 1.2rem;
  color: #4d6183;
  line-height: 1.6;
  text-align: justify;
`;

// Contêiner para as imagens
const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  margin-right: 10rem;
`;

// Estilo das imagens
const Image = styled.img`
  width: 360px;
  height: 600px;

  background-color: #f7f5f9;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    width: 360px;
    height: 600px;
  }
`;

const Mission = () => {
  return (
    <MissionSection>
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
          src="img/saibacomolucrar.png"
          alt="Descubra como lucrar com a reciclagem"
        />
      </ImageContainer>
    </MissionSection>
  );
};

export default Mission;
