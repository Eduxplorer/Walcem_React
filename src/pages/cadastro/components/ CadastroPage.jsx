import React from 'react';
import ImageSection from './ImageSection';
import CadastroForm from './CadastroForm';
import '../styles/CadastroForm.css'; // Importar o CSS

const CadastroPage = () => (
    <div className="container">
        <ImageSection />
        <CadastroForm />
    </div>
);

export default CadastroPage;
