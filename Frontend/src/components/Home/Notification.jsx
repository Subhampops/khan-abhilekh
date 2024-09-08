// Notification.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAlertContext } from './AlertContext';
import Topbar from './Topbar';
import Sidebar from './Sidebar';

const Notification = () => {
    const navigate = useNavigate();
    const { alerts, resolveAlert } = useAlertContext();

    const handleViewAlert = (alertId) => {
        navigate(`/alert/${alertId}`);
    };

    return (
        <div className="min-h-screen bg-gray-50 p-8">
            {/* Sidebar */}
            <Sidebar />

            {/* Top Bar */}
            <Topbar />

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
                                    <span className={`w-3 h-3 rounded-full bg-${alert.color}-500`}></span>
                                    <span className="font-semibold">{alert.level}</span>
                                </span>
                                <p>{alert.name}</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <button
                                    className="bg-black text-white py-2 px-4 rounded"
                                    onClick={() => handleViewAlert(alert.id)}
                                >
                                    VIEW ALERT
                                </button>
                                <button
                                    className="bg-green-500 text-white py-2 px-4 rounded"
                                    onClick={() => resolveAlert(alert.id)}
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
        </div>
    );
};

export default Notification;
