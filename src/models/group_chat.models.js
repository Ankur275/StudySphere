import mongoose from 'mongoose'
const Schema = mongoose.Schema

const messageSchema = new Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
})

const groupChatSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }],
  createdAt: {
    type: Date,
    default: Date.now
  },
  messages: [messageSchema]
})

export const GroupChat = mongoose.model('GroupChat', groupChatSchema)

















// const messageSchema = new Schema({
//   sender: {
//     type: Schema.Types.ObjectId,
//     ref: 'User', 
//     required: true
//   },
//   content: {
//     type: String,
//     required: true
//   },
//   timestamp: {
//     type: Date,
//     default: Date.now
//   }
// });

// // Define the schema for a group chat conversation
// const groupChatSchema = new Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   participants: [{
//     type: Schema.Types.ObjectId,
//     ref: 'User', 
//     required: true
//   }],
//   messages: [messageSchema] 
// });


// export const GroupChat = mongoose.model('GroupChat', groupChatSchema);


