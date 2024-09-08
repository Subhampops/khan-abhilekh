import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Chatbot from './Chatbot';

const Shift = () => {
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

                <h2 className="text-2xl font-bold text-center flex-grow mt-24">CHOOSE YOUR SHIFT</h2>

                <div className="flex justify-around mt-10">
                    <Link to="/EntryForm">
                        <button className="bg-black text-white p-5 h-40 w-72 rounded-lg shadow hover:bg-gray-700 transition">
                            <div>First Shift</div>
                            <div className="text-sm mt-2">7:00 A.M to 3:00 P.M</div>
                        </button>
                    </Link>
                    <button className="bg-black text-white p-5 h-40 w-72 rounded-lg shadow hover:bg-gray-700 transition">
                        <div>Second Shift</div>
                        <div className="text-sm mt-2">3:00 P.M to 11:00 P.M</div>
                    </button>
                    <button className="bg-black text-white p-5 h-40 w-72 rounded-lg shadow hover:bg-gray-700 transition">
                        <div>Night Shift</div>
                        <div className="text-sm mt-2">11:00 P.M to 7:00 A.M</div>
                    </button>
                </div>
                <h2 className="text-2xl font-bold text-center flex-grow mt-28">DAILY FIRST SHIFT LOG ENTRY</h2>

                <div className="flex justify-around mt-6">
                    <Link to="/entryform">
                        <button className="bg-black text-white p-5 rounded-lg shadow hover:bg-gray-700 transition">
                            <div>SHIFT LOG ENTRY FORM</div>
                        </button>
                    </Link>
                </div>
            </div>

            <Chatbot />
        </div>
    );
};

export default Shift;
