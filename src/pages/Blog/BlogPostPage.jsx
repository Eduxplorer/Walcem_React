import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import PostDetail from './components/PostDetail/PostDetail';
import NewsCarousel from './components/PostDetail/NewsCarousel';
import CommentsSection from './components/PostDetail/CommentsSection';

const Main = styled.main`
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
  const { id: postId } = useParams();
  
  // Supondo que você tenha uma função para obter os posts
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Função para buscar posts
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts'); // Atualize a URL conforme necessário
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Falha ao buscar postagens', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <Main>
      <PostDetail id={postId} />
      <NewsCarousel posts={posts} /> {/* Passa a prop posts */}
      <CommentsSection postId={postId} />
    </Main>
  );
};

export default BlogPostPage;
