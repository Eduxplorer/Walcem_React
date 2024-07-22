
import styled from 'styled-components';

const MissionSectionContainer = styled.section`
  margin: 12.5rem 0;
`;

const MissionContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TextContainer = styled.div`
  flex: 1;
  margin-right: 4.375rem;
  margin-left: 1.25rem;

  h2 {
    margin-bottom: 1.25rem;
    font-size: 2rem;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 1.25rem;
  }
`;

const ImagesContainer = styled.div`
  display: flex;
  height: 30.75rem;
  gap: 2.875rem;

  img {
    border-radius: 0.625rem;
  }
`;

const MissionSection = () => {
  return (
    <MissionSectionContainer id="missao">
      <MissionContainer className="mission">
        <TextContainer className="text-container">
          <h2>Nossa Missão</h2>
          <p>
            A nossa missão é proporcionar uma destinação correta para os resíduos eletrônicos, contribuindo para a preservação do meio ambiente.
          </p>
        </TextContainer>
        <ImagesContainer className="images-container">
          <img src="/img/descartecorreto.png" alt="descarte correto" />
          <img src="/img/façadoseumeioambiente.png" alt="faça do seu meio ambiente" />
        </ImagesContainer>
      </MissionContainer>
    </MissionSectionContainer>
  );
};

export default MissionSection;
