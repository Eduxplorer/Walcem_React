
import styled from 'styled-components';
import FeaturedPosts from './components/BlogPgPrincipal/FeaturedPosts';
import Categories from './components/BlogPgPrincipal/Categories';
import { postsData } from './data/newsData';

// Styled components
const Main = styled.main`
  width: 90%;
  max-width: 1920px;
  margin: 10% auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 1px solid #90ee90;
  border-radius: 10px;
  background-color: #fff;
  animation: fadeIn 2s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    margin: 20% auto;
    padding: 10px;
  }

  @media (max-width: 480px) {
    margin: 30% auto;
    padding: 5px;
  }
`;

const Blog = () => {
  return (
    <Main>
      <FeaturedPosts posts={postsData.slice(0, 2)} />
      <Categories />
    </Main>
  );
};

export default Blog;
