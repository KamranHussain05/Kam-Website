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
          Kamran is an undergraduate student in Electrical Engineering interested in the development and application of Brain-Computer Interfaces, currently researching cortical organoid learning, memory, and neural dynamics. He previously spent 1.5 years on foundation machine learning at NASA Ames Research center, nearly a year at the UC San Diego Translational Neuroengineering Lab building speech neuroprosthetics, and 4 months at the Nobel prize winning Sudhof lab at Stanford working on automated imaging of neurotransmitters. Between NASA and starting his studies at UCSC, Kamran built and exited an AI startup that developed generative dynamic interfaces targeted towards visualizing educational concepts. He is currently an Undergraduate Neural Engineering Researcher at the Braingeneers research group at the UC Santa Cruz Genomics Institute advised by Dr. Mircea Teodorescu and Dr. David Haussler.
          </Typography>

          <Typography variant="h4" gutterBottom className="mt-8">
            My Story...
          </Typography>
          <Timeline position="alternate">
          <TimelineItem className="timeline-item">
              <TimelineSeparator>
                <TimelineDot className='timeline-dot'/>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="timeline-content">
                <Typography variant="h6">October 2023 - Present</Typography>
                <Typography>Researching cortical organoid learning and building bio-inspired AI at the Braingeneers group at the UCSC Genomics Institute advised by Dr. Mircea Teodorescu and Dr. David Haussler</Typography>
              </TimelineContent>
            </TimelineItem>
          <TimelineItem className="timeline-item">
              <TimelineSeparator>
                <TimelineDot className='timeline-dot'/>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="timeline-content">
                <Typography variant="h6">September 2023 - Present</Typography>
                <Typography>Studying Electrical Engineering at UC Santa Cruz</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem className="timeline-item">
              <TimelineSeparator>
                <TimelineDot className="timeline-dot" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent className="timeline-content">
                <Typography variant="h6">July 2023 - March 2024 </Typography>
                <Typography>Applying LLMs to generative interfaces for explaining educational concepts at TensorLearn</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem className="timeline-item">
              <TimelineSeparator>
                <TimelineDot className="timeline-dot" />
              </TimelineSeparator>
              <TimelineContent className="timeline-content">
                <Typography variant="h6">July 2022 - March 2023</Typography>
                <Typography>Building the foundation for speech neuroprosthetics at the UC San Diego Translational Neuroengineering Lab advised by Dr. Vikash Gilja</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem className="timeline-item">
              <TimelineSeparator>
                <TimelineDot className="timeline-dot" />
              </TimelineSeparator>
              <TimelineContent className="timeline-content">
                <Typography variant="h6">January 2022 - May 2023</Typography>
                <Typography>Developing foundation machine learning models for NLP and air space management at NASA Ames Research Center advised by Dr. Aditya Das</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem className="timeline-item">
              <TimelineSeparator>
                <TimelineDot className="timeline-dot" />
              </TimelineSeparator>
              <TimelineContent className="timeline-content">
                <Typography variant="h6">January 2022 - April 2022</Typography>
                <Typography>Creating computer vision pipelines for the automated imaging of neurotransmitters at the Sudhof Lab at Stanford advised by Thomas Sudhof</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem className="timeline-item">
              <TimelineSeparator>
                <TimelineDot className="timeline-dot" />
              </TimelineSeparator>
              <TimelineContent className="timeline-content">
                <Typography variant="h6">July 2021</Typography>
                <Typography>Building Gesture Driven Augment Reality Navigation -- a unity-based VR navigation utility that won Helix Hacks II</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem className="timeline-item">
              <TimelineSeparator>
                <TimelineDot className="timeline-dot" />
              </TimelineSeparator>
              <TimelineContent className="timeline-content">
                <Typography variant="h6">April 2021</Typography>
                <Typography>Building Link-Saver -- a Java-based online learning utility to win the BAYCO Hackathon</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem className="timeline-item">
              <TimelineSeparator>
                <TimelineDot className="timeline-dot" />
              </TimelineSeparator>
              <TimelineContent className="timeline-content">
                <Typography variant="h6">February 2020</Typography>
                <Typography>Organizing the NCCAVS 9th Annual Student Poster Session </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
      </Container>
    </div>
  );
};

export default MainPage;