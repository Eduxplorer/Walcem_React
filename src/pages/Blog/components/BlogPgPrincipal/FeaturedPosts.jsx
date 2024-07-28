import styled from 'styled-components';
import Post from './Post';
import { postsData } from '../../data/newsData'; // Use postsData se os dados de destaque estiverem aqui

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
    }
`;

const FeaturedPosts = () => {
    const FeaturedToShow = postsData.slice(0, 2); // Use postsData aqui

    return (
        <FeaturedSection>
            <FeaturedTitle>Postagens em Destaque</FeaturedTitle>
            <PostsContainer>
                {FeaturedToShow.map(post => (
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
};

export default FeaturedPosts;
