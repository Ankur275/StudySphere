import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const rules = [
  'Respect all members and their opinions.',
  'No spamming or irrelevant self-promotion.',
  'Use appropriate channels for different topics.',
  'Do not share copyrighted materials without permission.',
  'Maintain academic integrity; no cheating or plagiarism.',
  'Report any inappropriate behavior to moderators.',
];

function Rules() {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Community Rules & Guidelines
      </Typography>
      <Paper elevation={3} sx={{ padding: 3 }}>
        <List>
          {rules.map((rule, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={rule} />
            </ListItem>
          ))}
        </List>
        <Box mt={3} display="flex" alignItems="center">
          <GavelIcon color="secondary" sx={{ mr: 1 }} />
          <Typography variant="body2" color="textSecondary">
            Violation of these rules may result in suspension or termination of your account.
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

export default Rules;
