import react from 'react';
import Navbar from '../components/navbar';
import '../css/App.css';

function Research() {
    return (
        <div className='App-header' >
            <Navbar />
            <h1>This is my Research Page</h1>
            <p>I'm an aspiring neural enginering interested in the computational modeling and decoding of neural signals in the brain for both our understanding of the brain and for the development of brain-machine interfaces.</p>
        </div>
    );
}

export default Research;
