import PropTypes from "prop-types";
import styled from "styled-components";

const ContainerWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 500px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
