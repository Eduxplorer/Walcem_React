import styled from 'styled-components';
import { useState } from 'react';

const FormGroup = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #070707;
  border-radius: 5px;
  color: #070707;
`;

const FormOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const Link = styled.a`
  color: #2e7d32;
  text-decoration: none;
`;

const LoginButton = styled.button`
  background-color: #66bb6a;
  border: none;
  color: white;
  padding: 15px 20px;
  width: 100%;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  &:hover {
    background-color: #4caf50;
  }
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #070707;
`;

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validações
    if (formData.email === '' || formData.password === '') {
      setMessage('Por favor, preencha todos os campos.');
      return;
    }

    // Exibir os dados no console
    console.log('Email:', formData.email);
    console.log('Senha:', formData.password);

    // Mostrar mensagem de sucesso
    setMessage('Login bem-sucedido!');

    // Limpar o formulário
    setFormData({
      email: '',
      password: ''
    });
  };

  return (
    <div>
      <Title>Área De Login</Title>
      <form id="login-form" onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">E-mail</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Senha</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormOptions>
          <Label>
            <Input type="checkbox" id="remember-me" /> Lembrar-me
          </Label>
          <Link href="#" id="forgot-password">Esqueci Minha Senha</Link>
        </FormOptions>
        <LoginButton type="submit" className="login-btn">Entrar</LoginButton>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default LoginForm;
