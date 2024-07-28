import Subscriber from '../models/Subscriber.js';

export const subscribe = async (email) => {
    try {
        const existingSubscriber = await Subscriber.findOne({ email });
        if (existingSubscriber) {
            const error = new Error('Email já inscrito');
            error.code = 400;
            throw error;
        }
        const subscriber = new Subscriber({ email });
        await subscriber.save();
    } catch (error) {
        if (error.code !== 400) {
            console.error('Erro ao se inscrever:', error);
        }
        throw error;
    }
};
