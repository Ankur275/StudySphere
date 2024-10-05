import {User} from '../models/userModel.js';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import dotenv from 'dotenv';
import { ApiError } from '../utils/apiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/apiResponse.js';
dotenv.config();

const generateAccessAndRefreshToken = async(userId)=>{
    try{
        const user = await User.findById(userId);
        const accessToken  = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();
        user.refreshToken = refreshToken;
        await user.save({
            validateBeforeSave: true  
        });
        return{accessToken,refreshToken}
    }catch(error){
        console.log("Error in Generating token",error); 
        throw new ApiError(500,"Something went worng will generating access and refresh token");

    }
}

// transporter for nodemailer 
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:process.env.EMAIL,
        pass: process.env.APP_PSWD,
    }
})

//Register user
export const register = asyncHandler( async (req, res, next)=>{
    const {username, email, password} = req.body;
    // console.log(req.body)
    try{
        console.log("enter controller")
        const existUser = await User.findOne({ email });
        if(existUser) {
            throw new ApiError(409,"User with email or username already exists")
        } 

        const user = new User({ username, email, password});
        await user.save();
        const mailOption = {
            to:email,
            from: process.env.EMAIL,
            subject: 'Welcome to our community',
            text:`You have recieved this mail because you have register on our website.\n
            Enjoy studing here. `
        }

        // Send the welcome email
        transporter.sendMail(mailOption);
        return res.status(201).json(new ApiResponse(201,user,"User created successfully"))
    }catch(error){
        console.log(error);
        next(error)
    }
})


// Login
export const login = asyncHandler( async(req,res,next)=>{
    const { email, password } = req.body;
    if(!email || !password){
        throw new ApiError(400,"Email and Password is required")
    }
    try {
        const user = await User.findOne({ email });
        // console.log(`User${ user }`);
        if(!user){
            throw new ApiError(404,"User not found")
        }
        const isMatch = await user.comparePassword(password);
        // console.log(isMatch);
        if(!isMatch){
            throw new ApiError(401,"Invalid Email or Password")
        }
        const {accessToken, refreshToken} = await generateAccessAndRefreshToken(user._id);

        const option = {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production'? true : false
        }
        return res.status(200).cookie("accessToken",accessToken,option).cookie("refreshToken",refreshToken,option).json(new ApiResponse(200,user,"User logegd in successfully"));
    } catch (error) {
        next(error)
    }
});

//refresh token
export const refreshToken = asyncHandler(async (req, res, next) => {
    const refreshToken = req.cookies.refreshToken; // Assuming the refresh token is stored in an HTTP-only cookie

    if (!refreshToken) {
        throw new ApiError(403, "Refresh token is required");
    }

    try {
        // Verify the refresh token
        const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        const userId = decoded._id;

        // Find the user with the matching refresh token
        const user = await User.findById(userId);

        if (!user || user.refreshToken !== refreshToken) {
            throw new ApiError(403, "Invalid refresh token");
        }

        // Generate a new access token
        const newAccessToken = user.generateAccessToken();

        // Optionally generate a new refresh token (for token rotation)
        const newRefreshToken = user.generateRefreshToken();
        user.refreshToken = newRefreshToken;
        await user.save();

        // Send the new tokens to the client
        const options = {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production' ? true : false, // Secure flag for production
        };
        console.log(`refreshToken \n${refreshToken}\n\n${ newRefreshToken }`);

        return res.cookie('accessToken', newAccessToken, options).cookie('refreshToken', newRefreshToken, options).json({ accessToken: newAccessToken });

    } catch (error) {
        console.log("Refresh token error:", error);
        // next(new ApiError(403, "Invalid or expired refresh token"));
        next(error)
    }
});


// Reset Password Request
export const resetPasswordRequest = asyncHandler(async (req, res, next) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            // return res.status(400).json({ message: 'User not found' });
            throw new ApiError(400,'User not found')
        }

        const resetToken = crypto.randomBytes(32).toString('hex');
        user.resetPasswordToken = resetToken;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
        await user.save();

        const resetUrl = `http://localhost:5173/api/users/resetPassword/${resetToken}`;

        const mailOptions = {
            to: user.email,
            from: process.env.EMAIL,
            subject: 'Password Reset',
            text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
                Please click on the following link, or paste this into your browser to complete the process:\n\n
                ${resetUrl}\n\n
                If you did not request this, please ignore this email and your password will remain unchanged.\n`,
        };
    
        try{
            await transporter.sendMail(mailOptions);
        }catch(error){
            console.log("Email send Failed: ",error);
        }

        // console.log('Reset token generated and saved:', resetToken); // Log the reset token

        // res.status(200).json({ message: 'Reset password link sent' });
        return res.status(200).json(new ApiResponse(200,{},'Reset password link sent'))
    } catch (error) {
        // console.error('Error occurred during reset password request:', error);
        // res.status(500).json({ message: error.message, stack: error.stack });
        // throw new ApiError(500,error?.message,error?.stack)
        next(error)
    }
});

// Reset Password
export const resetPassword = asyncHandler(async (req, res, next) => {
    const { resetToken } = req.params;
    const { newPassword } = req.body;

    try {
        // console.log('Reset token received:', resetToken); // Log the received reset token

        const user = await User.findOne({
            resetPasswordToken: resetToken,
            resetPasswordExpires: { $gt: Date.now() },
        });

        if (!user) {
            // console.log('Token not found or expired'); // Log token not found or expired
            // return res.status(400).json({ message: 'Invalid or expired token' });
            throw new ApiError(400,"Invalid or expired token")
        }

        user.password = newPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();

        // console.log('Password has been reset for user:', user.email); // Log the user email whose password was reset

        // res.status(200).json({ message: 'Password has been reset' });
        return res.status(200).json(new ApiResponse(200,{},"Password has been reset"))
    } catch (error) {
        // console.error('Error occurred during password reset:', error);
        // res.status(500).json({ message: error.message, stack: error.stack });
        // throw new ApiError(500,error?.message)
        next(error)
    }
});

// User Logout
export const logout = asyncHandler(async (req, res, next) => {
    try {
        const userId = req.user._id;

        // Find the user by ID and invalidate the refresh token
        const user = await User.findById(userId);
        if (!user) {
            throw new ApiError(404, "User not found");
        }

        user.refreshToken = null; // Invalidate the refresh token
        await user.save({ validateBeforeSave: false });

        // Clear the cookies on the client side
        res.clearCookie('accessToken');
        res.clearCookie('refreshToken');

        return res.status(200).json(new ApiResponse(200, {}, "User logged out successfully"));
    } catch (error) {
        next(error);
    }
});
