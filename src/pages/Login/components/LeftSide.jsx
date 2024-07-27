
import styled from 'styled-components';

const Side = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
`;

const ImageSection = styled.div`
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: 100%;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #070707;
`;

const Subtitle = styled.h2`
  margin-bottom: 20px;
  color: #070707;
`;

const Button = styled.button`
  background-color: #66bb6a;
  border: none;
  color: white;
  padding: 15px 20px;
  margin-bottom: 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  &:hover {
    background-color: #4caf50;
  }
`;

const LeftSide = () => {
  return (
    <Side style={{ backgroundImage: 'url(./img/login.png)' }}>
      <ImageSection>
        <Title>Bem Vindo(a)!</Title>
        <Subtitle>Novo Por Aqui?</Subtitle>
        <Button className="create-account-btn">Criar Conta</Button>
        <Subtitle>Empresas</Subtitle>
        <Button className="register-company-btn">Cadastre Sua Empresa</Button>
      </ImageSection>
    </Side>
  );
};

export default LeftSide;
