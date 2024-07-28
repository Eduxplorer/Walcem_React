import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

// Define o container do rodapé
const FooterContainer = styled.footer`
    background-color: var(--footer-background);
    color: #000;
    text-align: center;
    padding: var(--footer-padding);
    margin-top: -1rem;
    border-radius: 10px;
    flex-grow: 1;
`;

// Define o conteúdo do rodapé
const FooterContent = styled.div`
    width: 100%;
    max-width: 1600px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    margin: 0 auto;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

// Define os links do rodapé
const FooterLinks = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-bottom: 20px;

    a {
        text-decoration: none;
        color: #fff;
        font-size: 14px; /* Diminuído de 16px para 14px */
        padding: 8px 15px; /* Ajustado de 10px 20px para 8px 15px */
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

        @media (max-width: 768px) {
            font-size: 12px;
            padding: 6px 10px;
        }

        @media (max-width: 480px) {
            font-size: 10px;
            padding: 4px 8px;
            margin: 5px;
        }
    }
`;

// Define as informações de contato
const ContactInfo = styled.div`
    width: 45%;
    text-align: left;
    margin-bottom: 10px;

    @media (max-width: 768px) {
        text-align: center;
        width: 100%;
        margin-top: 20px;
    }
`;

// Define o título de contato
const ContactTitle = styled.h2`
    color: #000;
    margin-bottom: 10px;
`;

// Define o texto de contato
const ContactText = styled.p`
    color: #ddd;
    font-size: 14px;
    margin-bottom: 5px;
`;

// Define o formulário de newsletter
const Newsletter = styled.div`
    width: 100%;
    margin-bottom: 20px;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    label {
        margin-bottom: 25px;
        font-size: 24px; /* Aumenta o tamanho do título */
        color: #fff; /* Define a cor do título */
    }

    input[type="email"] {
        padding: 10px;
        font-size: 16px;
        border: none;
        outline: none;
        width: 40%;
        border-radius: 10px;
        cursor: text;
        transition: border-color var(--transition-duration) ease, box-shadow var(--transition-duration) ease;
    }

    input[type="email"]:focus {
        border-color: var(--primary-color);
        box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
    }

    input[type="email"]:invalid {
        border: 1px solid #999898;
    }

    button {
        margin-top: 25px;
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

// Define as redes sociais
const SocialMedia = styled.div`
    display: flex;
    flex-direction: inline; /* Alinha o título acima dos ícones */
    justify-content: flex-start;
    width: 45%;
    flex-wrap: wrap;
    margin: 0;
    gap: 12px;
    

    @media (max-width: 768px) {
        width: 100%;
        align-items: center;
        justify-content: center;
    }
`;

// Define o título das redes sociais
const SocialMediaTitle = styled.h2`
    width: 100%;
    color: #000;
    margin-bottom: -2rem; /* Reduzido de 10px para 5px */
    text-align: left;
    padding: 0;

    @media (max-width: 768px) {
        text-align: center;
    }
`;

// Define o link de uma rede social
const SocialMediaLink = styled.a`
    margin: 5px; /* Reduz o espaçamento entre os ícones */
    font-size: 32px;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
        color: #006400;
        transform: translateY(-5px);
    }

    @media (max-width: 768px) {
        font-size: 28px;
        margin: 4px; /* Ajusta o espaçamento para telas menores */
    }

    @media (max-width: 480px) {
        font-size: 24px;
        margin: 3px; /* Ajusta o espaçamento para telas menores */
    }
`;

// Define o copyright
const Copyright = styled.div`
    background-color: #fff;
    color: #000;
    font-size: 12px; /* Ajusta o tamanho da fonte */
    text-align: center;
    padding: 0; /* Ajusta o padding */
    transition: background-color var(--transition-duration) ease, color var(--transition-duration) ease;
    border-top: 1px solid #ddd;

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
    }

    &:hover::before {
        color: #0056b3;
    }
`;

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5000/api/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            const data = await response.json();
            if (response.ok) {
                toast.success('Inscrição bem-sucedida! Você receberá nossas atualizações por e-mail.');
                setTimeout(() => {
                    setEmail(''); // Limpa o campo após a notificação de sucesso
                }, 1000); // Tempo para garantir que a notificação foi exibida
            } else if (data.message === 'Este email já está inscrito.') {
                toast.error('Este email já está inscrito.');
            } else {
                toast.error('Erro ao se inscrever. Tente novamente.'); // Exibe a mensagem de erro genérica
            }
        } catch (error) {
            toast.error('Erro ao se inscrever. Tente novamente.');
        }
    };

    return (
        <>
            <FooterContainer>
                <FooterContent>
                    <FooterLinks>
                        <Link to="/about">Sobre a WALCEM</Link>
                        <Link to="/faq">Perguntas frequentes (FAQ)</Link>
                        <Link to="/support">Suporte</Link>
                        <Link to="/privacy-policy">Política de privacidade</Link>
                    </FooterLinks>
                    <ContactInfo>
                        <ContactTitle>Informações de contato</ContactTitle>
                        <ContactText>Endereço: Rua Dr. Antônio Bento, 393 - Santo Amaro, São Paulo - SP, 04750-000</ContactText>
                        <ContactText>Telefone: (11) 3737-3900</ContactText>
                        <ContactText>Email: contato@walcem.com.br</ContactText>
                    </ContactInfo>
                    <SocialMedia>
                        <SocialMediaTitle>Redes sociais</SocialMediaTitle>
                        <SocialMediaLink href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </SocialMediaLink>
                        <SocialMediaLink href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </SocialMediaLink>
                        <SocialMediaLink href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </SocialMediaLink>
                        <SocialMediaLink href="https://x.com/" target="_blank" rel="noopener noreferrer">
                            𝕏
                        </SocialMediaLink>
                    </SocialMedia>
                </FooterContent>
                <Newsletter>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Inscreva-se na nossa Newsletter</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button type="submit">Inscrever-se</button>
                    </form>
                    <ToastContainer />
                </Newsletter>
            </FooterContainer>
            <Copyright>
                2024 WALCEM. Todos os direitos reservados.
            </Copyright>
        </>
    );
};

export default Footer;
