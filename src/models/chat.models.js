import mongoose from 'mongoose'
const Schema = mongoose.Schema

const messageSchema = new Schema({
  sender: {
    type: Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
  receiver: {
    type: Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
  content: {
    type: String,
    required: true
  },
  emojis: [{ 
    emoji: String,
    count: { type: Number, default: 1 } 
  }],
  timestamp: {
    type: Date,
    default: Date.now
  }
});

// Define the schema for a chat conversation
const chatSchema = new Schema({
  participants: [{
    type: Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  }],
  messages: [messageSchema] 
});


export const Chat = mongoose.model('Chat', chatSchema);

