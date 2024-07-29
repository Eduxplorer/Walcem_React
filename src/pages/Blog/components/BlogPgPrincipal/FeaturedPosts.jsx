
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Post from './Post';

const FeaturedSection = styled.section`
    margin-bottom: 40px;
    padding: 0 20px;
`;

const FeaturedTitle = styled.h2`
    text-align: center;
    color: var(--secondary-color);
    margin-bottom: 20px;
`;

const PostsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;

    @media (min-width: 768px) {
        justify-content: space-between;
    }
`;

const PostItem = styled.div`
    flex: 1 1 calc(100% - 40px); /* Mobile full width */
    box-sizing: border-box;
    max-width: 100%;

    @media (min-width: 768px) {
        flex: 1 1 calc(50% - 20px); /* 2 items per row */
        max-width: calc(50% - 20px); /* Ensure consistent size */
    }
`;

const FeaturedPosts = ({ posts }) => (
    <FeaturedSection>
        <FeaturedTitle>Postagens em Destaque</FeaturedTitle>
        <PostsContainer>
            {posts.map(post => (
                <PostItem key={post.id}>
                    <Post
                        imgSrc={post.imgSrc}
                        title={post.title}
                        description={post.description}
                        id={post.id}
                    />
                </PostItem>
            ))}
        </PostsContainer>
    </FeaturedSection>
);

FeaturedPosts.propTypes = {
    posts: PropTypes.arrayOf(
        PropTypes.shape({
            imgSrc: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default FeaturedPosts;
