import React, { useState } from 'react';

const CadastroForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:3000/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="cadastro">
            <form id="registration-form" onSubmit={handleSubmit}>
                <div id="cadastrar-dados">
                    <h1 id="cadas">Cadastrar</h1>
                    <h4 id="inform">Informe os dados para realizar o cadastro da conta</h4>
                </div>
                <br />
                <label id="name-label">
                    <p>Nome</p>
                    <input
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Insira seu nome"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label id="lastname-label">
                    <p>Sobrenome</p>
                    <input
                        id="lastname"
                        name="lastname"
                        className="form-control"
                        placeholder="Insira seu sobrenome"
                        type="text"
                        value={formData.lastname}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label id="email-label">
                    <p>E-mail</p>
                    <input
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Insira seu email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label id="senha-label">
                    <p>Senha</p>
                    <input
                        id="password"
                        name="password"
                        className="form-control"
                        placeholder="Insira uma senha"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label id="confirm-label">
                    <p>Confirmar Senha</p>
                    <input
                        id="confirm-password"
                        name="confirm-password"
                        className="form-control"
                        placeholder="Repita a senha anterior para confirmar"
                        type="password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </label>
                <div className="button-container">
                    <button type="submit" id="submit" className="submit-button">Cadastrar</button>
                </div>
            </form>
        </div>
    );
};

export default CadastroForm;
