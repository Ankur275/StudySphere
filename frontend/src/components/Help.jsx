import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import EmailIcon from '@mui/icons-material/Email';

const faqs = [
  {
    question: 'How do I join a study group?',
    answer: 'Navigate to the Groups page, find a group you like, and click the "Join Group" button.',
  },
  {
    question: 'How can I reset my password?',
    answer: 'Go to Settings, and under Profile Information, click on "Reset Password".',
  },
  {
    question: 'How do I schedule a study session?',
    answer: 'On the Schedule page, click on the date you want and fill in the session details.',
  },
];

function Help() {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Help & Support
      </Typography>

      {/* FAQs */}
      <Box mb={4}>
        <Typography variant="h6" gutterBottom>
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>
                <HelpOutlineIcon sx={{ mr: 1 }} />
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{faq.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* Contact Support */}
      <Box>
        <Typography variant="h6" gutterBottom>
          Contact Support
        </Typography>
        <Typography variant="body2" gutterBottom>
          If you can't find an answer to your question, feel free to reach out to us.
        </Typography>
        <TextField
          label="Your Email"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField
          label="Your Message"
          variant="outlined"
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <Button variant="contained" startIcon={<EmailIcon />} sx={{ mt: 2 }}>
          Send Message
        </Button>
      </Box>
    </Box>
  );
}

export default Help;
