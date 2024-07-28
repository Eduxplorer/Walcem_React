import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PostDetail from './components/PostDetail/PostDetail';
import NewsCarousel from './components/PostDetail/NewsCarousel';
import CommentsSection from './components/PostDetail/CommentsSection';

// Styled component for main
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

  @media (min-width: 1920px) {
    margin: 5% auto;
    padding: 30px;
  }

  @media (max-width: 1920px) {
    margin: 10% auto;
    padding: 20px;
  }

  @media (max-width: 1440px) {
    margin: 12% auto;
    padding: 18px;
  }

  @media (max-width: 1024px) {
    margin: 15% auto;
    padding: 15px;
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

const BlogPostPage = () => {
  const { id } = useParams(); // Obtém o id do post da URL

  return (
    <Main>
      <PostDetail id={id} />
      <NewsCarousel />
      <CommentsSection postId={id} />
    </Main>
  );
};

export default BlogPostPage;
