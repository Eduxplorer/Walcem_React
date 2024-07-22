import styled from "styled-components";

const WelcomeSectionContainer = styled.section`
  padding: 1.25rem;
`;

const WelcomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 0;
  margin: 12.5rem 0;
`;

const TextAndButton = styled.div`
  max-width: 60%;

  .text-home {
    width: 60%;
    margin: 1.875rem;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 1.25rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 1.25rem;
  }
`;

const HomeButton = styled.div`
  margin-top: 1.25rem;

  button {
    width: 20.125rem;
    height: 4rem;
    padding: 0.625rem 1.25rem;
    margin: 1.875rem;
    background-color: var(--main-color);
    color: white;
    border: none;
    border-radius: 0.3125rem;
    cursor: pointer;
    font-size: 1.5625rem;
    font-weight: bold;

    &:hover {
      background-color: #64c62be8;
    }
  }
`;

const TreeImage = styled.div`
  img {
    height: 32rem;
    margin-right: 1.875rem;
  }
`;


const WelcomeSection = () => {
  return (
    <WelcomeSectionContainer>
      <WelcomeContainer>
        <TextAndButton>
          <div className="text-home">
            <p id="paragraph-welcome">Bem-vindo a</p>
            <h1>Reciclagem Walcem</h1>
          </div>
          <p>
            A Reciclagem Walcem é um site que tem o objetivo de proporcionar
            ferramentas para auxiliá-lo no descarte adequado de lixo eletrônico,
            além de oferecer informações detalhadas sobre dispositivos e
            componentes eletrônicos.
          </p>
          <HomeButton>
            <button>Verificar Coleta</button>
          </HomeButton>
        </TextAndButton>
        <TreeImage>
          <img src="/img/arvorehome.png" alt="arvore da home" />
        </TreeImage>
      </WelcomeContainer>
    </WelcomeSectionContainer>
  );
};

export default WelcomeSection;
