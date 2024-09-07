import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    
    const getLinkClass = (path) => {
        return location.pathname === path 
            ? 'text-black font-bold'
            : 'text-gray-600 hover:text-black';
    };

    return (
        <div className="w-full md:w-1/4 bg-white p-5 border-r border-gray-200">
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
                    <Link to="/create-shift-log-entry" className={getLinkClass('/create-shift-log-entry')}>
                        Create Shift Log Entry
                    </Link>
                </li>
                <li>
                    <Link to="/hazard-detection" className={getLinkClass('/hazard-detection')}>
                        Hazard Detection and Mapping
                    </Link>
                </li>
                <li>
                    <Link to="/compliance-tracking" className={getLinkClass('/compliance-tracking')}>
                        Compliance Tracking
                    </Link>
                </li>
                <li>
                    <Link to="/automated-alerts" className={getLinkClass('/automated-alerts')}>
                        Automated Alerts
                    </Link>
                </li>
                <li>
                    <Link to="/predictive-maintenance" className={getLinkClass('/predictive-maintenance')}>
                        Predictive Maintenance
                    </Link>
                </li>
                <li>
                    <Link to="/risk-analyzer" className={getLinkClass('/risk-analyzer')}>
                        Risk Analyzer
                    </Link>
                </li>
                <li>
                    <Link to="/offline-mode" className={getLinkClass('/offline-mode')}>
                        Offline Mode
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
