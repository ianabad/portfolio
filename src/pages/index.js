import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Education from './Education';

// remove browserrouter and remove portfolio if it does not work
const Pages = ({ user }) => {
  return (
    <Router>
      <Routes basename='/portfolio'>
        <Route exact path="/" element={<Me user={user} />} />
        <Route path="/projects" element={<Projects user={user} />} />
        <Route path="/work" element={<Work user={user} />} />
        <Route path="/education" element={<Education user={user} />} />
      </Routes>
    </Router>
  );
};

export default Pages;
