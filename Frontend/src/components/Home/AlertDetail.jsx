// AlertDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { useAlertContext } from './AlertContext';

const AlertDetail = () => {
    const { id } = useParams();
    const { alerts } = useAlertContext();

    const alert = alerts.find(alert => alert.id === parseInt(id));

    if (!alert) {
        return <p>Alert not found</p>;
    }

    return (
        <div className="min-h-screen bg-gray-50 p-8 mt-28">
            <div className="bg-white p-8 mx-auto max-w-4xl rounded-lg shadow-lg">
                <h1 className="text-2xl font-semibold mb-4">Alert Details</h1>
                <p><strong>Date:</strong> {alert.date}</p>
                <p><strong>Level:</strong> {alert.level}</p>
                <p><strong>District:</strong> {alert.district}</p>
                <p><strong>Seam:</strong> {alert.seam}</p>
                <p><strong>Machine at Fault:</strong> {alert.machineFault}</p>
                <p><strong>Machine Name:</strong> {alert.machineName}</p>
                <p><strong>Description:</strong> {alert.description}</p>
                <p><strong>Impact:</strong> {alert.impact}</p>
                <p><strong>Estimated Downtime:</strong> {alert.downtime} hours</p>
                <p><strong>Action Taken:</strong> {alert.action}</p>
                <p><strong>Alert Level:</strong> {alert.level}</p>
            </div>
        </div>
    );
};

export default AlertDetail;
