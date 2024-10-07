import { asyncHandler } from '../utils/asyncHandler.js';
import Message from '../models/messageModel.js';
import Chat from '../models/chatModel.js';
import { ApiError } from '../utils/apiError.js';

// Send a new message
export const sendMessage = asyncHandler(async (req, res, next) => {
  const { content, chatId } = req.body;

  if (!content || !chatId) {
    throw new ApiError(400, 'Invalid data passed into request');
  }

  const newMessage = {
    sender: req.user._id,
    content: content,
    chat: chatId,
  };

  try {
    let message = await Message.create(newMessage);

    // Use the populate method directly
    message = await message.populate('sender', 'username fullName');
    message = await message.populate('chat');

    // Update the latest message in the chat
    await Chat.findByIdAndUpdate(chatId, { latestMessage: message._id });

    return res.status(200).json(message);
  } catch (error) {
    next(error);
  }
});


// Get all messages in a chat with pagination
export const getAllMessages = asyncHandler(async (req, res, next) => {
  const { chatId } = req.params;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;

  const skip = (page - 1) * limit;

  try {
    const messages = await Message.find({ chat: chatId })
      .populate('sender', 'username fullName')
      .populate('chat')
      .sort({ createdAt: 1 })
      .skip(skip)
      .limit(limit);

    return res.status(200).json(messages);
  } catch (error) {
    next(error);
  }
});
