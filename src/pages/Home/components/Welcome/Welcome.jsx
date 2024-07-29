import styled, { keyframes } from "styled-components";

// Animação de pulse
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const WelcomeSectionContainer = styled.section`
  display: flex;
  background-image: url("img/welcomebackground.png");
  background-position: top;
  background-repeat: no-repeat;
  max-width: 100%;
  height: 60rem;
  align-items: center;
  background-size: contain;



  @media (max-width: 1440px) {
    padding: 0.75rem; 
    padding-top: calc(0.75rem + 8rem);
  }

  @media (max-width: 1366px) {
    padding: 0.75rem;
    padding-top: calc(0.75rem + 8rem);
  }

  @media (max-width: 1024px) {
    padding: 0.5rem;
    padding-top: calc(0.5rem + 8rem);
  }

  @media (max-width: 768px) {
    padding: 0.25rem;
    padding-top: calc(0.25rem + 8rem);
  }
`;

const WelcomeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 1.25rem 0;
  margin: 0;
 max-width: 100%;
`;

const TextAndButton = styled.div`
  max-width: 40%;
  margin-left: 2rem;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 1366px) {
    max-width: 50%;
    margin-left: 1.5rem;
  }

  @media (max-width: 1024px) {
    max-width: 60%;
    margin-left: 1rem;
  }

  @media (max-width: 768px) {
    max-width: 80%;
    margin-left: 0.5rem;
  }

  .text-home {
    display: flex;
    flex-direction: column;
  }

  #paragraph-welcome {
    color: #91bd24;
    font-size: 2.5rem;
    opacity: 0.7;

    @media (max-width: 1366px) {
      font-size: 1.6rem;
    }

    @media (max-width: 1024px) {
      font-size: 1.4rem;
    }

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }

  h1 {
    font-size: 4rem;
    color: #91bd24;
    margin-bottom: 0.5rem;

    @media (max-width: 1366px) {
      font-size: 2rem;
    }

    @media (max-width: 1024px) {
      font-size: 1.8rem;
    }

    @media (max-width: 768px) {
      font-size: 1.6rem;
    }
  }

  p {
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 1rem;
    text-align: justify;
    letter-spacing: -0.05em;

    @media (max-width: 1366px) {
      font-size: 1rem;
    }

    @media (max-width: 1024px) {
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
`;

const HomeButton = styled.div`
  margin-top: 1rem;

  button {
    width: 20.125rem;
    height: 4rem;
    margin-top: 1rem;
    padding: 0.625rem 1.25rem;
    background-color: #005700; /* Verde escuro diferente */
    color: white;
    border: none;
    border-radius: 0.625rem; /* Bordas arredondadas */
    cursor: pointer;
    font-size: 1.5625rem;
    font-weight: bold;
    animation: ${pulse} 2s infinite;

    &:hover {
      background-color: #64c62be8;
    }

    @media (max-width: 1366px) {
      width: 16rem;
      height: 3.5rem;
      font-size: 1.25rem;
    }

    @media (max-width: 1024px) {
      width: 14rem;
      height: 3rem;
      font-size: 1.1rem;
    }

    @media (max-width: 768px) {
      width: 12rem;
      height: 2.5rem;
      font-size: 1rem;
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
