import styled from 'styled-components';
import FeaturedPosts from './components/BlogPgPrincipal/FeaturedPosts';
import Categories from './components/BlogPgPrincipal/Categories';

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
    const featuredPostsData = [
        {
            image: 'PNRS.png',
            title: 'PNRS: o que a lei estabelece sobre o descarte de eletrônicos?',
            description: 'A Política Nacional de Resíduos Sólidos tem uma importância imensa para dar fim a sucateiras.',
            link: 'post1.html'
        },
        {
            image: 'ISO.png',
            title: 'ISO 9001 e 14001: quais as obrigatoriedades impostas pelas normas para descarte de resíduos eletrônicos?',
            description: 'As normas ISO 9001 e 14001 têm um impacto direto nas práticas de gestão de resíduos eletrônicos.',
            link: 'post2.html'
        }
    ];

    return (
        <Main>
            <FeaturedPosts posts={featuredPostsData} />
            <Categories />
        </Main>
    );
};

export default Blog;
