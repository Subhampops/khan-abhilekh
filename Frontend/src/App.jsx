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
// import Dashboard from './components/Home/Dashboard';


function App() {
  return (
    <Router>
      <div>
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
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
