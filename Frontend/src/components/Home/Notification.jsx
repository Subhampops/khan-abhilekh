import React, { useState } from 'react';
import Topbar from './Topbar'; // Import your Topbar component
import Sidebar from './Sidebar'; // Import your Sidebar component
import Chatbot from './Chatbot'; // Import your Chatbot component

const Notification = () => {
    // State to manage sidebar visibility
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Function to toggle sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // State to manage alerts list
    const [alerts, setAlerts] = useState([
        { id: 1, date: "06-08-2024 15:24:44", level: "CRITICAL", color: "red", name: "MANISH SHARMA" },
        { id: 2, date: "06-08-2024 22:37:55", level: "MEDIUM", color: "orange", name: "MANISH SHARMA" }
    ]);

    // Function to remove alert from the list
    const handleResolveIssue = (alertId) => {
        setAlerts(alerts.filter(alert => alert.id !== alertId));
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            {/* Sidebar */}
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            {/* Top Bar */}
            <Topbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            {/* Heading */}
            <h1 className="text-2xl text-center mt-24 mb-6">ALERT RAISED</h1>

            {/* Alerts Table */}
            <div className="flex flex-col items-center">
                <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
                    {/* Alerts List */}
                    {alerts.length > 0 ? alerts.map((alert) => (
                        <div key={alert.id} className="flex justify-between items-center mb-4">
                            <div className="flex items-center space-x-4">
                                <p>{alert.date}</p>
                                <span className="flex items-center space-x-2">
                                    {/* Colored circle before the alert level */}
                                    <span className={`w-3 h-3 rounded-full bg-${alert.color}-500`}></span>
                                    <span className="font-semibold">{alert.level}</span>
                                </span>
                                <p>{alert.name}</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <button className="bg-black text-white py-2 px-4 rounded">VIEW ALERT</button>
                                <button 
                                    className="bg-green-500 text-white py-2 px-4 rounded"
                                    onClick={() => handleResolveIssue(alert.id)}
                                >
                                    ISSUE RESOLVED
                                </button>
                            </div>
                        </div>
                    )) : (
                        <p className="text-center text-gray-500">No alerts available.</p>
                    )}
                </div>
            </div>

            {/* Chatbot */}
            <Chatbot />
        </div>
    );
};

export default Notification;
