import React from 'react';
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  TextField,
  IconButton,
  Paper,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const chats = [
  {
    name: 'John Doe',
    message: 'Hey, are you joining the study session tomorrow?',
    avatar: 'https://via.placeholder.com/150',
    time: '10:30 AM',
  },
  {
    name: 'Physics Group',
    message: 'Don\'t forget to review chapter 5 before our meeting.',
    avatar: 'https://via.placeholder.com/150',
    time: '9:15 AM',
  },
  {
    name: 'Jane Smith',
    message: 'Can you help me with the calculus homework?',
    avatar: 'https://via.placeholder.com/150',
    time: 'Yesterday',
  },
];

function Chats() {
  const [selectedChat, setSelectedChat] = React.useState(null);
  const [message, setMessage] = React.useState('');

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
  };

  const handleSendMessage = () => {
    // Logic to send message
    console.log('Message sent:', message);
    setMessage('');
  };

  return (
    <Box p={3} display="flex" height="80vh">
      {/* Chat List */}
      <Paper elevation={3} sx={{ width: '30%', mr: 2, overflowY: 'scroll' }}>
        <List>
          {chats.map((chat, index) => (
            <React.Fragment key={index}>
              <ListItem button onClick={() => handleChatSelect(chat)}>
                <ListItemAvatar>
                  <Avatar src={chat.avatar} />
                </ListItemAvatar>
                <ListItemText
                  primary={chat.name}
                  secondary={chat.message}
                />
                <Typography variant="caption" color="textSecondary">
                  {chat.time}
                </Typography>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Paper>

      {/* Chat Window */}
      <Paper elevation={3} sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {selectedChat ? (
          <>
            <Box p={2} borderBottom="1px solid #ccc">
              <Typography variant="h6">{selectedChat.name}</Typography>
            </Box>
            <Box p={2} flexGrow={1} overflowY="scroll">
              {/* Messages would be displayed here */}
              <Typography variant="body2" color="textSecondary">
                This is the beginning of your conversation with {selectedChat.name}.
              </Typography>
            </Box>
            <Box p={2} display="flex">
              <TextField
                variant="outlined"
                placeholder="Type your message..."
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <IconButton color="primary" onClick={handleSendMessage}>
                <SendIcon />
              </IconButton>
            </Box>
          </>
        ) : (
          <Box p={2} display="flex" justifyContent="center" alignItems="center" height="100%">
            <Typography variant="h6" color="textSecondary">
              Select a chat to start messaging
            </Typography>
          </Box>
        )}
      </Paper>
    </Box>
  );
}

export default Chats;
