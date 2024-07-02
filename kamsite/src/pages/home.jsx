import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import BrainVisualization from '../components/brainviz';
import Navbar from '../components/navbar';
import ThemeProvider from '../components/ThemeProvider';

const MainPage = () => {
  return (
    <div className="main-content fade-in">
      <Navbar />
      <BrainVisualization />
      <Container maxWidth="md" className="relative z-10 pt-16">
        <Box className="text-center mb-8">
          <Typography variant="h2" className="font-bold text-4xl md:text-6xl text-white drop-shadow-lg">
            Kamran Hussain
          </Typography>
        </Box>

        <Box className="bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 p-6 rounded-lg shadow-lg">
          <Typography variant="h4" gutterBottom>
            About Me
          </Typography>
          <Typography variant="body1" paragraph>
            Your short about me summary goes here. Mention your passion for neuroscience and brain-computer interfaces.
          </Typography>

          <Typography variant="h4" gutterBottom className="mt-8">
            Timeline
          </Typography>
          <Timeline position="alternate">
          <TimelineItem className="timeline-item">
              <TimelineSeparator>
                <TimelineDot className='timeline-dot'/>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="timeline-content">
                <Typography variant="h6">2020</Typography>
                <Typography>Started my current job at XYZ Company</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem className="timeline-item">
              <TimelineSeparator>
                <TimelineDot className="timeline-dot" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="timeline-content">
                <Typography variant="h6">2018</Typography>
                <Typography>Graduated from University with a degree in Computer Science</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem className="timeline-item">
              <TimelineSeparator>
                <TimelineDot className="timeline-dot" />
              </TimelineSeparator>
              <TimelineContent className="timeline-content">
                <Typography variant="h6">2015</Typography>
                <Typography>Started my first internship at ABC Tech</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
      </Container>
    </div>
  );
};

export default MainPage;