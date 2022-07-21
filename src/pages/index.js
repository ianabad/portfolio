import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import Me from './Me';
import Projects from './Projects';
import Work from './Work';
import Education from './Education';

// remove browserrouter and remove portfolio if it does not work
const Pages = ({ user }) => {
  return (
    <Router>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Link to ="/portfolio"/>
      </BrowserRouter>
      <Routes>
        <Route exact path="/portfolio/" element={<Me user={user} />} />
        <Route path="/portfolio/projects" element={<Projects user={user} />} />
        <Route path="/portfolio/work" element={<Work user={user} />} />
        <Route path="/portfolio/education" element={<Education user={user} />} />
      </Routes>
    </Router>
  );
};

export default Pages;
