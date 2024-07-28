// src/controllers/searchController.js
import { getSearchResultsFromDatabase } from '../services/searchService.js'; // Certifique-se de que o caminho está correto

const searchController = async (req, res) => {
    const query = req.query.q; // Obter o parâmetro de consulta da URL
    if (!query) {
        return res.status(400).json({ message: 'Query parameter is required' });
    }

    try {
        const results = await getSearchResultsFromDatabase(query);
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while searching' });
    }
};

export default searchController;
