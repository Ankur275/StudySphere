import {GroupChat} from '../models/group_chat.models.js'
import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js";

// Controller function to join a group
exports.joinGroup = asyncHandler(async (req, res) => {
  const { groupId, userId } = req.body;

  // Validate request data
  if (!groupId || !userId) {
    throw new ApiError(400, 'Group ID and user ID are required');
  }

  // Find the group by ID
  const group = await GroupChat.findById(groupId);

  if (!group) {
    throw new ApiError(400, 'Group not found');
  }

  // Check if the user is already a member of the group
  if (group.members.includes(userId)) {
    throw new ApiError( 400,'User is already a member of this group');
  }

  // Add the user to the group members
  group.members.push(userId);

  // Save the updated group
  await group.save();

  ApiResponse( 200, group ,'User joined the group successfully');
});