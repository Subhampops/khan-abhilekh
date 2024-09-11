// Home.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Chatbot from './Chatbot';
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

const dataAttendance = [{ name: 'Days Attended', value: 201 }, { name: 'Days Absent', value: 164 }];
const dataOvertime = [{ name: 'Overtime', value: 34 }, { name: 'Regular', value: 331 }];
const dataPerformance = [{ name: 'Excellent', value: 80 }, { name: 'Good', value: 20 }];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const Home = () => {
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
                        {/* Upper div containing profile details with graphs */}
                        <div className="w-full max-w-4xl mb-10 p-6 bg-white shadow-lg rounded-lg">
                            <div className="flex items-center">
                                <img
                                    src="/assets/p1.png"
                                    alt="profile"
                                    className="w-20 h-20 rounded-full"
                                />
                                <div className="ml-6">
                                    <h2 className="text-2xl font-bold">Manish Sharma</h2>
                                    <h3 className="text-sm text-gray-600">Shift Supervisor</h3>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-6 mt-6">
                                {/* Attendance Graph */}
                                <div>
                                    <h4 className="text-center font-bold">Attendance</h4>
                                    <PieChart width={100} height={100}>
                                        <Pie data={dataAttendance} innerRadius={30} outerRadius={50} fill="#8884d8" dataKey="value">
                                            {dataAttendance.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </div>

                                {/* Overtime Graph */}
                                <div>
                                    <h4 className="text-center font-bold">Overtime</h4>
                                    <PieChart width={100} height={100}>
                                        <Pie data={dataOvertime} innerRadius={30} outerRadius={50} fill="#8884d8" dataKey="value">
                                            {dataOvertime.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </div>

                                {/* Performance Graph */}
                                <div>
                                    <h4 className="text-center font-bold">Performance</h4>
                                    <BarChart width={100} height={100} data={dataPerformance}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="value" fill="#8884d8" />
                                    </BarChart>
                                </div>
                            </div>
                        </div>

                        {/* Shift Log and Alerts Table */}
                        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mb-10">
                            <h4 className="text-xl font-bold mb-4">Last Shift Log Details</h4>
                            <table className="min-w-full bg-white">
                                <thead>
                                    <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                        <th className="py-3 px-6 text-left">Log ID</th>
                                        <th className="py-3 px-6 text-left">Date</th>
                                        <th className="py-3 px-6 text-center">Tasks Completed</th>
                                        <th className="py-3 px-6 text-center">Issues Reported</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 text-sm font-light">
                                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                                        <td className="py-3 px-6 text-left whitespace-nowrap">#001</td>
                                        <td className="py-3 px-6 text-left">2024-09-10</td>
                                        <td className="py-3 px-6 text-center">8/10</td>
                                        <td className="py-3 px-6 text-center">2</td>
                                    </tr>
                                    {/* Add more rows as needed */}
                                </tbody>
                            </table>
                        </div>

                        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mb-10">
                            <h4 className="text-xl font-bold mb-4">Upcoming Shift - To Do</h4>
                            <table className="min-w-full bg-white">
                                <thead>
                                    <tr className="w-full bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                                        <th className="py-3 px-6 text-left">Task ID</th>
                                        <th className="py-3 px-6 text-left">Task</th>
                                        <th className="py-3 px-6 text-center">Priority</th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-600 text-sm font-light">
                                    <tr className="border-b border-gray-200 hover:bg-gray-100">
                                        <td className="py-3 px-6 text-left whitespace-nowrap">#A01</td>
                                        <td className="py-3 px-6 text-left">Inspect Machinery</td>
                                        <td className="py-3 px-6 text-center">High</td>
                                    </tr>
                                    {/* Add more rows as needed */}
                                </tbody>
                            </table>
                        </div>

                        {/* Box grid centered */}
                        <div className="grid grid-cols-2 gap-10 justify-center items-center">
                            <img
                                src="/assets/le1.png"
                                alt="box1"
                                className="w-[380px] h-[200px] rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
                            />
                            <img
                                src="/assets/le2.png"
                                alt="box2"
                                className="w-[380px] h-[200px] rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
                            />
                            <img
                                src="/assets/le3.png"
                                alt="box3"
                                className="w-[380px] h-[200px] rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
                            />
                            <img
                                src="/assets/le4.png"
                                alt="box4"
                                className="w-[380px] h-[200px] rounded-lg shadow-lg hover:scale-110 transition-transform duration-300"
                            />
                            <img
                                src="/assets/le5.png"
                                alt="box5"
                                className="w-[380px] h-[200px] rounded-lg shadow-lg mb-20 hover:scale-110 transition-transform duration-300"
                            />
                            <img
                                src="/assets/le6.png"
                                alt="box6"
                                className="w-[380px] h-[200px] rounded-lg shadow-lg mb-20 hover:scale-110 transition-transform duration-300" />
                        </div>
                    </div>
                </div>
            </div>
            <Chatbot />
        </div>
    );
};

export default Home;
