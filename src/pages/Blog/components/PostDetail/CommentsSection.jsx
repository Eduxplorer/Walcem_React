import { useState } from 'react';
import styled from 'styled-components';
import avatarImg from '/img/avatar.png';
import editImg from '/img/lapis.png';
import deleteImg from '/img/lixeira.png';

const CommentsContainer = styled.div`
    width: 90%;
    max-width: 800px;
    margin: 20px auto;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`;

const CommentForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;

    input, button {
        width: 100%;
        padding: 10px;
        font-size: 1em;
        border-radius: 8px;
        border: 1px solid #ddd;
    }

    input {
        background-color: #f0f0f0;
    }

    button {
        background-color: #28a745;
        color: #fff;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s;

        &:hover {
            background-color: #218838;
        }
    }
`;

const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Comment = styled.div`
  display: flex;
  align-items: center;
  background-color: #e0e0e0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  position: relative;
`;

const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 10px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

  strong {
    margin-top: 5px;
  }
`;

const CommentBody = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const CommentContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const CommentFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ActionButtons = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;

  img {
    cursor: pointer;
    width: 20px;
    height: 20px;
    margin-left: 5px;
  }
`;

const CommentsSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [newName, setNewName] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() && newName.trim()) {
      const publishTime = new Date();
      const newComments = [
        ...comments,
        {
          id: comments.length + 1,
          name: newName,
          text: newComment,
          time: '0 minutos',
          publishTime,
        },
      ];
      setComments(newComments);
      setNewComment('');
      setNewName('');
      updateCommentTimes(newComments);
    } else {
      alert('Por favor, preencha seu nome e comentário.');
    }
  };

  const updateCommentTimes = (comments) => {
    setInterval(() => {
      const updatedComments = comments.map((comment) => {
        const currentTime = new Date();
        const timeDifference = Math.floor((currentTime - comment.publishTime) / 60000);
        return { ...comment, time: `${timeDifference} minutos` };
      });
      setComments(updatedComments);
    }, 60000);
  };

  const handleEditComment = (id) => {
    const commentToEdit = comments.find((comment) => comment.id === id);
    setNewComment(commentToEdit.text);
    setNewName(commentToEdit.name);
    setComments(comments.filter((comment) => comment.id !== id));
  };

  const handleDeleteComment = (id) => {
    const confirmDelete = window.confirm('Você tem certeza que deseja excluir este comentário?');
    if (confirmDelete) {
      setComments(comments.filter((comment) => comment.id !== id));
    }
  };

  return (
    <CommentsContainer>
      <h2>Comentários</h2>
      <CommentForm>
        <input
          type="text"
          id="name-input"
          placeholder="Seu nome"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          type="text"
          id="comment-input"
          placeholder="Adicione seu comentário"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button id="submit-comment" onClick={handleAddComment}>
          ENVIAR
        </button>
      </CommentForm>
      <CommentList id="comment-list">
        {comments.map((comment) => (
          <Comment key={comment.id}>
            <AvatarContainer>
              <img src={avatarImg} alt="Avatar" />
              <strong>{comment.name}</strong>
            </AvatarContainer>
            <CommentBody>
              <CommentHeader>
                <CommentContent>{comment.text}</CommentContent>
              </CommentHeader>
              <CommentFooter>
                <small className="text-muted">Publicado há {comment.time}</small>
              </CommentFooter>
            </CommentBody>
            <ActionButtons>
              <img
                src={editImg}
                className="action-icon me-2"
                alt="Editar"
                onClick={() => handleEditComment(comment.id)}
              />
              <img
                src={deleteImg}
                className="action-icon"
                alt="Excluir"
                onClick={() => handleDeleteComment(comment.id)}
              />
            </ActionButtons>
          </Comment>
        ))}
      </CommentList>
    </CommentsContainer>
  );
};

export default CommentsSection;

