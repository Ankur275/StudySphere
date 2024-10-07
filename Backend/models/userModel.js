import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true, 
        index: true
    },
    email: {
        type: String,
        required: [true, 'Email is  required'],
        unique: true,
        lowecase: true,
        trim: true, 
    },
    fullName: {
        type: String,
        trim: true, 
        index: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    date_Of_Birth: {
        type: Date,

    },
    bio:{
        type:String,
        trim:true
    },
    Gender:{
        type :String ,

    },
    phoneNumber:{
        type: String,
    },
    interest:{
        type: [String],
    },
    language:{
        type: String
    },
    qualfication: {
        type: [String]
    },
    resetPasswordToken:{
        type:String
    },
    resetPasswordExpires:{
        type:Date
    },
    refreshToken:{
        type:String
    }
},{
    timestamps:true
});

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    try{
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
    }catch(error){
        next(error);
    }
});

userSchema.methods.comparePassword = async function (candidatePassword){
    return await bcrypt.compare(candidatePassword,this.password);
};

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            _id: this._id,
            email: this.email,
            username: this.username,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
};

userSchema.methods.generateRefreshToken  = function(){
    return jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
};


export const User = mongoose.model('User',userSchema);
