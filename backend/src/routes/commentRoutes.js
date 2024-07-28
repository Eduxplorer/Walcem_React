import express from 'express';
import {
  createCommentController,
  getCommentsByPostController,
  getCommentByIdController,
  updateCommentController,
  deleteCommentController
} from '../controllers/commentController.js';
import auth from '../middlewares/auth.js'; // Certifique-se de que o caminho está correto

const router = express.Router();

// Rotas para Comentários
router.post('/comments', auth, createCommentController); // Middleware aplicado aqui
router.get('/posts/:postId/comments', getCommentsByPostController); // Middleware não aplicado, pode ser necessário se precisar de autenticação
router.get('/comments/:id', getCommentByIdController); // Middleware não aplicado
router.put('/comments/:id', auth, updateCommentController); // Middleware aplicado aqui
router.delete('/comments/:id', auth, deleteCommentController); // Middleware aplicado aqui

export default router;
