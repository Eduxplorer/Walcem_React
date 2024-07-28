import { useState } from 'react';
import styled from "styled-components";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #f4f3fa;
  padding: 2rem 0;

  @media (max-width: 1024px) {
    padding: 1.5rem 0;
  }

  @media (max-width: 768px) {
    padding: 1rem 0;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0;
  }
`;

const ContactFormWrapper = styled.div`
  background-color: #ffffff;
  padding: 1.5rem;
  width: 70%;
  max-width: 300px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  text-align: center;
  border: 2px solid black;
  position: absolute;
  right: 3rem;
  bottom: 0;
  margin-bottom: 1.5rem;
  transform: translateY(50%);

  @media (max-width: 1024px) {
    padding: 1rem;
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    position: relative;
    bottom: auto;
    right: auto;
    transform: none;
    margin: 1rem auto;
  }
`;

const Title = styled.h2`
  color: #164b30;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const Subtitle = styled.p`
  color: #396e41;
  margin-bottom: 1.2rem;

  @media (max-width: 1024px) {
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    margin-bottom: 0.9rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 0.8rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.8rem;
  border: 1px solid #e1e1e1;
  border-radius: 20px;
  font-size: 0.85rem;
  background-color: #d9d9d9;

  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.8rem;
  border: 1px solid #e1e1e1;
  border-radius: 20px;
  font-size: 0.85rem;
  background-color: #d9d9d9;
  resize: none;
  height: 80px;

  @media (max-width: 1024px) {
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
    height: 70px;
  }
`;

const Button = styled.button`
  background-color: #6bcb79;
  color: #ffffff;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 50px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #454360;
  }

  @media (max-width: 1024px) {
    padding: 0.5rem 1.3rem;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
`;

const ImageAndForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PersonImage = styled.div`
  margin-right: auto;
  margin-bottom: 0;
  img {
    max-width: 100%;
    height: auto;
    display: block;

    @media (max-width: 768px) {
      width: 100%;
      height: auto;
      margin-bottom: 1rem;
    }
  }
`;

const ContactFooter = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.message);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error('Erro ao enviar a mensagem. Tente novamente.');
    }
  };

  return (
    <Container>
      <ToastContainer />
      <ImageAndForm>
        <PersonImage>
          <img src="/img/pessoasemreuniao.png" alt="Pessoas em Reunião" />
        </PersonImage>
        <ContactFormWrapper>
          <Title>Fale Conosco</Title>
          <Subtitle>Queremos ouvir você</Subtitle>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Textarea
              placeholder="Digite sua mensagem aqui..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button type="submit">Enviar mensagem</Button>
          </form>
        </ContactFormWrapper>
      </ImageAndForm>
    </Container>
  );
};

export default ContactFooter;
