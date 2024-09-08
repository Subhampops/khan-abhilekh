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
<<<<<<< HEAD

=======
import AlertDetail from './components/Home/AlertDetail'; // Import the new component
import { AlertProvider } from './components/Home/AlertContext';
>>>>>>> 35b958feb42dfd0045daecf44c1cb3a6f0ee6067

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
            <Route path="/alert/:id" element={<AlertDetail />} /> {/* Route for alert details */}
          </Routes>
        </div>
      </AlertProvider>
    </Router>
  );
}

export default App;
