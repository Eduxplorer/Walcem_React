import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  width: calc(100% - 500px); /* Deixando 250px de cada lado */
  margin: 0 auto;
`;

const FAQItem = styled.div`
  width: 100%;
  margin: 2rem 0;

  .faq-question {
    background-color: #77b0aa;
    color: white;
    border: none;
    height: auto;
    width: 100%;
    margin: 0 auto; /* Centraliza os botões */
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
    border-radius: 0.3125rem;
    font-size: 6rem; /* Aumentado para 3x melhor visualização */
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
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.5s ease, opacity 0.5s ease;
    opacity: 0;
    margin-top: 0.625rem;
    font-size: 1.5rem; /* Aumentado para melhor visualização */
    line-height: 1.6;
    text-align: left;
    max-width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
    background: #eef6f6; /* Fundo ligeiramente diferente para destaque */
    border-radius: 0.3125rem;
    
    &.open {
      max-height: 500px; /* Ajuste conforme necessário */
      opacity: 1;
      padding: 1rem;
    }
  }
`;

const FooterContainer = styled.footer`
  background-color: var(--footer-background);
  color: #ddd;
  text-align: center;
  padding: var(--footer-padding);
  margin-top: var(--footer-margin-top);
  border-radius: 10px;
  flex-grow: 1;
`;

const FooterContent = styled.div`
  width: 100%;
  max-width: 1600px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const FooterLinks = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    padding: 10px 20px;
    margin: 0 10px;
    border-radius: 8px;
    background: var(--footer-background);
    transition: color var(--transition-duration) ease, background-color var(--transition-duration) ease, box-shadow var(--transition-duration) ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

    &:hover {
      color: #32CD32;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
      transform: scale(1.05);
    }
  }
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 8px;
  background: var(--footer-background);
  transition: color var(--transition-duration) ease, background-color var(--transition-duration) ease, box-shadow var(--transition-duration) ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);

  &:hover {
    color: #32CD32;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    transform: scale(1.05);
  }
`;

const ContactInfo = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 20px;

  h2 {
    color: #000;
    margin-bottom: 10px;
  }

  p {
    color: #ddd;
    font-size: 14px;
    margin-bottom: 5px;
  }
`;

const Newsletter = styled.div`
  margin-bottom: 20px;

  input[type="email"] {
    padding: 12px;
    margin: 0 10px 0 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    transition: border-color var(--transition-duration) ease, box-shadow var(--transition-duration) ease;

    &:focus {
      border-color: var(--primary-color);
      box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }

    &:invalid {
      border: 1px solid #999898;
    }
  }

  button {
    padding: 10px 20px;
    background-color: var(--primary-color);
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color var(--transition-duration) ease, color var(--transition-duration) ease, transform var(--transition-duration) ease;

    &:hover {
      background-color: #f1f1f1;
      color: var(--primary-color);
      transform: scale(1.05);
    }
  }
`;

const SocialMedia = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  h2 {
    color: #000;
    margin-bottom: 2px;
  }

  a {
    margin: 10px;
    font-size: 32px; /* Tamanho do caractere */
    color: #fff;
    text-decoration: none; /* Remove o sublinhado do link */
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
      color: #006400; /* Cor ao passar o mouse */
      transform: translateY(-5px); /* Aumenta o caractere ao passar o mouse */
    }
  }
`;

const Copyright = styled.div`
  margin-top: 0;
  background-color: #fff; /* Define o fundo como branco */
  color: #000; /* Define a cor do texto como preto */
  font-size: 13px;
  text-align: center;
  padding: 10px 15px;
  transition: background-color var(--transition-duration) ease, color var(--transition-duration) ease;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #f1f1f1;
    color: var(--primary-color);
  }

  &::before {
    content: "©";
    color: var(--primary-color);
    font-weight: bold;
    margin-right: 5px;
    transition: color var(--transition-duration) ease;
    display: inline;

    &:hover {
      color: #0056b3;
    }
  }
`;

const FAQAndFooter = () => {
  const [email, setEmail] = useState('');
  const [activeIndex, setActiveIndex] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://sua-api-de-newsletter.com/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        toast.success('Inscrição bem-sucedida! Você receberá nossas atualizações por e-mail.');
        setTimeout(() => {
          setEmail(''); // Limpa o campo após a notificação de sucesso
        }, 1000); // Tempo para garantir que a notificação foi exibida
      } else {
        toast.error('Houve um problema ao se inscrever. Tente novamente.');
      }
    } catch (error) {
      toast.error('Erro ao se inscrever. Por favor, tente novamente.');
    }
  };

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <FAQSectionContainer id="faq">
        <FAQHeader>
          <h2>FAQ&apos;S</h2>
          <p>
            Bem-vindo à seção de Perguntas Frequentes sobre o descarte de eletrônicos. Aqui você encontrará respostas para as dúvidas mais comuns sobre como descartar e reciclar seus dispositivos eletrônicos de forma segura e responsável.
          </p>
        </FAQHeader>
        <QuestionsContainer className="faq-container">
          <FAQItem className="faq-item">
            <button
              className={`faq-question ${activeIndex === 0 ? 'open' : ''}`}
              onClick={() => toggleFAQ(0)}
            >
              Posso doar meus eletrônicos usados?
            </button>
            {activeIndex === 0 && (
              <div className="faq-answer open">
                <p>
                  Sim, você pode doar seus eletrônicos usados em diversos pontos de coleta espalhados pela cidade ou para organizações que reutilizam esses dispositivos. Doar eletrônicos é uma excelente maneira de prolongar a vida útil dos aparelhos e ajudar aqueles que não têm condições de comprar novos. Certifique-se de apagar todos os seus dados pessoais dos dispositivos antes de doá-los. Além disso, verifique se os aparelhos estão em bom estado de funcionamento ou se necessitam de pequenos reparos que podem ser feitos antes da doação.
                </p>
              </div>
            )}
          </FAQItem>
          <FAQItem className="faq-item">
            <button
              className={`faq-question ${activeIndex === 1 ? 'open' : ''}`}
              onClick={() => toggleFAQ(1)}
            >
              Onde posso encontrar um ponto de coleta de eletrônicos perto de mim?
            </button>
            {activeIndex === 1 && (
              <div className="faq-answer open">
                <p>
                  Você pode encontrar pontos de coleta de eletrônicos em supermercados, lojas de eletrônicos e centros de reciclagem. Verifique em nossa plataforma para mais detalhes. Muitas cidades oferecem programas de reciclagem de eletrônicos e podem ter eventos específicos para coleta de e-waste. Além disso, algumas lojas de eletrônicos aceitam de volta produtos antigos quando você compra novos. Sempre confira com antecedência os requisitos específicos de cada local de coleta, como os tipos de dispositivos aceitos e se há algum custo envolvido.
                </p>
              </div>
            )}
          </FAQItem>
          <FAQItem className="faq-item">
            <button
              className={`faq-question ${activeIndex === 2 ? 'open' : ''}`}
              onClick={() => toggleFAQ(2)}
            >
              O que acontece com os eletrônicos depois de serem descartados?
            </button>
            {activeIndex === 2 && (
              <div className="faq-answer open">
                <p>
                  Após o descarte, os eletrônicos são enviados para centros de reciclagem onde são desmontados e seus componentes são reutilizados ou descartados de forma correta. Nos centros de reciclagem, os dispositivos são separados em categorias como plásticos, metais e componentes eletrônicos. Alguns materiais podem ser recuperados e usados na fabricação de novos produtos, enquanto outros são tratados para eliminar substâncias tóxicas antes do descarte. Esse processo ajuda a reduzir o impacto ambiental dos resíduos eletrônicos e a conservar recursos naturais.
                </p>
              </div>
            )}
          </FAQItem>
          <FAQItem className="faq-item">
            <button
              className={`faq-question ${activeIndex === 3 ? 'open' : ''}`}
              onClick={() => toggleFAQ(3)}
            >
              Posso reciclar baterias e pilhas junto com outros eletrônicos?
            </button>
            {activeIndex === 3 && (
              <div className="faq-answer open">
                <p>
                  Não, baterias e pilhas devem ser descartadas separadamente devido aos seus componentes químicos específicos. Procure pontos de coleta específicos para esses itens. Baterias e pilhas contêm metais pesados e outros materiais que podem ser prejudiciais ao meio ambiente se não forem descartados corretamente. Muitos locais de coleta de e-waste também aceitam baterias, mas é importante verificar antes de levar seus itens. Algumas lojas de eletrônicos e supermercados também oferecem recipientes para a coleta de baterias usadas.
                </p>
              </div>
            )}
          </FAQItem>
        </QuestionsContainer>
      </FAQSectionContainer>

      <FooterContainer>
        <FooterContent>
          <FooterLinks>
            <FooterLink to="/about">Sobre a WALCEM</FooterLink>
            <FooterLink to="/faq">Perguntas frequentes (FAQ)</FooterLink>
            <FooterLink to="/support">Suporte</FooterLink>
            <FooterLink to="/terms">Termos e Condições</FooterLink>
            <FooterLink to="/privacy-policy">Política de privacidade</FooterLink>
          </FooterLinks>
          <ContactInfo>
            <h2>Informações de contato</h2>
            <p>Endereço: Rua Dr. Antônio Bento, 393 - Santo Amaro, São Paulo - SP, 04750-000</p>
            <p>Telefone: (11) 3737-3900</p>
            <p>Email: contato@walcem.com.br</p>
          </ContactInfo>
          <SocialMedia>
            <h2>Redes sociais</h2>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
              𝕏
            </a>
          </SocialMedia>
        </FooterContent>
        <Newsletter>
          <form id="newsletterForm" onSubmit={handleSubmit}>
            <label htmlFor="email">Assine nossa Newsletter:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Assinar</button>
          </form>
        </Newsletter>
      </FooterContainer>
      <Copyright>
        <p>Copyright 2024 WALCEM. Todos os direitos reservados.</p>
      </Copyright>
      <ToastContainer />
    </>
  );
};

export default FAQAndFooter;
export { FooterLinks, FooterLink };
