// routes/commentRoutes.js
import express from 'express';
import { createComment, getComments, updateComment, deleteComment } from '../controllers/commentController.js';

const router = express.Router();

router.post('/comments', createComment);
router.get('/comments/:postId', getComments);
router.put('/comments/:id', updateComment);
router.delete('/comments/:id', deleteComment);

export default router;
