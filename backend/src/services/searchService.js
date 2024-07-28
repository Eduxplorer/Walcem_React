// src/services/searchService.js
import ContactMessage from '../models/ContactMessage.js';

export const getSearchResultsFromDatabase = async (query) => {
    return await ContactMessage.find({
        $or: [
            { name: { $regex: query, $options: 'i' } },
            { message: { $regex: query, $options: 'i' } },
        ],
    });
};
