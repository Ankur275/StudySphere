import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import connectDB from './config/dbconfig.js';
import cors from 'cors';
import userRouter from './routes/userRoute.js';
import chatRouter from './routes/chatRoute.js'; // Chat Routes
import messageRouter from './routes/messageRoute.js'; // Message Routes
import { errorHandler } from './middlewares/errorHandlerMiddleware.js';
import { Server } from 'socket.io';
import http from 'http'; // For creating the server

dotenv.config();
const app = express();
const port = process.env.PORT || 3500;

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

const corsOptions = {
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Routes
app.use('/api/users', userRouter);
app.use('/api/chats', chatRouter); // Chat Route
app.use('/api/messages', messageRouter); // Message Route

// Error handler
app.use(errorHandler);

const server = http.createServer(app);

// Initialize Socket.IO
const io = new Server(server, {
    cors: {
        origin: process.env.CORS_ORIGIN,
        methods: ["GET", "POST"],
    },
});

// Socket.IO logic for real-time chat
io.on('connection', (socket) => {
    console.log('A user connected');
    
    socket.on('joinChat', (chatId) => {
        socket.join(chatId);
        console.log('User joined chat:', chatId);
    });

    socket.on('newMessage', (newMessage) => {
        const chat = newMessage.chat;

        if (!chat.users) return console.log('Chat.users not defined');

        chat.users.forEach(user => {
            if (user._id === newMessage.sender._id) return;
            socket.to(user._id).emit('messageReceived', newMessage);
        });
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

connectDB().then(() => {
    server.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
});
