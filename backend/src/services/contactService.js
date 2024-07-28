import ContactMessage from '../models/ContactMessage.js';

export const createContactMessage = async ({ name, email, message }) => {
  const newMessage = new ContactMessage({ name, email, message });
  await newMessage.save();
  return newMessage;
};
