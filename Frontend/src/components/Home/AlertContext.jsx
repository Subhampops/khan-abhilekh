// AlertContext.js
import React, { createContext, useState, useContext } from 'react';

const AlertContext = createContext();

export const useAlertContext = () => useContext(AlertContext);

export const AlertProvider = ({ children }) => {
    const [alerts, setAlerts] = useState([]);

    const addAlert = (alert) => {
        setAlerts((prevAlerts) => [...prevAlerts, alert]);
    };

    const resolveAlert = (alertId) => {
        setAlerts((prevAlerts) => prevAlerts.filter(alert => alert.id !== alertId));
    };

    return (
        <AlertContext.Provider value={{ alerts, addAlert, resolveAlert }}>
            {children}
        </AlertContext.Provider>
    );
};
