import styled from 'styled-components';
import maintenanceImg from '../../public/img/desculpe.png'; // Ajuste o caminho da imagem conforme necessário

const MaintenanceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
  text-align: center;
  margin-top: 2rem;


  img {
    margin-top: 7rem;
    max-width: 100%;
    height: auto;
  }

  h1 {
    margin: 1rem 0 0.5rem 0; /* Ajusta o espaçamento superior e inferior do título */
    font-size: 2rem;
    color: #333;
  }

  p {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 2rem;
  }
`;

const MaintenancePage = () => {
  return (
    <MaintenanceWrapper>
      <img src={maintenanceImg} alt="Manutenção" />
      <h1>Estamos em Manutenção</h1>
      <p>Desculpe pelo inconveniente. Estamos trabalhando para melhorar o nosso serviço.</p>
    </MaintenanceWrapper>
  );
};

export default MaintenancePage;
