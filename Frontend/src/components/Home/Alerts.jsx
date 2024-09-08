import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Chatbot from './Chatbot';

const Alerts = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Toggle Sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex flex-col md:flex-row h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            {/* Main Content */}
            <div
                className={`flex-1 p-8 relative transition-all duration-300 ${
                    isSidebarOpen ? 'ml-64' : 'ml-0'
                }`}
            >
                {/* Top Bar */}
                <Topbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

                
                <h2 className="text-2xl font-bold text-center flex-grow mt-28">AUTOMATED ALERTS</h2>

                <div className="flex justify-around mt-6">
                    <Link to="/raisealert">
                        <button className="bg-black text-white p-5 w-96 rounded-lg shadow hover:bg-gray-700 transition">
                            <div>RAISE ALERT</div>
                        </button>
                    </Link>
                </div>
            </div>

            <Chatbot />
        </div>
    );
};

export default Alerts;
