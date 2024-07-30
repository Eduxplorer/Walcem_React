import PropTypes from "prop-types";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-right: 15rem;
`;

const Input = styled.input`
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const Select = styled.select`
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const Button = styled.button`
  padding: 1rem;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

const SearchForm = ({ onSearch }) => {
  return (
    <FormContainer>
      <label>CEP</label>
      <Input type="text" placeholder="_____-___" />
      <label>Distância (KM)</label>
      <Input type="number" placeholder="10" />
      <label>Porte</label>
      <Select>
        <option value="pequeno">Pequeno</option>
        <option value="medio">Médio</option>
        <option value="grande">Grande</option>
      </Select>
      <label>Produto</label>
      <Select>
        <option value="selecione">Selecione o Produto</option>
        <option value="celular">Celular</option>
        <option value="computador">Computador</option>
        <option value="televisao">Televisão</option>
      </Select>
      <Button onClick={onSearch}>Encontrar Pontos</Button>
    </FormContainer>
  );
};

SearchForm.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchForm;
