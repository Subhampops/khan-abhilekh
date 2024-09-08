// Home.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Chatbot from './Chatbot';

const Home = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Toggle Sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen relative p-10">
            {/* Sidebar */}
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            {/* Main Content */}
            <div
                className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-72' : 'ml-0'} ${
                    isSidebarOpen ? 'pl-4' : ''
                }`}
            >
                {/* Top Bar */}
                <Topbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

                {/* Main Content */}
                <div className="pt-16">
                    <div className="flex flex-col items-center">
                        {/* Upper div containing profile details */}
                        <div className="w-full max-w-4xl flex flex-col items-center mb-10 p-6 bg-slate-200 shadow-lg rounded-lg">
                            <img
                                src="/assets/p1.png"
                                alt="profile"
                                className="w-30 h-30 rounded-full"
                            />
                            <h2 className="mt-4 text-xl font-bold">Manish Sharma</h2>
                            <h3 className="text-sm text-gray-600">Shift Supervisor</h3>
                            <div className="bg-black text-white max-w-7xl text-sm p-2 mt-3 rounded-md flex justify-center items-center">
                                <span className="mr-2">• Attendance - 201/365 days</span>
                                <span className="mr-2">• Overtime Count - 34</span>
                                <span >• Performance - <span className='text-green-400'>Excellent</span></span>
                            </div>
                        </div>

                        {/* Box grid centered */}
                        <div className="grid grid-cols-2 gap-10 justify-center items-center">
                            <img
                                src="/assets/le1.png"
                                alt="box1"
                                className="w-[380px] h-[200px] rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
                            />
                            <img
                                src="/assets/le2.png"
                                alt="box2"
                                className="w-[380px] h-[200px] rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
                            />
                            <img
                                src="/assets/le3.png"
                                alt="box3"
                                className="w-[380px] h-[200px] rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
                            />
                            <img
                                src="/assets/le4.png"
                                alt="box4"
                                className="w-[380px] h-[200px] rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
                            />
                            <img
                                src="/assets/le5.png"
                                alt="box5"
                                className="w-[380px] h-[200px] rounded-lg shadow-lg mb-20 hover:scale-110 transition-transform duration-300"
                            />
                            <img
                                src="/assets/le6.png"
                                alt="box6"
                                className="w-[380px] h-[200px] rounded-lg shadow-lg mb-20 hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <Chatbot />
        </div>
    );
};

export default Home;
