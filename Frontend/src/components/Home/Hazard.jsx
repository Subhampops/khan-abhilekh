// Hazard.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Chatbot from './Chatbot';
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, LineChart, Line } from 'recharts';
import Map from '../Map';
const dataHazardOverview = [{ name: 'Total Hazards', value: 120 }, { name: 'Critical Hazards', value: 15 }];
const dataHazardTrends = [
  { month: 'Jan', hazards: 30 },
  { month: 'Feb', hazards: 40 },
  { month: 'Mar', hazards: 35 },
  // More data...
];
const dataHazardDistribution = [
  { name: 'Gas Leak', value: 50 },
  { name: 'Fire', value: 30 },
  { name: 'Equipment Failure', value: 20 },
];

const COLORS = ['#FF6384', '#36A2EB', '#FFCE56'];

const Hazard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Toggle Sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen relative p-10 bg-gray-50">
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
                        {/* Hazard Overview */}
                        <div className="w-full max-w-4xl mb-10 p-6 bg-white shadow-lg rounded-lg">
                            <h2 className="text-2xl font-bold mb-4">Hazard Detection Overview</h2>
                            <div className="grid grid-cols-2 gap-6">
                                {/* Total Hazards */}
                                <div className="flex flex-col items-center">
                                    <PieChart width={200} height={200}>
                                        <Pie data={dataHazardOverview} innerRadius={70} outerRadius={90} fill="#8884d8" dataKey="value">
                                            {dataHazardOverview.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                    <p className="mt-2 text-center">Hazard Overview</p>
                                </div>

                                {/* Hazard Distribution */}
                                <div className="flex flex-col items-center">
                                    <PieChart width={200} height={200}>
                                        <Pie data={dataHazardDistribution} innerRadius={70} outerRadius={90} fill="#8884d8" dataKey="value">
                                            {dataHazardDistribution.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                    <p className="mt-2 text-center">Hazard Distribution</p>
                                </div>
                            </div>
                        </div>

                        {/* Hazard Trends */}
                        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mb-10">
                            <h4 className="text-xl font-bold mb-4">Hazard Trends</h4>
                            <LineChart width={600} height={300} data={dataHazardTrends}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Line type="monotone" dataKey="hazards" stroke="#8884d8" />
                            </LineChart>
                        </div>

                        {/* Hazard Details Table */}
                        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mb-10">
                            <h4 className="text-xl font-bold mb-4">Hazard Details</h4>
                            <table className="min-w-full bg-white">
                                <thead>
                                    <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                        <th className="py-3 px-6 text-left">ID</th>
                                        <th className="py-3 px-6 text-left">Type</th>
                                        <th className="py-3 px-6 text-left">Location</th>
                                        <th className="py-3 px-6 text-left">Severity</th>
                                        <th className="py-3 px-6 text-left">Timestamp</th>
                                        <th className="py-3 px-6 text-left">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 text-sm font-light">
                                    {/* Sample row */}
                                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                                        <td className="py-3 px-6 text-left whitespace-nowrap">#H001</td>
                                        <td className="py-3 px-6 text-left">Gas Leak</td>
                                        <td className="py-3 px-6 text-left">Sector A</td>
                                        <td className="py-3 px-6 text-left">High</td>
                                        <td className="py-3 px-6 text-left">2024-09-10 14:30</td>
                                        <td className="py-3 px-6 text-left">Active</td>
                                    </tr>
                                    {/* Add more rows as needed */}
                                </tbody>
                            </table>
                        </div>

                        {/* Hazard Tracking Map */}
                        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mb-10">
                            <h4 className="text-xl font-bold mb-4">Hazard Tracking Map</h4>
                            <Map /> {/* Replace with your actual Map component */}
                        </div>

                        {/* Safety Recommendations */}
                        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mb-10">
                            <h4 className="text-xl font-bold mb-4">Safety Recommendations</h4>
                            <ul className="list-disc pl-6">
                                <li>Ensure all safety equipment is in place.</li>
                                <li>Follow evacuation procedures in case of critical hazards.</li>
                                <li>Regularly inspect and maintain machinery to prevent failures.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Chatbot />
        </div>
    );
};

export default Hazard;
