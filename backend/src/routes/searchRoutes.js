// src/routes/searchRoutes.js
import express from 'express';
import searchController from '../controllers/searchController.js'; // Certifique-se de que o caminho está correto

const router = express.Router();

router.get('/', searchController);

export default router;
