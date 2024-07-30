import { useState } from "react";
import styled from "styled-components";
import SearchForm from "./components/SearchForm/SearchForm";
import Map from "./components/Map/Map";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin: 10rem;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h1 {
    font-size: 2.5rem;
    color: #333;
  }

  p {
    font-size: 1.25rem;
    color: #666;
    max-width: 800px;
    margin: 0 auto;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  gap: 2rem;
`;

const LocaisDeColeta = () => {
  const [locations, setLocations] = useState([]);

  const handleSearch = () => {
    // Função para buscar e definir os locais de coleta
    // Exemplo fictício de locais
    setLocations([
      { name: "Eco Ponto Central", lat: -23.5598, lng: -46.6357 },
      { name: "ReciclaTech", lat: -23.5642, lng: -46.6557 },
      { name: "Ponto Verde", lat: -23.5675, lng: -46.6583 },
      { name: "EcoLixo Paulista", lat: -23.5708, lng: -46.6209 },
      { name: "Recicla São Paulo", lat: -23.5621, lng: -46.6721 },
      { name: "Descarte Digital", lat: -23.57, lng: -46.645 },
      { name: "GreenPoint Eletrônicos", lat: -23.5801, lng: -46.6323 },
      { name: "Reciclável Express", lat: -23.5732, lng: -46.64 },
    ]);
  };

  return (
    <PageContainer>
      <Header>
        <h1>Encontre o local mais próximo de você</h1>
        <p>
          Digite seu CEP, escolha o eletrônico e encontre os pontos de
          recebimento para o descarte correto.
        </p>
      </Header>
      <ContentContainer>
        <SearchForm onSearch={handleSearch} />
        <Map locations={locations} />
      </ContentContainer>
    </PageContainer>
  );
};

export default LocaisDeColeta;
