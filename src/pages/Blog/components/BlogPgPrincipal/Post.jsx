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
    min-height: 350px;

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
    height: auto;
    max-height: 200px;
    object-fit: cover;
    border-radius: 8px 8px 0 0;
    margin-bottom: 15px;
`;

const PostTitle = styled.h3`
    font-size: 20px;
    color: var(--text-color);
    margin-bottom: 8px;
    white-space: normal;
    overflow: visible;
    text-overflow: ellipsis; /* Add ellipsis (...) */
    line-height: 1.2em;
`;

const PostDescription = styled.p`
    font-size: 14px;
    color: var(--text-secondary-color);
    margin-bottom: 16px;
    line-height: 1.4;
`;

const Post = ({ imgSrc, title, description }) => (
    <PostContainer>
        <PostImage src={imgSrc} alt={title} />
        <PostTitle>{title}</PostTitle>
        <PostDescription>{description}</PostDescription>
    </PostContainer>
);

Post.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default Post;
