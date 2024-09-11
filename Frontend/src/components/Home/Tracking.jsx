// Tracking.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Chatbot from './Chatbot';
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

const dataComplianceOverview = [
    { name: 'Compliant', value: 75 },
    { name: 'Non-Compliant', value: 25 }
];

const dataInspectionLogs = [
    { id: 'I001', date: '2024-09-10', inspector: 'John Doe', findings: 'Minor issues', status: 'Resolved' },
    { id: 'I002', date: '2024-09-12', inspector: 'Jane Smith', findings: 'Critical issue', status: 'Pending' }
];

const COLORS = ['#4CAF50', '#F44336'];

const Tracking = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');

    // Toggle Sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    // Handle modal
    const openModal = (content) => {
        setModalContent(content);
        setIsOpen(true);
    };
    const closeModal = () => setIsOpen(false);

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
                    <div className="flex flex-col items-center space-y-10">
                        {/* Regulatory Requirements Dashboard */}
                        <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg border border-gray-200">
                            <h2 className="text-2xl font-bold mb-4">Regulatory Requirements Dashboard</h2>
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex flex-col items-center">
                                    <PieChart width={200} height={200}>
                                        <Pie data={dataComplianceOverview} innerRadius={70} outerRadius={90} fill="#8884d8" dataKey="value">
                                            {dataComplianceOverview.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                    <p className="mt-2 text-center">Compliance Overview</p>
                                </div>
                                <button
                                    className="bg-blue-500 text-white py-2 px-4 rounded shadow-md hover:bg-blue-600"
                                    onClick={() => openModal('Regulatory Requirements')}
                                >
                                    View All
                                </button>
                            </div>
                        </div>

                        {/* Document Management */}
                        <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg border border-gray-200">
                            <h2 className="text-2xl font-bold mb-4">Document Management</h2>
                            <div className="mb-6">
                                <input type="file" className="form-input w-full border border-gray-300 rounded-md py-2 px-3" />
                                <button
                                    className="mt-2 bg-green-500 text-white py-2 px-4 rounded shadow-md hover:bg-green-600"
                                >
                                    Upload Document
                                </button>
                            </div>
                            <button
                                className="bg-blue-500 text-white py-2 px-4 rounded shadow-md hover:bg-blue-600"
                                onClick={() => openModal('Document Management')}
                            >
                                View All Documents
                            </button>
                        </div>

                        {/* Inspection and Audit Logs */}
                        <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg border border-gray-200">
                            <h2 className="text-2xl font-bold mb-4">Inspection and Audit Logs</h2>
                            <table className="min-w-full bg-white border border-gray-200">
                                <thead>
                                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                        <th className="py-3 px-6 text-left">ID</th>
                                        <th className="py-3 px-6 text-left">Date</th>
                                        <th className="py-3 px-6 text-left">Inspector</th>
                                        <th className="py-3 px-6 text-left">Findings</th>
                                        <th className="py-3 px-6 text-left">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 text-sm font-light">
                                    {dataInspectionLogs.map(log => (
                                        <tr key={log.id} className="border-b border-gray-200 hover:bg-gray-100">
                                            <td className="py-3 px-6 text-left">{log.id}</td>
                                            <td className="py-3 px-6 text-left">{log.date}</td>
                                            <td className="py-3 px-6 text-left">{log.inspector}</td>
                                            <td className="py-3 px-6 text-left">{log.findings}</td>
                                            <td className="py-3 px-6 text-left">{log.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <button
                                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded shadow-md hover:bg-blue-600"
                                onClick={() => openModal('Inspection and Audit Logs')}
                            >
                                View All Logs
                            </button>
                        </div>

                        {/* Compliance Checklists */}
                        <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg border border-gray-200">
                            <h2 className="text-2xl font-bold mb-4">Compliance Checklists</h2>
                            <ul className="list-disc pl-6 mb-6">
                                <li>Check safety equipment - <input type="checkbox" className="ml-2" /></li>
                                <li>Verify permits - <input type="checkbox" className="ml-2" /></li>
                                <li>Review training records - <input type="checkbox" className="ml-2" /></li>
                            </ul>
                            <button
                                className="bg-blue-500 text-white py-2 px-4 rounded shadow-md hover:bg-blue-600"
                                onClick={() => openModal('Compliance Checklists')}
                            >
                                View All Checklists
                            </button>
                        </div>

                        {/* Reporting and Analytics */}
                        <div className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg border border-gray-200">
                            <h2 className="text-2xl font-bold mb-4">Reporting and Analytics</h2>
                            <BarChart width={600} height={300} data={dataComplianceOverview}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="value" fill="#8884d8" />
                            </BarChart>
                            <button
                                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded shadow-md hover:bg-blue-600"
                                onClick={() => openModal('Reporting and Analytics')}
                            >
                                View All Reports
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Chatbot />

            {/* Modal for detailed views */}
            <Transition.Root show={isOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
                    <div className="flex items-center justify-center min-h-screen px-4 text-center">
                        <Dialog.Panel className="max-w-lg p-6 bg-white rounded-lg shadow-lg">
                            <Dialog.Title className="text-2xl font-bold mb-4">{modalContent}</Dialog.Title>
                            <Dialog.Description>
                                <p>Detailed information about {modalContent} will be displayed here.</p>
                            </Dialog.Description>
                            <button
                                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded shadow-md hover:bg-blue-600"
                                onClick={closeModal}
                            >
                                Close
                            </button>
                        </Dialog.Panel>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    );
};

export default Tracking;