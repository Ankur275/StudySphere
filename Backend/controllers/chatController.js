import { asyncHandler } from '../utils/asyncHandler.js';
import Chat from '../models/chatModel.js';
import { ApiError } from '../utils/apiError.js';

// Create or fetch a one-on-one chat
export const createChat = asyncHandler(async (req, res, next) => {
  const { userId } = req.body;

  if (!userId) {
    throw new ApiError(400, 'User ID is required');
  }

  let chat = await Chat.find({
    isGroupChat: false,
    $and: [
      { users: { $elemMatch: { $eq: req.user._id } } },
      { users: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate('users', '-password')
    .populate('latestMessage');

  if (chat.length > 0) {
    return res.status(200).json(chat[0]);
  }

  const chatData = {
    chatName: 'One-on-One Chat',
    isGroupChat: false,
    users: [req.user._id, userId],
  };

  try {
    const newChat = await Chat.create(chatData);
    const fullChat = await Chat.findById(newChat._id).populate('users', '-password');

    return res.status(201).json(fullChat);
  } catch (error) {
    next(error);
  }
});

// Create a new group chat
export const createGroupChat = asyncHandler(async (req, res, next) => {
  const { users, chatName } = req.body;

  if (!users || users.length < 2) {
    throw new ApiError(400, 'A group chat requires at least 3 users');
  }

  users.push(req.user);

  const groupChatData = {
    chatName: chatName || 'Group Chat',
    isGroupChat: true,
    users: users,
    groupAdmin: req.user._id,
  };

  try {
    const groupChat = await Chat.create(groupChatData);
    const fullGroupChat = await Chat.findById(groupChat._id).populate('users', '-password').populate('groupAdmin', '-password');

    return res.status(201).json(fullGroupChat);
  } catch (error) {
    next(error);
  }
});
