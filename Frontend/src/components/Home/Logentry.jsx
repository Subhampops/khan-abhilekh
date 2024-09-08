import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Chatbot from './Chatbot';

const Logentry = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State to manage sidebar visibility
    const [isChatOpen, setIsChatOpen] = useState(false); // State to manage chatbot visibility

    // Toggle Sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Toggle Chatbot
    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    return (
        <div className="flex flex-col md:flex-row h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            {/* Main Content */}
            <div
                className={`flex-1 p-10 relative transition-all duration-300 ${
                    isSidebarOpen ? 'ml-64' : 'ml-0'
                }`}
            >
                {/* Top Bar */}
                <Topbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

                <h2 className="text-2xl font-bold text-center flex-grow mt-16">DAILY FIRST SHIFT LOG ENTRY</h2>

                <div className="flex justify-around mt-20">
                    <Link to="/entryform">
                        <button className="bg-black text-white p-5 rounded-lg shadow hover:bg-gray-700 transition">
                            <div>SHIFT LOG ENTRY FORM</div>
                        </button>
                    </Link>
                </div>
            </div>

            {/* Chatbot Component */}
            <Chatbot isChatOpen={isChatOpen} toggleChat={toggleChat} />
        </div>
    );
};

export default Logentry;
