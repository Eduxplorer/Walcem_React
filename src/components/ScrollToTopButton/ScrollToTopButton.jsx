import { useState, useEffect } from 'react'; // Certifique-se de que React está importado
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const ScrollToTopContainer = styled.div`
    position: fixed;
    bottom: 20px; 
    right: 20px;  
    z-index: 1000; /* Certifique-se de que o z-index é maior que o do footer */
`;

const ScrollButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px; /* Ajuste o tamanho conforme necessário */
    height: 40px; /* Ajuste o tamanho conforme necessário */
    border-radius: 50%;
    padding: 0;
    background-color: #006400; /* Cor de fundo do botão */
    color: #fff; /* Cor do ícone */
    border: none; /* Remove a borda */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Adiciona uma sombra ao botão */
    transition: background-color 0.3s ease, transform 0.3s ease;

    &:hover {
        background-color: #004d00; /* Cor do botão ao passar o mouse */
        transform: scale(1.1); /* Aumenta o botão ao passar o mouse */
    }
`;

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <ScrollToTopContainer>
            {isVisible && (
                <ScrollButton onClick={scrollToTop}>
                    <FontAwesomeIcon icon={faArrowUp} />
                </ScrollButton>
            )}
        </ScrollToTopContainer>
    );
};

export default ScrollToTopButton;
