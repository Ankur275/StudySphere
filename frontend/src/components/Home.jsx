import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import ScheduleIcon from '@mui/icons-material/Schedule';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const stats = [
  {
    title: 'Study Hours This Week',
    value: 12,
    icon: <TrendingUpIcon color="primary" sx={{ fontSize: 40 }} />,
    color: '#e3f2fd',
  },
  {
    title: 'Active Study Groups',
    value: 3,
    icon: <GroupIcon color="secondary" sx={{ fontSize: 40 }} />,
    color: '#fce4ec',
  },
  {
    title: 'Upcoming Sessions',
    value: 2,
    icon: <ScheduleIcon color="success" sx={{ fontSize: 40 }} />,
    color: '#e8f5e9',
  },
  {
    title: 'Resources Accessed',
    value: 8,
    icon: <LibraryBooksIcon color="warning" sx={{ fontSize: 40 }} />,
    color: '#fff8e1',
  },
];

function Home() {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Welcome Back, [Your Name]!
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Here's a quick overview of your activities.
      </Typography>

      <Grid container spacing={3} mt={2}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Paper
                elevation={3}
                sx={{
                  padding: 2,
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: stat.color,
                }}
              >
                {stat.icon}
                <Box ml={2}>
                  <Typography variant="h6">{stat.value}</Typography>
                  <Typography variant="subtitle2">{stat.title}</Typography>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Home;
