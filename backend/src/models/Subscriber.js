import mongoose from 'mongoose';

const subscriberSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/.+\@.+\..+/, 'Por favor, insira um email válido.']
    },
    subscribedAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('Subscriber', subscriberSchema);
