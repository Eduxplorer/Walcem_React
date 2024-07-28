import styled from 'styled-components';
import PrivacyPolicy from './Privacy/PrivacyPolicy';

const Main = styled.main`
  width: 80%;
  max-width: 1920px;
  margin: 5% auto;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #fff;
  animation: fadeIn 1s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 1920px) {
    width: 70%;
  }

  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 992px) {
    width: 90%;
  }

  @media (max-width: 768px) {
    width: 95%;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    width: 100%;
    padding: 0.5rem;
  }
`;

const PrivacyPolicyPage = () => {
  return (
    <Main>
      <PrivacyPolicy />
    </Main>
  );
};

export default PrivacyPolicyPage;
