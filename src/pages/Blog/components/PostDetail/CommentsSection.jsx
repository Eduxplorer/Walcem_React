import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../../../hooks/useAuth'; // Hook de autenticação
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Styled components
const CommentsContainer = styled.div`
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 1200px; /* Limita a largura máxima */
    margin: 0 auto; /* Centraliza o container */
`;

const CommentForm = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const CommentInput = styled.input`
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

const CommentButton = styled.button`
    padding: 10px 20px;
    border: none;
    background-color: #007bff;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

const CommentsList = styled.div`
    margin-top: 20px;
`;

const CommentItem = styled.div`
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
    flex-direction: column;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const CommentImage = styled.img`
    border-radius: 50%;
    margin-right: 15px;
    width: 50px;
    height: 50px;
`;

const CommentText = styled.div`
    max-width: 600px;
`;

const CommentAuthor = styled.h3`
    margin: 0;
    font-size: 1.1em;
`;

const CommentContent = styled.p`
    margin: 5px 0;
`;

const CommentDate = styled.span`
    font-size: 0.9em;
    color: #666;
`;

// React component
const CommentsSection = ({ postId }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const { user } = useAuth(); // Obtém o usuário autenticado

    useEffect(() => {
        // Carregar os comentários
        const fetchComments = async () => {
            const response = await axios.get(`/api/comments/${postId}`);
            setComments(response.data);
        };
        fetchComments();
    }, [postId]);

    const handleCommentSubmit = async () => {
        if (!user) return alert('Você precisa estar logado para comentar.');

        try {
            const response = await axios.post(
                '/api/comments',
                { postId, content: newComment },
                { headers: { Authorization: `Bearer ${user.token}` } }
            );
            setComments([...comments, response.data]);
            setNewComment('');
        } catch (error) {
            console.error('Erro ao enviar o comentário:', error);
        }
    };

    return (
        <section id="comments">
            <CommentsContainer>
                <h2>Comentários</h2>
                {user ? (
                    <CommentForm>
                        <CommentInput
                            type="text"
                            placeholder="Adicione seu comentário"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                        <CommentButton onClick={handleCommentSubmit}>ENVIAR</CommentButton>
                    </CommentForm>
                ) : (
                    <p>Faça login para comentar.</p>
                )}
                <CommentsList>
                    {comments.map((comment) => (
                        <CommentItem key={comment._id}>
                            <CommentImage src="img/homemCmt.png" alt={comment.author} />
                            <CommentText>
                                <CommentAuthor>{comment.author}</CommentAuthor>
                                <CommentContent>{comment.content}</CommentContent>
                                <CommentDate>Publicado a {new Date(comment.createdAt).toLocaleTimeString()}</CommentDate>
                            </CommentText>
                        </CommentItem>
                    ))}
                </CommentsList>
            </CommentsContainer>
        </section>
    );
};

CommentsSection.propTypes = {
    postId: PropTypes.string.isRequired,
};

export default CommentsSection;
