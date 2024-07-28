import express from 'express';
import { subscribeController } from '../controllers/subscriberController.js';

const router = express.Router();

// Adicionar um novo email à lista de assinantes
router.post('/subscribe', subscribeController);

export default router;
