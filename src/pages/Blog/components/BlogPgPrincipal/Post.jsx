
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const PostContainer = styled.div`
    width: 100%;
    margin-bottom: 20px;
    padding: 20px;
    border: 1px solid #90ee90;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    perspective: 1000px;
    min-height: 300px;

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
    line-height: 1.2em;
`;

const PostDescription = styled.p`
    font-size: 14px;
    line-height: 1.5;
    color: var(--dark-gray);
    flex-grow: 1;
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
