import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { Button, Card, CardHeader, CardContent, Typography, IconButton } from '@shadcn/ui'; // Assuming Shadcn UI components

// Register required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const barChartData = {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
    datasets: [
      {
        label: 'Production from 1-12 Aug, 2024',
        data: [12, 19, 3, 5, 2, 3, 12, 19, 3, 5, 2, 3],
        backgroundColor: '#4F46E5',
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const doughnutChartData = {
    labels: ['Second', 'Night', 'First'],
    datasets: [
      {
        data: [26, 32, 48],
        backgroundColor: ['#4F46E5', '#8B5CF6', '#A78BFA'],
      },
    ],
  };

  const doughnutChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  const gasConcentrationData = {
    labels: ['Methane', 'Oxygen', 'Carbon dioxide'],
    datasets: [
      {
        data: [8, 18, 2],
        backgroundColor: ['#A78BFA', '#34D399', '#FBBF24'],
      },
    ],
  };

  const lineChartData = {
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
    datasets: [
      {
        label: 'Breakdowns from 1-12 Aug, 2024',
        data: [2, 4, 3, 6, 5, 7, 2, 3, 8, 6, 5, 7],
        borderColor: '#F87171',
        backgroundColor: 'rgba(248, 113, 113, 0.5)',
        fill: true,
      },
    ],
  };

  const lineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        align: 'end',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <IconButton icon="arrow-left" className="text-gray-600 hover:text-black" />
        <Typography variant="h1" className="text-xl font-bold text-gray-800">Dashboard</Typography>
        <div className="flex items-center space-x-4">
          <img src="/assets/p.png" alt="Profile" className="w-10 h-10 rounded-full cursor-pointer" />
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Overall Production */}
        <div className="col-span-2">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <Typography variant="h2" className="text-lg font-semibold text-gray-600">Overall Production</Typography>
                <Button variant="outline" className="bg-gray-100 text-gray-800 hover:bg-gray-200">
                  View Report
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Production from 1-12 Aug, 2024</p>
              <Bar data={barChartData} options={barChartOptions} />
            </CardContent>
          </Card>
        </div>

        {/* Shift-wise Production */}
        <div className="col-span-1">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <Typography variant="h2" className="text-lg font-semibold text-gray-600">Shift-wise Production</Typography>
                <Button variant="outline" className="bg-gray-100 text-gray-800 hover:bg-gray-200">
                  View Report
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Doughnut data={doughnutChartData} options={doughnutChartOptions} />
              <div className="flex justify-between mt-2 text-sm text-gray-600">
                <span>Second: 26%</span>
                <span>Night: 32%</span>
                <span>First: 48%</span>
                <span>From 1-12 Aug, 2024</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Gas Concentrations */}
        <div className="col-span-1">
          <Card>
            <CardHeader>
              <Typography variant="h2" className="text-lg font-semibold text-gray-600">Gas Concentrations</Typography>
            </CardHeader>
            <CardContent>
              <Doughnut data={gasConcentrationData} options={doughnutChartOptions} />
              <div className="text-sm text-gray-600 mt-2">
                <p>On 12 Aug, 2024</p>
                <p>Methane: 8%</p>
                <p>Oxygen: 18%</p>
                <p>Carbon dioxide: 2%</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Alerts */}
        <div className="col-span-1">
          <Card>
            <CardHeader>
              <Typography variant="h2" className="text-lg font-semibold text-gray-600">Alerts</Typography>
            </CardHeader>
            <CardContent>
              <ul className="mt-4">
                <li className="flex items-center justify-between text-sm">
                  <span className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>Medium
                  </span>
                  <span>Today 3:35 P.M</span>
                </li>
                <li className="flex items-center justify-between text-sm mt-2">
                  <span className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>Data Entry
                  </span>
                  <span>Today 3:04 P.M</span>
                </li>
                <li className="flex items-center justify-between text-sm mt-2">
                  <span className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>Low
                  </span>
                  <span>11 Aug 7:29 P.M</span>
                </li>
                <li className="flex items-center justify-between text-sm mt-2">
                  <span className="flex items-center">
                    <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>Critical
                  </span>
                  <span>10 Aug 5:47 P.M</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Breakdowns */}
        <div className="col-span-2">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <Typography variant="h2" className="text-lg font-semibold text-gray-600">Breakdowns</Typography>
                <Button variant="outline" className="bg-gray-100 text-gray-800 hover:bg-gray-200">
                  View Report
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Line data={lineChartData} options={lineChartOptions} />
              <p className="text-gray-600 mt-2">From 1-12 Aug, 2024</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;