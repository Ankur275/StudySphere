import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import {GroupChat} from '../models/group_chat.models'

export const createGroup = asyncHandler(async (req, res) => {
  const { name, creatorId, members } = req.body

  // Validate request data
  if (!name || !creatorId || !members || !members.length) {
    throw new ApiError(400, 'Name, creatorId, and at least one member are required')
  }

  // Create a new group object
  const newGroup = new Group({
    name,
    creatorId,
    members
  })

  // Save the new group to the database
  await newGroup.save();

  // Respond with the newly created group
  ApiResponse(201, newGroup,  { message: 'Group created successfully', })
})
export const sendMessage = asyncHandler(async (req, res) => {
  
    const { groupId, senderId, content } = req.body;

    const groupChat = await GroupChat.findById(groupId);

    if (!groupChat) {
      throw new ApiError(409, "Group chat not found")
    }

    // Check if the sender is a member of the group chat
    if (!groupChat.members.includes(senderId)) {
      throw new ApiError(403, "You are not a member of this group chat ")
      // return res.status(403).json({ message: 'You are not a member of this group chat' });
    }

    // Create a new message object
    const newMessage = {
      sender: senderId,
      content
    };

    // Push the new message to the messages array of the group chat
    groupChat.messages.push(newMessage);

    // Save the updated group chat document
    await groupChat.save();
    res.status(201).json(
      new ApiResponse(200, newMessage, "Message sent successfully"))

})

export const fetchMessages = asyncHandler(async (req, res) => {
  const groupId = req.params.groupId;

  // Find the group chat by ID
  const groupChat = await GroupChat.findById(groupId);

  if (!groupChat) {
    throw new ApiError(404, 'Group chat not found');
  }

  // Return the messages for the group chat
  ApiResponse(200,{ messages: groupChat.messages });
})
