import styled from 'styled-components';
import Post from './Post';
import { categoriesData } from '../../data/newsData';

const CategoriesSection = styled.section`
    margin-bottom: 40px;
    padding: 0 20px;
`;

const CategoriesTitle = styled.h2`
    text-align: center;
    color: var(--secondary-color);
    margin-bottom: 20px;
`;

const PostsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;

    @media (min-width: 1024px) {
        justify-content: space-between;
    }
`;

const PostItem = styled.div`
    flex: 1 1 calc(100% - 40px); /* Mobile full width */
    box-sizing: border-box;
    max-width: 100%;

    @media (min-width: 600px) {
        flex: 1 1 calc(50% - 20px); /* 2 items per row */
    }

    @media (min-width: 1024px) {
        flex: 1 1 calc(25% - 20px); /* 4 items per row */
    }
`;

const Categories = () => {
    const categoriesToShow = categoriesData.slice(0, 4);

    return (
        <CategoriesSection>
            <CategoriesTitle>Categorias</CategoriesTitle>
            <PostsContainer>
                {categoriesToShow.map(post => (
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
        </CategoriesSection>
    );
};

export default Categories;
