import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Chatbot from './Chatbot';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import 'chartjs-adapter-date-fns';
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import './attendence.css'; 


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Home = () => {
const [isSidebarOpen, setIsSidebarOpen] = useState(false);
const [selectedFilter, setSelectedFilter] = useState('all');

// Toggle Sidebar
const toggleSidebar = () => {
setIsSidebarOpen(!isSidebarOpen);
};

// Sample performance data for the bar chart
const performanceData = {
labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
datasets: [
{
label: 'Performance',
data: [20, 30, 25, 40, 35, 50, 45, 60, 55], // Monthly data
backgroundColor: '#36A2EB',
},
],
};

const performanceOptions = {
plugins: {
title: {
display: true,
text: 'Performance Analysis',
},
},
responsive: true,
maintainAspectRatio: false,
};

// // Generate full year data for the attendance heatmap
// const generateFullYearData = () => {
// const data = [];
// for (let i = 1; i <= 366; i++) {
// const date = new Date(2024, 0, i);
// const type = ['present', 'absent', 'overtime'][Math.floor(Math.random() * 3)];
// data.push({ date: date.toISOString().split('T')[0], count: Math.floor(Math.random() * 5), type });
// }
// return data;
// };

// const attendanceData = generateFullYearData();


// Automated but consistent attendance data generation
const generateFixedAttendanceData = () => {
    const data = [];
    const types = ['present', 'absent', 'overtime']; // Predefined pattern of attendance types
  
    for (let i = 1; i <= 366; i++) {
      const date = new Date(2024, 0, i);
      const type = types[i % types.length]; // Cycle through present, absent, overtime
      const count = type === 'present' ? 1 : (type === 'absent' ? 0 : 2); // Consistent count based on type
  
      data.push({ date: date.toISOString().split('T')[0], count, type });
    }
    return data;
  };
  
  const attendanceData = generateFixedAttendanceData();


const colors = {
present: 'bg-green-500',
absent: 'bg-red-500',
overtime: 'bg-yellow-500',
};

const getClassForValue = (value) => {
    if (!value) return 'color-empty';  // Empty state
    if (value.count >= 4) return 'color-scale-1';  // Darkest green
    if (value.count === 1) return 'color-scale-1';  // Dark green
    if (value.count === 2) return 'color-scale-2';  // Medium green
    return 'color-scale-3';  // Light green
  };
  

// Filtered data based on selected filter
const filteredAttendanceData = attendanceData.filter(item => selectedFilter === 'all' || item.type === selectedFilter);

return (
<div className="flex h-screen relative p-10 bg-gray-50">
{/* Sidebar */}
<Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

{/* Main Content */}
<div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-72' : 'ml-0'} ${isSidebarOpen ? 'pl-4' : ''}`}>
{/* Top Bar */}
<Topbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

{/* Main Content */}
<div className="pt-16 flex flex-col items-center">
<div className="w-full max-w-6xl mb-10 p-6 bg-white shadow-lg rounded-lg text-center">
{/* Profile Section */}
<div className="flex flex-col items-center">
<img src="/assets/p1.png" alt="profile" className="w-20 h-20 rounded-full mb-4" />
<div>
<h2 className="text-2xl font-bold">Manish Sharma</h2>
<h3 className="text-sm text-gray-600">Shift Supervisor</h3>
</div>
</div>

{/* Attendance Heatmap */}
<div className="mt-6">
<h4 className="text-center font-bold mb-4">Attendance (Heatmap)</h4>
<CalendarHeatmap
startDate={new Date('2024-01-01')}
endDate={new Date('2024-12-31')}
values={filteredAttendanceData}
classForValue={getClassForValue}
/>
<div className="flex justify-center space-x-4 mt-4 mb-2">
<button
onClick={() => setSelectedFilter("all")}
className={`py-1 px-4 rounded-lg ${selectedFilter === "all" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
>
All
</button>
<button
onClick={() => setSelectedFilter("present")}
className={`py-1 px-4 rounded-lg ${selectedFilter === "present" ? "bg-green-500 text-white" : "bg-gray-200"}`}
>
Present
</button>
<button
onClick={() => setSelectedFilter("absent")}
className={`py-1 px-4 rounded-lg ${selectedFilter === "absent" ? "bg-red-500 text-white" : "bg-gray-200"}`}
>
Absent
</button>
<button
onClick={() => setSelectedFilter("overtime")}
className={`py-1 px-4 rounded-lg ${selectedFilter === "overtime" ? "bg-yellow-500 text-white" : "bg-gray-200"}`}
>
Overtime
</button>
</div>
</div>

{/* Performance Bar Chart */}
<div className="mt-6">
<h4 className="text-center font-bold mb-4">Performance</h4>
<div className="h-64 mx-auto">
<Bar data={performanceData} options={performanceOptions} />
</div>
</div>
</div>

{/* Last Shift Log */}
<div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mb-10 mx-auto">
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
</tbody>
</table>
</div>

{/* Upcoming Shift */}
<div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 mb-10 mx-auto">
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
</tbody>
</table>
</div>


{/* Box Grid */}
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
className="w-[380px] h-[200px] rounded-lg shadow-lg mb-20 hover:scale-110 transition-transform duration-300"
/>
</div>
</div>
<Chatbot />
</div>
</div>
);
};

export default Home;