import styled from "styled-components";

const WelcomeSectionContainer = styled.section`
  padding: 1.25rem;
  background-image: url("img/welcomebackground.png");
`;

const WelcomeContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1.25rem 0;
  margin: 12.5rem 0;
`;

const TextAndButton = styled.div`
  max-width: 60%;
  margin: 0 2rem;
  width: 850px;


  .text-home {
    display: flex;
    flex-direction: column;
  }

  #paragraph-welcome {
    color: #91BD24;
    font-size: 2.5rem;
    opacity: 0.7;
  }

  h1 {
    font-size: 4rem;
    color: #91BD24;
    margin-bottom: 1.25rem;
  }

  p {
    font-size: 2rem;
    color: #fff;
    margin-bottom: 1.25rem;
    text-align: justify;
  }
`;

const HomeButton = styled.div`
  margin-top: 1.25rem;

  button {
    width: 20.125rem;
    height: 4rem;
    margin-top: 1.25rem;
    padding: 0.625rem 1.25rem;
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

const WelcomeSection = () => {
  return (
    <WelcomeSectionContainer>
      <WelcomeContainer>
        <TextAndButton>
          <div className="text-home">
            <h2 id="paragraph-welcome">Bem-vindo a</h2>
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
      </WelcomeContainer>
    </WelcomeSectionContainer>
  );
};

export default WelcomeSection;
