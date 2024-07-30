
import { useParams } from 'react-router-dom';
import { postsData } from '../../data/newsData'; // Ajuste o caminho conforme necessário
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  margin-top: 0;
  padding: 2.8rem;
  width: 100%;

`;
const Card = styled.div`
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  overflow: hidden;
  background-color: #fff;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const CardBody = styled.div`
  padding: 1rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin: 0;
  padding: 0 15px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const MetaSeparator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9em;
  color: #666666;
  margin: 10px;
`;

const MetaSpan = styled.span`
  margin: 0 10px;
`;

const PostImage = styled.img`
  width: 100%;
  height: auto;
  padding: 60px;
`;

const Content = styled.section`
  line-height: 1.8;
  color: #333;
  font-size: 1rem;
  padding: 0 15px;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const PostDetail = () => {
  const { id } = useParams(); // Obtém o ID do post dos parâmetros da URL
  const post = postsData.find(post => post.id === id);

  if (!post) {
    return <div className="text-center mt-5">Post não encontrado</div>;
  }

  return (
    <Container>
      <Card>
        <CardBody>
          <TitleWrapper>
            <Title>{post.title}</Title>
            <MetaSeparator>
              <MetaSpan>{post.author}</MetaSpan>
              <MetaSpan>|</MetaSpan>
              <MetaSpan>{post.category}</MetaSpan>
              <MetaSpan>|</MetaSpan>
              <MetaSpan>{post.time}</MetaSpan>
            </MetaSeparator>
          </TitleWrapper>
          <div className="text-center mb-4">
            <PostImage src={post.imgSrc} alt={post.title} />
          </div>
          <Content dangerouslySetInnerHTML={{ __html: post.content }} />
        </CardBody>
      </Card>
    </Container>
  );
};

export default PostDetail;
