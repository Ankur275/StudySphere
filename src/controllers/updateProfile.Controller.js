import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js"
import { User} from "../models/user.models.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken"
import mongoose from "mongoose";


export const updateUser = asyncHandler(async (req, res) => {
  const { username, email, password, fullname, date_Of_Birth, qualification, Gender, interest, phoneNumber, language } = req.body;

  if (!username || !qualification || !language || !interest) {
    return res.status(400).json({ message: 'All required fields must be provided.' });
  }

  // Check if the user already exists
  let existingUser = await user.findOne({ $or: [{ username }, { email }] });
  if (!existingUser) {
    return res.status(400).json({ message: 'User doesn\'t exists.' });
  }

  const updatedFields = {
    qualification,
    language,
    interest
  };

    const user = await User.findByIdAndUpdate(
        req.user?._id,
        {
            $set: updatedFields
        },
        {new: true}
        
    ).select("-password")

    return res
    .status(200)
    .json(new ApiResponse(200, user, "Account details updated successfully"))
});