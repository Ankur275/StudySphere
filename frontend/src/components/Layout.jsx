import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Avatar, Button, List, ListItem, ListItemIcon, Drawer, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import ScheduleIcon from '@mui/icons-material/Schedule';
import ChatIcon from '@mui/icons-material/Chat';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import RuleIcon from '@mui/icons-material/Rule';
import Logo from '../assets/Logos/StudySphere_logo.png'; // Make sure the path is correct
import { useMediaQuery, useTheme } from '@mui/material';

const sidebarItems = [
  { text: 'Home', icon: <HomeIcon />, link: '/home' },
  { text: 'Groups', icon: <GroupIcon />, link: '/groups' },
  { text: 'Schedule', icon: <ScheduleIcon />, link: '/schedule' },
  { text: 'Chats', icon: <ChatIcon />, link: '/chats' },
  { text: 'Resources', icon: <LibraryBooksIcon />, link: '/resources' },
  { text: 'Settings', icon: <SettingsIcon />, link: '/settings' },
  { text: 'Help', icon: <HelpIcon />, link: '/help' },
  { text: 'Rules', icon: <RuleIcon />, link: '/rules' },
];

function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md')); // Detect screen sizes below 'md' breakpoint

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <Drawer
        variant={isSmallScreen ? "temporary" : "permanent"}
        open={isSidebarOpen || !isSmallScreen} // Sidebar is always open on large screens
        onClose={toggleSidebar}
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            backgroundColor: '#1a1a1a',
            color: '#fff',
          },
          display: { xs: isSidebarOpen ? 'block' : 'none', md: 'block' }, // Toggle for mobile
        }}
      >
        <div className="p-4">
          <img src={Logo} alt="StudySphere" className="m-auto" style={{ width: '100px' }} />
        </div>
        <List>
          {sidebarItems.map((item, index) => (
            <ListItem button key={index} component={Link} to={item.link}>
              <ListItemIcon sx={{ color: '#fff' }}>{item.icon}</ListItemIcon>
              {item.text}
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          padding: '24px',
          marginLeft: isSmallScreen ? 0 : '240px', // Push content right if sidebar is visible
          transition: 'margin 0.3s ease-in-out', // Smooth transition when sidebar appears/disappears
        }}
      >
        {/* Header */}
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            {isSmallScreen && (
              <IconButton edge="start" color="inherit" onClick={toggleSidebar} aria-label="menu">
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              StudySphere
            </Typography>
            <Avatar src="https://via.placeholder.com/40" alt="Profile" />
            <Button variant="contained" sx={{ marginLeft: 2 }}>Edit Profile</Button>
          </Toolbar>
        </AppBar>

        {/* Content from each page */}
        <Outlet />
      </Box>
    </div>
  );
}

export default Layout;
