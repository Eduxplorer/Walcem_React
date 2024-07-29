import styled from 'styled-components';
import Post from './Post';
import { postsData } from '../../data/newsData';

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

const CategoriesWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    @media (min-width: 768px) {
        /* Arrange Eventos and Soluções side by side */
        .eventos,
        .solucoes {
            flex: 1 1 calc(50% - 20px);
        }
    }
`;

const Categories = () => {
    // Filtra postagens com id >= 3
    const filteredPosts = postsData.filter(post => parseInt(post.id, 10) >= 3);

    // Pega apenas as primeiras 4 postagens filtradas
    const postsToShow = filteredPosts.slice(0, 4);

    // Organiza postagens por categoria
    const categoriesData = Array.from(new Set(postsToShow.map(post => post.category)))
        .map(category => ({
            category,
            posts: postsToShow.filter(post => post.category === category)
        }));

    return (
        <CategoriesSection>
            <CategoriesTitle>Categorias</CategoriesTitle>
            <CategoriesWrapper>
                {categoriesData.map(category => (
                    <div key={category.category} className={category.category.toLowerCase()}>
                        <h3>{category.category}</h3>
                        <PostsContainer>
                            {category.posts.map(post => (
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
                    </div>
                ))}
            </CategoriesWrapper>
        </CategoriesSection>
    );
};

export default Categories;
