import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoIosNotifications } from 'react-icons/io';
import { IoMdClose } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation

const Topbar = ({ isSidebarOpen, toggleSidebar }) => {
    const location = useLocation();

    // List of paths where Topbar should not be displayed
    const hiddenPaths = ['/', '/login', '/signup'];

    // Check if current path is in the hiddenPaths array
    if (hiddenPaths.includes(location.pathname)) {
        return null; // Don't render Topbar
    }

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
                <Link to="/dashboard">
                    <button className="bg-black text-white py-2 px-6 rounded hover:scale-110 transition-transform duration-300">
                        Dashboard
                    </button>
                </Link>

                {/* Notifications Icon */}
                <Link to="/notification">
                    <IoIosNotifications className="text-4xl hover:scale-110 transition-transform duration-300" />
                </Link>
                
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
