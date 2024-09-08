import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosNotifications } from 'react-icons/io';
import Sidebar from './Sidebar';
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
                className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-72' : 'ml-0'} `}
            >
                <div className="relative mb-10 flex justify-between items-center">
                    {/* Hamburger icon when sidebar is closed */}
                    {!isSidebarOpen && (
                        <button onClick={toggleSidebar} className="text-2xl">
                            <RxHamburgerMenu />
                        </button>
                    )}

                    <div className="flex items-center space-x-8">
                        {/* Dashboard Button */}
                        <button className="bg-black text-white py-2 px-6 rounded hover:scale-110 transition-transform duration-300">
                            Dashboard
                        </button>
                        
                        {/* Notifications Icon */}
                        <IoIosNotifications className="text-4xl hover:scale-110 transition-transform duration-300" />
                        
                        {/* Profile Icon */}
                        <img
                            src="/assets/p.png"
                            alt="profile"
                            className="w-12 h-12 rounded-full hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    {/* Upper div containing profile details */}
                    <div className="w-full max-w-5xl flex flex-col items-center mb-10 p-6 bg-white shadow-lg rounded-lg">
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
                            className="w-[380px] h-[200px] rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
                        />
                        <img
                            src="/assets/le6.png"
                            alt="box6"
                            className="w-[380px] h-[200px] rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                </div>
            </div>
            <Chatbot/>
        </div>
    );
};

export default Home;
