import { subscribe } from '../services/subscriberService.js';

export const subscribeController = async (req, res) => {
    const { email } = req.body;
    try {
        await subscribe(email);
        res.status(201).json({ message: 'Inscrição bem-sucedida!' });
    } catch (error) {
        if (error.message === 'Email já inscrito') {
            res.status(400).json({ message: 'Este email já está inscrito.' });
        } else {
            res.status(500).json({ message: 'Erro ao se inscrever. Tente novamente.' });
        }
    }
};
