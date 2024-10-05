import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Paper,
  Avatar,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from '@mui/material';
import { motion } from 'framer-motion';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

const groups = [
  {
    name: 'Calculus Study Group',
    members: 5,
    avatar: 'https://via.placeholder.com/150',
    description: 'A group dedicated to mastering calculus concepts.',
  },
  {
    name: 'Physics Enthusiasts',
    members: 8,
    avatar: 'https://via.placeholder.com/150',
    description: 'Discuss and learn about advanced physics topics.',
  },
  {
    name: 'Chemistry 101',
    members: 4,
    avatar: 'https://via.placeholder.com/150',
    description: 'Help each other out with introductory chemistry.',
  },
];

function Groups() {
  const [open, setOpen] = React.useState(false);
  const [groupData, setGroupData] = React.useState({
    name: '',
    description: '',
  });

  const handleDialogOpen = () => setOpen(true);
  const handleDialogClose = () => setOpen(false);

  const handleInputChange = (e) => {
    setGroupData({ ...groupData, [e.target.name]: e.target.value });
  };

  const handleCreateGroup = () => {
    // Logic to create group
    console.log(groupData);
    handleDialogClose();
  };

  return (
    <Box p={3}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h4">Study Groups</Typography>
        <Button variant="contained" startIcon={<GroupAddIcon />} onClick={handleDialogOpen}>
          Create New Group
        </Button>
      </Box>

      <Grid container spacing={3}>
        {groups.map((group, index) => (
          <Grid item xs={12} md={4} key={index}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Box display="flex" alignItems="center" mb={2}>
                  <Avatar src={group.avatar} sx={{ width: 60, height: 60, mr: 2 }} />
                  <Box>
                    <Typography variant="h6">{group.name}</Typography>
                    <Typography variant="subtitle2">{group.members} Members</Typography>
                  </Box>
                </Box>
                <Typography variant="body2" mb={2}>
                  {group.description}
                </Typography>
                <Button variant="outlined" fullWidth>
                  Join Group
                </Button>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Create Group Dialog */}
      <Dialog open={open} onClose={handleDialogClose}>
        <DialogTitle>Create New Study Group</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Group Name"
            type="text"
            fullWidth
            variant="outlined"
            name="name"
            value={groupData.name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            label="Group Description"
            type="text"
            fullWidth
            variant="outlined"
            name="description"
            value={groupData.description}
            onChange={handleInputChange}
            multiline
            rows={4}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button variant="contained" onClick={handleCreateGroup}>
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Groups;
