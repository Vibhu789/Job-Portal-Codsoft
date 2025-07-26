import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import JobListPage from './pages/JobListPage';
import JobDetailPage from './pages/JobDetailPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/jobs' element={<JobListPage />} />
        <Route path='/logging' element={<logger />} />
        <Route path='/jobs/:id' element={<JobDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;