import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { postsData } from '../../pages/Blog/data/newsData'; // Importe os dados estáticos

const SearchResults = () => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const queryParam = params.get('query');

    if (queryParam) {
      const decodedQuery = decodeURIComponent(queryParam);
      setQuery(decodedQuery);
      searchInStaticData(decodedQuery);
    }
  }, [location.search]);

  const searchInStaticData = (searchQuery) => {
    // Filtra os dados estáticos com base na palavra-chave
    const results = postsData.filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(results);
  };

  return (
    <div>
      <h1>Resultados da Busca para &quot;{query}&quot;</h1>
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((result) => (
            <li key={result.id}>
              <h2>{result.title}</h2>
              <p>{result.description}</p>
              {result.imgSrc && <img src={result.imgSrc} alt={result.title} />}
              <div dangerouslySetInnerHTML={{ __html: result.content }} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum resultado encontrado.</p>
      )}
    </div>
  );
};

export default SearchResults;
