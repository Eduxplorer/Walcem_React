import { useState } from "react";
import styled from "styled-components";

const FAQSectionContainer = styled.section`
  margin: 5rem 0;
  text-align: center;
  background-color: #f9f9f9;
  padding: 2rem;
`;

const FAQHeader = styled.div`
  margin-bottom: 2rem;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    max-width: 60%;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 30px; /* Padding para garantir 30px de distância das bordas */
`;

const FAQItem = styled.div`
  width: 100%;
  margin: 0.9rem 0;

  .faq-question {
    background-color: #77b0aa;
    color: white;
    border: none;
    height: auto;
    width: 100%;
    max-width: calc(
      100% - 500px
    ); /* Ajusta o tamanho máximo para 30px de distância das bordas */
    margin: 0 auto; /* Centraliza os botões */
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
    border-radius: 0.3125rem;
    font-size: 2rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 3rem 1.5rem; /* Ajustei o padding para se ajustar melhor ao tamanho */

    &::after {
      content: "▼";
      margin-left: 1rem; /* Ajustei a margem para o ícone */
      transition: transform 0.3s ease;
    }

    &.open::after {
      transform: rotate(180deg);
    }
  }

  .faq-answer {
    margin-top: 0.625rem;
    font-size: 1.5rem; /* Aumentado para melhor visualização */
    line-height: 1.6;
    text-align: left;
    max-width: calc(
      100% - 500px
    ); /* Garante que a resposta também se ajuste à largura */
    margin: 0 auto; /* Centraliza a resposta */
    padding: 1rem; /* Adiciona padding para melhor legibilidade */
    background: #eef6f6; /* Fundo ligeiramente diferente para destaque */
    border-radius: 0.3125rem;
  }
`;

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <FAQSectionContainer id="faq">
      <FAQHeader>
        <h2>FAQ&apos;S</h2>
        <p>
          Bem-vindo à seção de Perguntas Frequentes sobre o descarte de
          eletrônicos. Aqui você encontrará respostas para as dúvidas mais
          comuns sobre como descartar e reciclar seus dispositivos eletrônicos
          de forma segura e responsável.
        </p>
      </FAQHeader>
      <QuestionsContainer className="faq-container">
        <FAQItem className="faq-item">
          <button
            className={`faq-question ${activeIndex === 0 ? "open" : ""}`}
            onClick={() => toggleFAQ(0)}
          >
            Posso doar meus eletrônicos usados?
          </button>
          {activeIndex === 0 && (
            <div className="faq-answer">
              <p>
                Sim, você pode doar seus eletrônicos usados em diversos pontos
                de coleta espalhados pela cidade ou para organizações que
                reutilizam esses dispositivos. Doar eletrônicos é uma excelente
                maneira de prolongar a vida útil dos aparelhos e ajudar aqueles
                que não têm condições de comprar novos. Utilize nosso site para
                saber quais postos de coleta mais proximos de você e fazer o
                descarte adequado do item que pretenda reciclar.
              </p>
            </div>
          )}
        </FAQItem>
        <FAQItem className="faq-item">
          <button
            className={`faq-question ${activeIndex === 1 ? "open" : ""}`}
            onClick={() => toggleFAQ(1)}
          >
            Onde posso encontrar um ponto de coleta de eletrônicos perto de mim?
          </button>
          {activeIndex === 1 && (
            <div className="faq-answer">
              <p>
                Você pode encontrar pontos de coleta de eletrônicos em
                supermercados, lojas de eletrônicos e centros de reciclagem.
                Verifique em nossa plataforma para mais detalhes. Muitas cidades
                oferecem programas de reciclagem de eletrônicos e podem ter
                eventos específicos para coleta de e-waste. Além disso, algumas
                lojas de eletrônicos aceitam de volta produtos antigos quando
                você compra novos. Sempre confira com antecedência os requisitos
                específicos de cada local de coleta, como os tipos de
                dispositivos aceitos e se há algum custo envolvido.
              </p>
            </div>
          )}
        </FAQItem>
        <FAQItem className="faq-item">
          <button
            className={`faq-question ${activeIndex === 2 ? "open" : ""}`}
            onClick={() => toggleFAQ(2)}
          >
            O que acontece com os eletrônicos depois de serem descartados?
          </button>
          {activeIndex === 2 && (
            <div className="faq-answer">
              <p>
                Após o descarte, os eletrônicos são enviados para centros de
                reciclagem onde são desmontados e seus componentes são
                reutilizados ou descartados de forma correta. Nos centros de
                reciclagem, os dispositivos são separados em categorias como
                plásticos, metais e componentes eletrônicos. Alguns materiais
                podem ser recuperados e usados na fabricação de novos produtos,
                enquanto outros são tratados para eliminar substâncias tóxicas
                antes do descarte. Esse processo ajuda a reduzir o impacto
                ambiental dos resíduos eletrônicos e a conservar recursos
                naturais.
              </p>
            </div>
          )}
        </FAQItem>
        <FAQItem className="faq-item">
          <button
            className={`faq-question ${activeIndex === 3 ? "open" : ""}`}
            onClick={() => toggleFAQ(3)}
          >
            Posso reciclar baterias e pilhas junto com outros eletrônicos?
          </button>
          {activeIndex === 3 && (
            <div className="faq-answer">
              <p>
                Não, baterias e pilhas devem ser descartadas separadamente
                devido aos seus componentes químicos específicos. Procure pontos
                de coleta específicos para esses itens. Baterias e pilhas contêm
                metais pesados e outros materiais que podem ser prejudiciais ao
                meio ambiente se não forem descartados corretamente. Muitos
                locais de coleta de e-waste também aceitam baterias, mas é
                importante verificar antes de levar seus itens. Algumas lojas de
                eletrônicos e supermercados também oferecem recipientes para a
                coleta de baterias usadas.
              </p>
            </div>
          )}
        </FAQItem>
      </QuestionsContainer>
    </FAQSectionContainer>
  );
};

export default FAQSection;


