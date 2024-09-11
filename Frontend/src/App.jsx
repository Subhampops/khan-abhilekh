// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home/Home';
import Topbar from './components/Home/Topbar';
import Shift from './components/Home/Shift';
import EntryForm from './components/Home/EntryForm';
import Entries from './components/Home/Entries';
import Alerts from './components/Home/Alerts';
import Raisealert from './components/Home/Raisealert';
import Notification from './components/Home/Notification';
import Dashboard from './components/Home/Dashboard';
import AlertDetail from './components/Home/AlertDetail'; // Import the new component
import { AlertProvider } from './components/Home/AlertContext';
import Hazard from './components/Home/Hazard';
import Tracking from './components/Home/Tracking';
import Maintenance from './components/Home/Maintenance';
import Analyzer from './components/Home/Analyzer';
import Support from './components/Home/Support';

function App() {
  return (
    <Router>
      <AlertProvider>
        <div>
          {/* Add Topbar here if it needs to be present on all routes */}
          <Topbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shift" element={<Shift />} />
            <Route path="/entryform" element={<EntryForm />} />
            <Route path="/entries" element={<Entries />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/raisealert" element={<Raisealert />} />
            <Route path="/notification" element={<Notification />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/alert/:id" element={<AlertDetail />} /> 
            <Route path="/hazard" element={<Hazard />} />
            <Route path="/tracking" element={<Tracking />} />
            <Route path="/maintenance" element={<Maintenance />} />
            <Route path="/analyzer" element={<Analyzer />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </div>
      </AlertProvider>
    </Router>
  );
}

export default App;