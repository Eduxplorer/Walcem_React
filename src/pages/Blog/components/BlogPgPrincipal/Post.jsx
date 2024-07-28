import PropTypes from 'prop-types';
import styled from 'styled-components';

const PostContainer = styled.div`
    width: 100%;
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #90ee90;
    border-radius: 10px;
    display: flex;
    flex-direction: column; /* Permite que os filhos usem flexbox para posicionamento */
    justify-content: space-between; /* Empurra o botão para o final do contêiner */
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    perspective: 1000px; /* Adiciona a propriedade perspective ao contêiner para dar a sensação de profundidade */

    &:hover {
        transform: scale(1.05) translateZ(10px); /* Faz o card "vir para frente" ao passar o mouse */
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    }

    &.hidden {
        display: none;
    }

    &.visible {
        display: flex;
    }
`;

const PostImage = styled.img`
    width: 100%;
    height: 200px;
    max-height: 400px;
    object-fit: fill;
    border-radius: 8px 8px 0 0;
    margin-bottom: 15px;
`;

const PostTitle = styled.h3`
    font-size: 20px;
    color: var(--text-color);
    margin-bottom: 16px;
`;

const PostDescription = styled.p`
    font-size: 14px;
    line-height: 1.5;
    color: var(--dark-gray);
    flex-grow: 1;
`;

const PostLink = styled.a`
    font-size: 14px;
    align-self: flex-end;
    display: inline-block;
    margin-top: 16px;
    padding: 10px 20px;
    background-color: #006400;
    color: #fff;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        background-color: #004d00;
        color: #90ee90;
        transform: translateY(-5px);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
`;

const Post = ({ imgSrc, title, description, id }) => {
    return (
        <PostContainer>
            <PostImage src={imgSrc} alt={title} />
            <PostTitle>{title}</PostTitle>
            <PostDescription>{description}</PostDescription>
            <PostLink href={`/posts/${id}`}>Leia mais</PostLink>
        </PostContainer>
    );
};

// Definindo a validação das props
Post.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default Post;
