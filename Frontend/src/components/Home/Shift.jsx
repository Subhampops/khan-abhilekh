import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

const Shift = () => {
    const [isChatOpen, setIsChatOpen] = useState(false); // State to toggle chatbot visibility
    const [chatMessages, setChatMessages] = useState([]); // State to hold chat messages
    const [inputValue, setInputValue] = useState(''); // State for the input message

    // Toggle chatbot widget visibility
    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    // Handle input change
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    // Send message to the server and get bot response
    const handleSendMessage = async () => {
        if (inputValue.trim() === '') return;

        const userMessage = inputValue;
        setChatMessages([...chatMessages, { message: userMessage, sender: 'user' }]);

        try {
            const response = await fetch('http://localhost:5000/api/chatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userMessage }),
            });

            const data = await response.json();
            const botMessage = data.botMessage;

            // Add bot message to chat
            setChatMessages([...chatMessages, { message: userMessage, sender: 'user' }, { message: botMessage, sender: 'bot' }]);
            setInputValue('');
        } catch (error) {
            console.error('Error communicating with the chatbot API:', error);
            setChatMessages([...chatMessages, { message: userMessage, sender: 'user' }, { message: 'Error communicating with the chatbot API.', sender: 'bot' }]);
        }
    };

    return (
        <div className="flex flex-col md:flex-row h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 p-8 ">
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
                <h2 className="text-2xl font-bold text-center flex-grow">CHOOSE YOUR SHIFT</h2>

                <div className="flex justify-around mt-20">
                    <Link to="/Logentry">
                        <button className="bg-black text-white p-5 h-40 w-60 rounded-lg shadow hover:bg-gray-700 transition">
                            <div>First Shift</div>
                            <div className="text-sm mt-2">7:00 A.M to 3:00 P.M</div>
                        </button>
                    </Link>
                    <button className="bg-black text-white p-5 h-40 w-60 rounded-lg shadow hover:bg-gray-700 transition">
                        <div>Second Shift</div>
                        <div className="text-sm mt-2">3:00 P.M to 11:00 P.M</div>
                    </button>
                    <button className="bg-black text-white p-5 h-40 w-60 rounded-lg shadow hover:bg-gray-700 transition">
                        <div>Night Shift</div>
                        <div className="text-sm mt-2">11:00 P.M to 7:00 A.M</div>
                    </button>
                </div>
            </div>

            {/* Chatbot Toggle Button */}
            <div className="fixed bottom-10 right-10">
                <img
                    src="/assets/chatbot.png"
                    alt="Chatbot"
                    className="w-20 h-20 cursor-pointer hover:scale-110 transition-transform duration-300"
                    onClick={toggleChat}
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
                        {chatMessages.map((msg, index) => (
                            <p key={index} className={`text-${msg.sender === 'user' ? 'blue' : 'gray'}-600`}>
                                {msg.sender === 'user' ? 'You: ' : 'Bot: '} {msg.message}
                            </p>
                        ))}
                    </div>
                    <div className="p-4 border-t border-gray-200">
                        <input
                            type="text"
                            placeholder="Type your message..."
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            value={inputValue}
                            onChange={handleInputChange}
                        />
                        <button
                            onClick={handleSendMessage}
                            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Shift;
