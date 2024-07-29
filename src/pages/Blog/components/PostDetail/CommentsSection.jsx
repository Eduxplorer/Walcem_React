import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CommentsSection = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [editComment, setEditComment] = useState(null);

  useEffect(() => {
    // Corrigir a URL da API
    fetch(`/api/comments/${postId}`)
      .then(response => response.json())
      .then(data => setComments(data))
      .catch(error => console.error('Failed to fetch comments', error));
  }, [postId]);

  const handleAddComment = () => {
    fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ postId, content: newComment, author: 'User' }),
    })
      .then(response => response.json())
      .then(data => {
        setComments([...comments, data]);
        setNewComment('');
      })
      .catch(error => console.error('Failed to add comment', error));
  };

  const handleUpdateComment = (id, content) => {
    fetch(`/api/comments/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content }),
    })
      .then(response => response.json())
      .then(updatedComment => {
        setComments(comments.map(comment => (comment._id === id ? updatedComment : comment)));
        setEditComment(null);
      })
      .catch(error => console.error('Failed to update comment', error));
  };

  const handleDeleteComment = (id) => {
    fetch(`/api/comments/${id}`, { method: 'DELETE' })
      .then(() => setComments(comments.filter(comment => comment._id !== id)))
      .catch(error => console.error('Failed to delete comment', error));
  };

  return (
    <div>
      <h2>Comentários</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment._id}>
            {editComment === comment._id ? (
              <div>
                <input
                  type="text"
                  value={editComment.content}
                  onChange={(e) => setEditComment({ ...editComment, content: e.target.value })}
                />
                <button onClick={() => handleUpdateComment(comment._id, editComment.content)}>Salvar</button>
                <button onClick={() => setEditComment(null)}>Cancelar</button>
              </div>
            ) : (
              <div>
                <p>{comment.content}</p>
                <button onClick={() => setEditComment({ _id: comment._id, content: comment.content })}>Editar</button>
                <button onClick={() => handleDeleteComment(comment._id)}>Excluir</button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button onClick={handleAddComment}>Adicionar Comentário</button>
      </div>
    </div>
  );
};

CommentsSection.propTypes = {
  postId: PropTypes.string.isRequired,
};

export default CommentsSection;
