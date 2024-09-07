import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Logentry = () => {
    const [isChatOpen, setIsChatOpen] = useState(false); // State to manage chatbot visibility

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    return (
        <div className="flex flex-col md:flex-row h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-10 mt-10">
                <div className="relative mb-10">
                    {/* Profile and Dashboard Button Container */}
                    <div className="absolute top-0 right-10 flex items-center space-x-4">
                        <Link to="/Dashboard">
                            <button className="bg-black text-white px-4 py-2 rounded hover:scale-110 transition-transform duration-300">
                                DASHBOARD
                            </button>
                        </Link>
                        <img
                            src="/assets/p.png"
                            alt="profile"
                            className="w-10 h-10 cursor-pointer hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                </div>
                <h2 className="text-2xl font-bold text-center flex-grow">DAILY FIRST SHIFT LOG ENTRY</h2>

                <div className="flex justify-around mt-20">
                    <Link to="/EntryForm">
                        <button className="bg-black text-white p-5 rounded-lg shadow hover:bg-gray-700 transition">
                            <div>SHIFT LOG ENTRY FORM</div>
                        </button>
                    </Link>
                </div>
            </div>

            {/* Chatbot Toggle Button */}
            <div className="fixed bottom-10 right-10">
                <img 
                    src="/assets/chatbot.png" 
                    alt="Chatbot" 
                    className="w-20 h-20 cursor-pointer hover:scale-110 transition-transform duration-300" 
                    onClick={toggleChat} // Click event to toggle chatbot
                />
            </div>

            {/* Chatbot Widget */}
            {isChatOpen && (
                <div className="fixed bottom-20 right-10 w-80 h-96 bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col">
                    <div className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-200">
                        <h3 className="font-semibold text-lg">Chat with our AI ✨</h3>
                        <button onClick={toggleChat} className="text-gray-500 hover:text-gray-800">
                            ✖
                        </button>
                    </div>
                    <div className="flex-1 p-4 overflow-y-auto">
                        <p className="text-gray-600">Hi there! How can I help you today?</p>
                        {/* Add more chatbot messages or inputs here */}
                    </div>
                    <div className="p-4 border-t border-gray-200">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Logentry;
