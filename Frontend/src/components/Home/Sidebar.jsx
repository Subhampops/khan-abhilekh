import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
    const location = useLocation();

    const getLinkClass = (path) => {
        return location.pathname === path 
            ? 'text-black font-bold'
            : 'text-gray-600 hover:text-black';
    };

    return (
        <div
            className={`fixed top-0 left-0 h-full w-64 bg-white p-5 shadow-lg z-50 transition-transform duration-300 ${
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            <button
                onClick={toggleSidebar}
                className="absolute top-5 right-5 text-2xl"
            >
                <IoMdClose />
            </button>
            <ul className="space-y-4 pt-20">
                <li>
                    <Link to="/" className={getLinkClass('/')}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/shift-log-entries" className={getLinkClass('/shift-log-entries')}>
                        Shift Log Entries
                    </Link>
                </li>
                <li>
                    <Link to="/Shift" className={getLinkClass('/Shift')}>
                    Create Shift Log Entry
                    </Link>
                </li>
                <li>
                    <Link to="/shift-log-entries" className={getLinkClass('/shift-log-entries')}>
                    Hazard Detection and Mapping
                    </Link>
                </li>
                <li>
                    <Link to="/shift-log-entries" className={getLinkClass('/shift-log-entries')}>
                    Compliance Tracking
                    </Link>
                </li>
                <li>
                    <Link to="/shift-log-entries" className={getLinkClass('/shift-log-entries')}>
                    Automated Alerts
                    </Link>
                </li>
                <li>
                    <Link to="/shift-log-entries" className={getLinkClass('/shift-log-entries')}>
                    Predictive Maintenance
                    </Link>
                </li>
                <li>
                    <Link to="/shift-log-entries" className={getLinkClass('/shift-log-entries')}>
                    Risk Analyzer
                    </Link>
                </li>
                <li>
                    <Link to="/shift-log-entries" className={getLinkClass('/shift-log-entries')}>
                    Offline Mode
                    </Link>
                </li>
                {/* Other sidebar items */}
            </ul>
        </div>
    );
};

export default Sidebar;
