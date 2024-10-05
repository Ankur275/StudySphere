import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import DescriptionIcon from '@mui/icons-material/Description';

const resources = [
  {
    title: 'Calculus Notes',
    description: 'Comprehensive notes covering differential and integral calculus.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    title: 'Physics Formulas',
    description: 'A handy guide to essential physics formulas.',
    image: 'https://via.placeholder.com/300x200',
  },
  {
    title: 'Chemistry Lab Reports',
    description: 'Sample lab reports for common chemistry experiments.',
    image: 'https://via.placeholder.com/300x200',
  },
];

function Resources() {
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        Resource Library
      </Typography>
      <Grid container spacing={3}>
        {resources.map((resource, index) => (
          <Grid item xs={12} md={4} key={index}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={resource.image}
                  alt={resource.title}
                />
                <CardContent>
                  <Typography variant="h6">{resource.title}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {resource.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    startIcon={<DescriptionIcon />}
                    fullWidth
                  >
                    View Resource
                  </Button>
                </CardActions>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Resources;
