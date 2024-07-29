import { useState, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { postsData } from '../../pages/Blog/data/newsData.jsx'; // Ajuste o caminho conforme necessário

// Styled Components
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
    background-color: #164b30;
    border: none;
    border-radius: 30%;
    cursor: pointer;
    color: #fff;
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: #0d2b1d;
        transform: scale(1.1);
    }
`;

const SearchBar = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);

    const searchFunction = useCallback(async () => {
        if (searchQuery.trim() === '') {
            toast.warning('Por favor, insira um termo de pesquisa.', { autoClose: 2000 });
            return;
        }

        setIsSearching(true);
        try {
            // Realiza a busca local
            const results = postsData.filter(post =>
                post.title.toLowerCase().includes(searchQuery.toLowerCase())
            );

            if (results.length === 0) {
                toast.info('Nenhum resultado encontrado.', { autoClose: 2000 });
            } else {
                // Chama a função onSearch apenas se houver resultados
                onSearch(results);
            }
        } catch (error) {
            toast.error('Ocorreu um erro durante a busca. Tente novamente.', { autoClose: 2000 });
        } finally {
            setIsSearching(false);
        }
    }, [searchQuery, onSearch]);

    const handleSearchClick = (e) => {
        e.preventDefault();
        searchFunction();
    };

    return (
        <>
            <StyledSearchBar>
                <StyledInput
                    type="text"
                    id="search-input"
                    placeholder="Pesquisar..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <StyledButton onClick={handleSearchClick} type="button" disabled={isSearching}>
                    <FontAwesomeIcon icon={faSearch} />
                </StyledButton>
            </StyledSearchBar>
            <ToastContainer />
        </>
    );
};

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
