
import styled from 'styled-components';
import LoginForm from './LoginForm';

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

const RightSide = () => {
  return (
    <Side style={{ backgroundImage: 'url(./img/reciclagem.png)' }}>
      <ImageSection>
        <LoginForm />
      </ImageSection>
    </Side>
  );
};

export default RightSide;
