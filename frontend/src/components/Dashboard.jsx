import React from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText, ListItemIcon, Avatar, Button } from '@mui/material';
import { motion } from 'framer-motion';

function Dashboard() {
  return (
    <motion.div
      className="flex-1 p-6 space-y-6"
      style={{ marginLeft: '240px' }} // Adjusting for fixed-width navbar
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Dashboard Sections */}
      <Grid container spacing={3}>
        {/* Study Buddy Matches */}
        <Grid item xs={12} md={4}>
          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6">Study Buddy Matches</Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Avatar src="https://via.placeholder.com/40" alt="Buddy" />
                  </ListItemIcon>
                  <ListItemText primary="John Doe" secondary="Mathematics" />
                  <Button variant="contained" color="success">Connect</Button>
                </ListItem>
                {/* Add more matches as needed */}
              </List>
            </Paper>
          </motion.div>
        </Grid>

        {/* Study Sessions */}
        <Grid item xs={12} md={4}>
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6">Upcoming Study Sessions</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Algorithms" secondary="Aug 25, 2024 - 10:00 AM" />
                  <Button variant="contained" color="primary">Join</Button>
                </ListItem>
                {/* Add more sessions as needed */}
              </List>
            </Paper>
          </motion.div>
        </Grid>

        {/* Resource Library */}
        <Grid item xs={12} md={4}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6">Resource Library</Typography>
              <List>
                <ListItem>
                  <ListItemText primary="Data Structures Notes" />
                  <Button variant="contained" color="secondary">View</Button>
                </ListItem>
                {/* Add more resources as needed */}
              </List>
            </Paper>
          </motion.div>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {/* Progress Tracking */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Progress Tracking</Typography>
            <Typography variant="body2">Study Goal: 20 hours/week</Typography>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <motion.div
                className="bg-blue-500 h-2.5 rounded-full"
                style={{ width: "70%" }}
                initial={{ width: "0%" }}
                animate={{ width: "70%" }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </Paper>
        </Grid>

        {/* Message Center */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Message Center</Typography>
            <Typography variant="body2">No new messages.</Typography>
          </Paper>
        </Grid>

        {/* Announcements */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Announcements</Typography>
            <Typography variant="body2">New feature update coming soon!</Typography>
          </Paper>
        </Grid>
      </Grid>
    </motion.div>
  );
}

export default Dashboard;
