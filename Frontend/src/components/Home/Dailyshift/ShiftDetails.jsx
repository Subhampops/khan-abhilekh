import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import Chatbot from '../Chatbot';

const ShiftDetails = () => {
    const { date } = useParams();

    // Fetch detailed report for the specific date
    const reportDetails = {
        date: '2024-09-12',
        shift: 'Morning',
        contractor: 'ABC Corp',
        production: 150,
        roofBolting: 2,
        detailedInfo: 'Detailed report content goes here...'
    };

    return (
        <div className="flex h-screen relative p-10">
            <Sidebar />
            <div className="flex-1">
                <Topbar />

                {/* Report Content */}
                <div className="p-10 bg-white rounded-lg shadow">
                    <h2 className="text-2xl font-bold mb-4">Shift Report for {reportDetails.date}</h2>
                    <p><strong>Shift:</strong> {reportDetails.shift}</p>
                    <p><strong>Contractor:</strong> {reportDetails.contractor}</p>
                    <p><strong>Production:</strong> {reportDetails.production} Tons</p>
                    <p><strong>Roof Bolting:</strong> {reportDetails.roofBolting} Nos</p>
                    <p className="mt-4">{reportDetails.detailedInfo}</p>

                    <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded shadow-md hover:bg-blue-600">
                        Download Report
                    </button>
                </div>
                <Chatbot />
            </div>
        </div>
    );
};

export default ShiftDetails;
