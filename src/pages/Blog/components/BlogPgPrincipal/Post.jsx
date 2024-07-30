import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PostContainer = styled.div`
    width: 100%;
    height: auto; /* Altura automática para permitir flexibilidade */
    min-height: 350px; /* Altura mínima para todos os cards */
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #90ee90;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    perspective: 1000px;
    box-sizing: border-box;
    max-width: 100%; /* Ajustado para 100% da largura disponível */

    &:hover {
        transform: scale(1.05) translateZ(10px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    }

    &.hidden {
        display: none;
    }

    &.visible {
        display: flex;
    }

    @media (min-width: 1920px) and (max-width: 1080px) {
        max-width: 400px; /* Ajuste a largura máxima para a resolução especificada */
    }
`;

const PostImage = styled.img`
    width: 100%;
    height: 200px; /* Altura fixa para todas as imagens */
    object-fit: fill; /* Ajusta a imagem para preencher o contêiner sem distorção */
    border-radius: 8px 8px 0 0;
    margin-bottom: 15px;

    @media (min-width: 1920px) and (max-width: 1080px) {
        width: 48%;
        height: 180px; /* Altura fixa para todas as imagens */
        object-fit: cover; /* Ajusta a imagem para preencher o contêiner sem distorção */
        border-radius: 8px 8px 0 0;
        margin-bottom: 15px;
    }
`;

const PostTitle = styled.h3`
    font-size: 20px;
    color: var(--text-color);
    margin-bottom: 16px;
    line-height: 1.2em;
    overflow: hidden; /* Garante que o título não ultrapasse o contêiner */
    text-overflow: ellipsis; /* Adiciona reticências se o texto for muito longo */
    white-space: nowrap; /* Impede a quebra de linha */
`;

const PostDescription = styled.p`
    font-size: 14px;
    line-height: 1.5;
    color: var(--dark-gray);
    flex-grow: 1;
    overflow: hidden; /* Garante que a descrição não ultrapasse o contêiner */
    text-overflow: ellipsis; /* Adiciona reticências se o texto for muito longo */
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Limita a descrição a 3 linhas */
    -webkit-box-orient: vertical; /* Faz com que a descrição se comporte como um bloco */
`;

const ReadMoreLink = styled(Link)`
    font-size: 14px;
    align-self: flex-end;
    display: inline-block;
    margin-top: 16px;
    padding: 10px 20px;
    background-color: #006400;
    color: #fff;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #004d00;
        color: #90ee90;
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`;

const Post = ({ imgSrc, title, description, id }) => (
    <PostContainer>
        <PostImage src={imgSrc} alt={title} />
        <PostTitle>{title}</PostTitle>
        <PostDescription>{description}</PostDescription>
        <ReadMoreLink to={`/post/${id}`}>Leia Mais</ReadMoreLink>
    </PostContainer>
);

Post.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default Post;
