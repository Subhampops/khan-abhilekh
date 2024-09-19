import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../Topbar';
import Chatbot from '../Chatbot';
import { useHistory } from 'react-router-dom';

const dummyData = [
    { date: '2024-09-12', shift: 'Morning', contractor: 'ABC Corp', production: 150, roofBolting: 2 },
    { date: '2024-09-11', shift: 'Night', contractor: 'XYZ Ltd', production: 100, roofBolting: 3 },
    // Add more rows as needed
];

const Dailyshift = () => {
    const [data, setData] = useState(dummyData);
    const [search, setSearch] = useState('');
    const [sortConfig, setSortConfig] = useState(null);
    const history = useHistory();

    // Handle sorting logic
    const sortedData = React.useMemo(() => {
        let sortableItems = [...data];
        if (sortConfig !== null) {
            sortableItems.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) return sortConfig.direction === 'ascending' ? -1 : 1;
                if (a[sortConfig.key] > b[sortConfig.key]) return sortConfig.direction === 'ascending' ? 1 : -1;
                return 0;
            });
        }
        return sortableItems;
    }, [data, sortConfig]);

    // Handle search filtering
    const filteredData = sortedData.filter(item =>
        item.date.includes(search) ||
        item.shift.toLowerCase().includes(search.toLowerCase())
    );

    // Handle click to go to detailed page
    const handleRowClick = (date) => {
        history.push(`/dailyshift/${date}`);
    };

    // Handle sorting configuration
    const handleSort = (key) => {
        let direction = 'ascending';
        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    return (
        <div className="flex h-screen relative p-10">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 transition-all duration-300">
                <Topbar />

                {/* Search bar */}
                <div className="flex justify-end p-4">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="p-2 border border-gray-300 rounded"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead>
                            <tr>
                                <th onClick={() => handleSort('date')} className="cursor-pointer">Date</th>
                                <th onClick={() => handleSort('shift')} className="cursor-pointer">Shift</th>
                                <th onClick={() => handleSort('contractor')} className="cursor-pointer">Contractor</th>
                                <th onClick={() => handleSort('production')} className="cursor-pointer">Production (T)</th>
                                <th onClick={() => handleSort('roofBolting')} className="cursor-pointer">Roof Bolting (Nos)</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((row) => (
                                <tr key={row.date} className="hover:bg-gray-100" onClick={() => handleRowClick(row.date)}>
                                    <td>{row.date}</td>
                                    <td>{row.shift}</td>
                                    <td>{row.contractor}</td>
                                    <td>{row.production}</td>
                                    <td>{row.roofBolting}</td>
                                    <td>
                                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Download Report</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <Chatbot />
            </div>
        </div>
    );
};

export default Dailyshift;
