import React, { useState, useEffect } from "react";
import { Container, Grid, Card, CardContent, Typography, Table, TableHead, TableBody, TableRow, TableCell, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import Sidebar from './Sidebar';
import Topbar from "./Topbar";
// Sample Data
const equipmentData = [
  { name: "Pump A", status: "Operational", performance: 85 },
  { name: "Conveyor B", status: "Needs Maintenance", performance: 55 }
];

const predictiveData = [
  { date: "2024-09-01", prediction: 75 },
  { date: "2024-09-02", prediction: 65 }
];

const historicalData = [
  { date: "2024-08-01", value: 80 },
  { date: "2024-08-02", value: 70 }
];

const maintenanceLogs = [
  { date: "2024-09-01", task: "Replaced filter", notes: "Routine maintenance" },
  { date: "2024-08-30", task: "Lubricated bearings", notes: "Preventive maintenance" }
];

const costData = [
  { category: "Labor", amount: 2000 },
  { category: "Parts", amount: 1500 }
];

const Maintenance = () => {
  const [realTimeData, setRealTimeData] = useState(equipmentData);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Toggle Sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

  // Example of fetching data from an API
  useEffect(() => {
    // Fetch real-time data from an API or set the data
    // fetch('/api/real-time-data').then(response => response.json()).then(data => setRealTimeData(data));
  }, []);

  return (
    <div className="flex flex-col bg-gray-100 pt-32">
        {/* Sidebar */}
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />


      <div className={`flex-1 p-8 relative transition-all duration-300 ${
                    isSidebarOpen ? 'ml-64' : 'ml-0'
                }`}>

        <Topbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Container className="flex-1 p-8">
        <Grid container spacing={4}>
          {[
            {
              title: "Real-Time Equipment Monitoring",
              content: realTimeData.map((equip, index) => (
                <Typography key={index} className="text-sm text-gray-600">
                  {equip.name}: <span className={`font-medium ${equip.status === "Operational" ? "text-green-600" : "text-red-600"}`}>{equip.status}</span> (Performance: {equip.performance}%)
                </Typography>
              )),
              type: 'card',
            },
            {
              title: "Predictive Analytics",
              content: (
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={predictiveData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="prediction" stroke="#4f46e5" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              ),
              type: 'card',
            },
            {
              title: "Resolution",
              content: <Typography className="text-sm text-gray-600">Details on resolving common issues will be here.</Typography>,
              type: 'accordion',
            },
            {
              title: "Maintenance Schedules",
              content: (
                <Table className="bg-gray-50 rounded-lg">
                  <TableHead className="bg-gray-200">
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Task</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {maintenanceLogs.map((log, index) => (
                      <TableRow key={index}>
                        <TableCell>{log.date}</TableCell>
                        <TableCell>{log.task}</TableCell>
                        <TableCell>{log.notes}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ),
              type: 'card',
            },
            {
              title: "Historical Data Analysis",
              content: (
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={historicalData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#34d399" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              ),
              type: 'card',
            },
            {
              title: "Maintenance Logs",
              content: (
                <Table className="bg-gray-50 rounded-lg">
                  <TableHead className="bg-gray-200">
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Task</TableCell>
                      <TableCell>Notes</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {maintenanceLogs.map((log, index) => (
                      <TableRow key={index}>
                        <TableCell>{log.date}</TableCell>
                        <TableCell>{log.task}</TableCell>
                        <TableCell>{log.notes}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ),
              type: 'card',
            },
            {
              title: "Equipment Health Scores",
              content: (
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie dataKey="performance" data={realTimeData} cx="50%" cy="50%" outerRadius={60} fill="#4f46e5">
                      {realTimeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 0 ? "#34d399" : "#4f46e5"} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              ),
              type: 'card',
            },
            {
              title: "Visualization Tools",
              content: (
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={costData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="amount" fill="#4f46e5" />
                  </BarChart>
                </ResponsiveContainer>
              ),
              type: 'card',
            },
            {
              title: "Integration with CMMS",
              content: <Typography className="text-sm text-gray-600">Details about integration with CMMS systems.</Typography>,
              type: 'card',
            },
            {
              title: "Resource Allocation",
              content: (
                <Table className="bg-gray-50 rounded-lg">
                  <TableHead className="bg-gray-200">
                    <TableRow>
                      <TableCell>Resource</TableCell>
                      <TableCell>Allocated</TableCell>
                      <TableCell>Used</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Labor</TableCell>
                      <TableCell>50 hours</TableCell>
                      <TableCell>30 hours</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Parts</TableCell>
                      <TableCell>20 units</TableCell>
                      <TableCell>15 units</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              ),
              type: 'card',
            },
            {
              title: "Cost Analysis",
              content: (
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={costData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="amount" fill="#4f46e5" />
                  </BarChart>
                </ResponsiveContainer>
              ),
              type: 'card',
            },
          ].map((item, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              {item.type === 'card' ? (
                <Card className="shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                  <CardContent className="bg-white p-4 rounded-lg flex-1">
                    <Typography variant="h6" className="font-bold mb-4">{item.title}</Typography>
                    {item.content}
                  </CardContent>
                </Card>
              ) : (
                <Accordion className="shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                  <AccordionSummary className="bg-white p-4 rounded-lg">
                    <Typography className="font-bold">{item.title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails className="bg-gray-50 p-4 rounded-lg">
                    {item.content}
                  </AccordionDetails>
                </Accordion>
              )}
            </Grid>
          ))}
        </Grid>
      </Container>
      </div>
    </div>
  );
};

export default Maintenance;
