import { User } from '../models/userModel.js';
import { ApiError } from '../utils/apiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/apiResponse.js';

// Update user profile
export const updateProfile = asyncHandler(async (req, res, next) => {
    const userId = req.user._id; // Assuming the user ID is coming from authentication middleware
    const { username, email, fullName, date_Of_Birth, Gender, phoneNumber, interest, language, qualification } = req.body;

    try {
        const user = await User.findById(userId);

        if (!user) {
            throw new ApiError(404, "User not found");
        }

        // Update fields only if provided in the request body
        if (username) user.username = username;
        if (email) user.email = email;
        if (fullName) user.fullName = fullName;
        if (date_Of_Birth) user.date_Of_Birth = date_Of_Birth;
        if (Gender) user.Gender = Gender;
        if (phoneNumber) user.phoneNumber = phoneNumber;
        if (interest) user.interest = interest;
        if (language) user.language = language;
        if (qualification) user.qualification = qualification;

        await user.save({
            validateBeforeSave: true
        });

        return res.status(200).json(new ApiResponse(200, user, "Profile updated successfully"));
    } catch (error) {
        console.error(error);
        next(error);
    }
});
