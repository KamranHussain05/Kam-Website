import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ThemeProvider from './components/ThemeProvider';
import Navbar from './components/navbar';
import MainPage from './pages/home';
// Import other page components when they're created
// import PodcastPage from './PodcastPage';
// import BlogPage from './BlogPage';
// import PublicationsPage from './PublicationsPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<MainPage />} />
            {/* Add routes for other pages when they're created */}
            {/* <Route path="/podcast" element={<PodcastPage />} /> */}
            {/* <Route path="/blog" element={<BlogPage />} /> */}
            {/* <Route path="/publications" element={<PublicationsPage />} /> */}
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;