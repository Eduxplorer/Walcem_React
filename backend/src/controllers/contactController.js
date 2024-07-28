import { createContactMessage } from '../services/contactService.js';

export const createContactMessageController = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await createContactMessage({ name, email, message });
    res.status(201).json({ message: 'Mensagem de contato enviada com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao enviar a mensagem de contato. Tente novamente.' });
  }
};
