import React from 'react';
import Navbar from '../components/navbar';
import '../css/App.css';

function Home() {
    return (
        <div className='App-header' >
            <Navbar />
            <h1>Welcome to my website!</h1>
            <p>This is the home page.</p>
        </div>
    );
}

export default Home;