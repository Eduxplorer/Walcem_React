import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

// Styled Components
const pulse = keyframes`
    0% {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    50% {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    }
    100% {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
`;

const StyledSearchBar = styled.div`
    display: flex;
    align-items: center;
    border-radius: 5px;
    overflow: hidden;
    background-color: #f1f1f1;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    z-index: 10;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

    &:hover {
        background-color: #e0e0e0;
        animation: ${pulse} 1.5s infinite;
    }
`;

const StyledInput = styled.input`
    padding: 10px;
    font-size: 16px;
    border: none;
    outline: none;
    width: 100%;
    border-radius: 5px 0 0 5px;
    cursor: text;
`;

const StyledButton = styled.button`
    padding: 10px 15px;
    background-color: #164B30;
    border: none;
    cursor: pointer;
    color: #fff;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: var(--primary-color);
        transform: scale(1.1);
    }

    i {
        font-size: 16px;
    }
`;


const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const searchFunction = () => {
        onSearch(searchQuery); // Passa a consulta de pesquisa para o componente pai
    };

    // PropTypes
    SearchBar.propTypes = {
        onSearch: PropTypes.func.isRequired,
    };
    

    return (
        <StyledSearchBar>
            <StyledInput
                type="text"
                id="search-input"
                placeholder="Pesquisar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <StyledButton onClick={searchFunction} type="button">
                <FontAwesomeIcon icon={faSearch} />
            </StyledButton>
        </StyledSearchBar>
    );
};

export default SearchBar;

