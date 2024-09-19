// Hazard.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Chatbot from './Chatbot';
import { PieChart, Pie, Cell, Tooltip, Legend, LineChart, Line, CartesianGrid, XAxis, YAxis, BarChart, Bar, LabelList, ResponsiveContainer } from 'recharts';
import Map from '../Map';

// Sample Data for Hazard Overview and Distribution
const dataHazardOverview = [
  { name: 'Total Hazards', value: 120 },
  { name: 'Critical Hazards', value: 15 },
];
const dataHazardDistribution = [
  { name: 'Gas Leak', value: 50 },
  { name: 'Fire', value: 30 },
  { name: 'Equipment Failure', value: 20 },
];
const dataHazardTrends = [
  { month: 'Jan', hazards: 30 },
  { month: 'Feb', hazards: 40 },
  { month: 'Mar', hazards: 35 },
  // More data...
];
const dataHazardByStatus = [
  { name: 'Low', value: 40 },
  { name: 'Medium', value: 60 },
  { name: 'High', value: 20 },
];
const COLORS = ['#FF6384', '#36A2EB', '#FFCE56'];

// Combined Pie Charts: Hazard Detection Overview and Hazard Distribution (side-by-side)
const HazardOverviewAndDistribution = () => (
  <div className="flex flex-wrap justify-between mb-10 w-full max-w-7xl bg-white shadow-lg rounded-lg p-6">
    <div className="w-full md:w-1/2 flex justify-center items-center">
      {/* Hazard Detection Overview */}
      <div className="text-center">
        <h2 className="text-xl font-bold mb-4">Hazard Detection Overview</h2>
        <ResponsiveContainer width={600} height={280}>
          <PieChart>
            <Pie
              data={dataHazardOverview}
              innerRadius={70}
              outerRadius={90}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
              isAnimationActive={true}
            >
              {dataHazardOverview.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend layout="horizontal" align="center" verticalAlign="bottom" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>

    <div className="w-full md:w-1/2 flex justify-center items-center">
      {/* Hazard Distribution */}
      <div className="text-center">
        <h2 className="text-xl font-bold mb-4">Hazard Distribution</h2>
        <ResponsiveContainer width={600} height={280}>
          <PieChart>
            <Pie
              data={dataHazardDistribution}
              innerRadius={70}
              outerRadius={90}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
              isAnimationActive={true}
            >
              {dataHazardDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend layout="horizontal" align="center" verticalAlign="bottom" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

// Hazard Trends Component
const HazardTrends = () => (
  <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mb-10">
    <h4 className="text-xl font-bold mb-4 text-center">Hazard Trends</h4>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={dataHazardTrends}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="hazards" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

// Hazard by Severity - Bar Chart
const HazardSeverity = () => (
  <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mb-10">
    <h4 className="text-xl font-bold mb-4">Hazard by Severity</h4>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={dataHazardByStatus}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#FFCE56" name="Hazard Severity">
          <LabelList dataKey="value" position="top" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  </div>
);

// Main Hazard Component
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
        className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-72' : 'ml-0'} ${isSidebarOpen ? 'pl-4' : ''}`}
      >
        {/* Top Bar */}
        <Topbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <div className="pt-16">
          <div className="flex flex-col items-center">
            {/* Hazard Overview and Distribution (Side-by-Side) */}
            <HazardOverviewAndDistribution />

            {/* Hazard Trends */}
            <HazardTrends />

            {/* Hazard by Severity */}
            <HazardSeverity />

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
