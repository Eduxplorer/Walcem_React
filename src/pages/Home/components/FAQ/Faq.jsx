import { useState } from 'react';
import styled from 'styled-components';

const FAQSectionContainer = styled.section`
  margin: 25rem 0;
  text-align: center;
`;

const QuestionsContainer = styled.div`
  max-width: 62.5rem;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  margin: 0.625rem 0;
  text-align: center;

  .faq-question {
    background-color: #77b0aa;
    color: white;
    border: none;
    height: 5.375rem;
    width: 62.5rem;
    margin: 1.25rem auto;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
    border-radius: 0.3125rem;
    font-size: 1.125rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 1.25rem;

    &::after {
      content: "▼";
      margin-left: 0.625rem;
      transition: transform 0.3s ease;
    }
    
    &.open::after {
      transform: rotate(180deg);
    }
  }

  .faq-answer {
    margin-top: 0.625rem;
    font-size: 1.125rem;
    line-height: 1.5;
  }
`;

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <FAQSectionContainer id="faq">
      <QuestionsContainer className="faq-container">
        <FAQItem className="faq-item">
          <button
            className={`faq-question ${activeIndex === 0 ? 'open' : ''}`}
            onClick={() => toggleFAQ(0)}
          >
            Como descartar meu lixo eletrônico?
          </button>
          {activeIndex === 0 && (
            <div className="faq-answer">
              <p>
                Para descartar seu lixo eletrônico, utilize os pontos de coleta disponíveis em nossa plataforma ou entre em contato com empresas especializadas em reciclagem.
              </p>
            </div>
          )}
        </FAQItem>
        <FAQItem className="faq-item">
          <button
            className={`faq-question ${activeIndex === 1 ? 'open' : ''}`}
            onClick={() => toggleFAQ(1)}
          >
            Quais são os tipos de resíduos eletrônicos?
          </button>
          {activeIndex === 1 && (
            <div className="faq-answer">
              <p>
                Resíduos eletrônicos incluem baterias, celulares, computadores, eletrodomésticos, entre outros dispositivos eletrônicos que não têm mais utilidade.
              </p>
            </div>
          )}
        </FAQItem>
        <FAQItem className="faq-item">
          <button
            className={`faq-question ${activeIndex === 2 ? 'open' : ''}`}
            onClick={() => toggleFAQ(2)}
          >
            Por que a reciclagem de eletrônicos é importante?
          </button>
          {activeIndex === 2 && (
            <div className="faq-answer">
              <p>
                A reciclagem de eletrônicos é importante para evitar a contaminação do meio ambiente, economizar recursos naturais e reduzir o lixo nos aterros sanitários.
              </p>
            </div>
          )}
        </FAQItem>
      </QuestionsContainer>
    </FAQSectionContainer>
  );
};

export default FAQSection;
