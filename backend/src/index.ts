
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { generateChatCompletion, sendChatsToUser, deleteChats } from './controllers/chat-controllers.js';

const app = express();
app.use(express.json());

app.post('/generate-chat', generateChatCompletion);
app.get('/chats', sendChatsToUser);
app.delete('/chats', deleteChats);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





