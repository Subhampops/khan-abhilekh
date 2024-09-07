import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import Shift from './components/Home/Shift';
import Logentry from './components/Home/Logentry';

function App() {
  return (
    <div>
      <Router>
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/shift" element={<Shift />} />
      <Route path="/Logentry" element={<Logentry />} />
      </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;