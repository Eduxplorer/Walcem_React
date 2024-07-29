import Slider from 'react-slick';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Styled components
const CarouselContainer = styled.div`
  width: 100%;
  margin: auto;
  padding: 20px;
`;

const CarouselItem = styled.div`
  position: relative;
  width: 100%;
  transition: transform 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: scale(1.05);
    z-index: 10;
  }
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (min-width: 768px) {
    height: 300px;
  }

  @media (min-width: 1024px) {
    height: 400px;
  }
`;

const CarouselContent = styled.div`
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 1rem;
  width: calc(100% - 2rem);
  box-sizing: border-box;
  left: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const CarouselTitle = styled.h3`
  margin: 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.7);
`;

const CarouselDescription = styled.p`
  margin: 0;
`;

// Função para filtrar notícias únicas
const getUniqueNews = (data) => {
  const seen = new Set();
  return data.filter((item) => {
    const duplicate = seen.has(item.id);
    seen.add(item.id);
    return !duplicate;
  }).slice(0, 3); // Garante que temos até três notícias
};

const NewsCarousel = ({ posts }) => {
  if (!Array.isArray(posts)) {
    console.error('Expected posts to be an array');
    return null; // Ou retornar uma UI alternativa para erros
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const uniquePostsData = getUniqueNews(posts);

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {uniquePostsData.map(news => (
          <CarouselItem key={news.id}>
            <CarouselImage src={news.imgSrc} alt={news.title} />
            <CarouselContent>
              <CarouselTitle>{news.title}</CarouselTitle>
              <CarouselDescription>{news.description}</CarouselDescription>
            </CarouselContent>
          </CarouselItem>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

NewsCarousel.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      imgSrc: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NewsCarousel;
