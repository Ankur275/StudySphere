import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [
  {
    title: 'Calculus Study Session',
    start: new Date(2024, 7, 26, 10, 0),
    end: new Date(2024, 7, 26, 12, 0),
  },
  {
    title: 'Physics Group Meeting',
    start: new Date(2024, 7, 28, 14, 0),
    end: new Date(2024, 7, 28, 16, 0),
  },
  {
    title: 'Chemistry Lab Prep',
    start: new Date(2024, 7, 30, 9, 0),
    end: new Date(2024, 7, 30, 11, 0),
  },
];

function Schedule() {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Schedule
      </Typography>
      <Paper elevation={3} sx={{ padding: 2, height: '75vh' }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: '100%', width: '100%' }}
        />
      </Paper>
    </Box>
  );
}

export default Schedule;
