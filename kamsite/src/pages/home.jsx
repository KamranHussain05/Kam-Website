import React from 'react';
import Navbar from '../components/navbar';
import '../css/App.css';
import ImageWithText from '../components/left-contentcard';

function Home() {
    return (
        <div className='App-header' >
            <Navbar />
            <h1>Kamran Hussain</h1>
            <p>This is the home page.</p>
            <ImageWithText
                imagePath='https://www.w3schools.com/w3images/forestbridge.jpg'
                cardTitle='About Me'
                cardText={[
                    'Kamran is an avid fencer, AI enthusiast, and aspiring neural engineer. I am currently a student at the University of California, ' +
                    'Santa Cruz studying Electrical Engineering and Neuroscience. My research interests are in brain-computer interfacing and neuroprosthetics. ' +
                    'I aim to apply neural interfacing techniques (both material science and computational) to the field of neuroscience to develop the next generation ' +
                    'of neural prosthetics and use multi-modal interfacing to better understand learning and memory. My current work with cortical organoid learning ' +
                    'has exposed me to the possibility of biologically inspired AI and the potential to use cortical organoids as a model for neuroscience.'              
                ]}
            />
        </div>
    );
}

export default Home;