import React from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Grid,
  Paper,
  FormControlLabel,
  Switch,
} from '@mui/material';

function Settings() {
  const [profile, setProfile] = React.useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Passionate learner and aspiring engineer.',
    notifications: true,
    darkMode: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggleChange = (e) => {
    const { name, checked } = e.target;
    setProfile((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSaveChanges = () => {
    // Logic to save profile changes
    console.log('Profile updated:', profile);
  };

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Grid container spacing={3}>
        {/* Profile Information */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h6" gutterBottom>
              Profile Information
            </Typography>
            <Box display="flex" alignItems="center" mb={3}>
              <Avatar
                src="https://via.placeholder.com/150"
                sx={{ width: 80, height: 80, mr: 2 }}
              />
              <Button variant="outlined">Change Avatar</Button>
            </Box>
            <TextField
              label="Full Name"
              variant="outlined"
              fullWidth
              name="name"
              value={profile.name}
              onChange={handleInputChange}
              margin="normal"
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              value={profile.email}
              onChange={handleInputChange}
              margin="normal"
            />
            <TextField
              label="Bio"
              variant="outlined"
              fullWidth
              name="bio"
              value={profile.bio}
              onChange={handleInputChange}
              margin="normal"
              multiline
              rows={4}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
              onClick={handleSaveChanges}
            >
              Save Changes
            </Button>
          </Paper>
        </Grid>

        {/* Application Settings */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 3 }}>
            <Typography variant="h6" gutterBottom>
              Application Settings
            </Typography>
            <FormControlLabel
              control={
                <Switch
                  checked={profile.notifications}
                  onChange={handleToggleChange}
                  name="notifications"
                  color="primary"
                />
              }
              label="Email Notifications"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={profile.darkMode}
                  onChange={handleToggleChange}
                  name="darkMode"
                  color="primary"
                />
              }
              label="Dark Mode"
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Settings;
