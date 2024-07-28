import { Router } from 'express';
import { createContactMessageController } from '../controllers/contactController.js';

const router = Router();

router.post('/contact', createContactMessageController);

export default router;
