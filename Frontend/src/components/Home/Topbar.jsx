// Topbar.jsx
import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosNotifications } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io';

const Topbar = ({ isSidebarOpen, toggleSidebar }) => {
    return (
        <div className="fixed top-0 left-0 right-0 flex shadow-md justify-between items-center p-4 bg-white z-10">
            {/* Sidebar toggle icon */}
            <button 
                onClick={toggleSidebar} 
                className={`text-2xl ${isSidebarOpen ? 'hidden' : 'block'}`}
            >
                <RxHamburgerMenu />
            </button>

            {/* Close icon when sidebar is open */}
            {isSidebarOpen && (
                <button onClick={toggleSidebar} className="text-2xl">
                    <IoMdClose />
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
    );
};

export default Topbar;
