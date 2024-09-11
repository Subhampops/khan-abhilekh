import React from 'react';
import { IoMdClose } from 'react-icons/io';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaClipboardList, FaExclamationTriangle, FaChartLine, FaBell, FaCogs, FaShieldAlt, FaWifi } from 'react-icons/fa';
import { GiMiner } from "react-icons/gi";


const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
    const location = useLocation();

    const getLinkClass = (path) => {
        return location.pathname === path
            ? 'text-black font-bold bg-gray-200'
            : 'text-gray-600 hover:text-black hover:bg-gray-100';
    };

    const menuItems = [
        { path: '/home', label: 'Home', icon: <FaHome /> },
        { path: '/shift', label: 'Shift Log Entries', icon: <FaClipboardList /> },
        { path: '/hazard', label: 'Hazard Detection', icon: <FaExclamationTriangle /> },
        { path: '/tracking', label: 'Compliance Tracking', icon: <FaChartLine /> },
        { path: '/alerts', label: 'Automated Alerts', icon: <FaBell /> },
        { path: '/maintenance', label: 'Predictive Maintenance', icon: <FaCogs /> },
        { path: '/analyzer', label: 'Risk Analyzer', icon: <FaShieldAlt /> },
        { path: '/support', label: 'Training and Support', icon: <GiMiner /> }, 
        { path: '/offline-mode', label: 'Offline Mode', icon: <FaWifi /> },
    ];

    return (
        <div
            className={`fixed top-0 left-0 h-full w-64 bg-white p-5 shadow-lg z-50 transition-transform duration-300 ${
                isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            <button
                onClick={toggleSidebar}
                className="absolute top-5 right-5 text-2xl text-gray-600 hover:text-black transition-colors"
            >
                <IoMdClose />
            </button>
            <ul className="space-y-4 pt-20">
                {menuItems.map((item) => (
                    <li key={item.path}>
                        <Link to={item.path} className={`flex items-center p-3 rounded-lg transition-colors ${getLinkClass(item.path)}`}>
                            <span className="mr-3 text-xl">{item.icon}</span>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
