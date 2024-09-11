import React, { useState, useEffect } from "react";
import { Container, Grid, Card, CardContent, Typography, Table, TableHead, TableBody, TableRow, TableCell, Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import Sidebar from './Sidebar';
import Topbar from "./Topbar";


// Sample Data
const riskData = [
  { name: "Risk A", level: 80 },
  { name: "Risk B", level: 60 },
  { name: "Risk C", level: 90 }
];

const riskFactorsData = [
  { factor: "Factor 1", value: 70 },
  { factor: "Factor 2", value: 55 }
];

const predictiveRiskData = [
  { date: "2024-09-01", risk: 70 },
  { date: "2024-09-02", risk: 65 }
];

const incidents = [
  { date: "2024-09-01", incident: "Incident A", impact: "High" },
  { date: "2024-08-30", incident: "Incident B", impact: "Medium" }
];

const riskScenarios = [
  { scenario: "Scenario 1", risk: 75 },
  { scenario: "Scenario 2", risk: 65 }
];

const Analyzer = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    // Toggle Sidebar
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
  const [heatmapData, setHeatmapData] = useState([]);
  const [riskScenariosData, setRiskScenariosData] = useState(riskScenarios);

  // Example of fetching data from an API
  useEffect(() => {
    // Fetch data for heatmap and scenarios
    // fetch('/api/heatmap-data').then(response => response.json()).then(data => setHeatmapData(data));
    // fetch('/api/risk-scenarios').then(response => response.json()).then(data => setRiskScenariosData(data));
  }, []);

  return (
    <div className="flex flex-col bg-gray-200 pt-32 min-h-screen">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className={`flex-1 p-8 relative transition-all duration-300 ${
                    isSidebarOpen ? 'ml-64' : 'ml-0'
                }`}>
                    <Topbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                    <Container className="flex-1 p-8">
        <Grid container spacing={4}>
          {/* Risk Dashboard */}
          <Grid item xs={12} md={6} lg={4}>
            <Card className="shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <CardContent className="bg-white p-4 rounded-lg flex-1">
                <Typography variant="h6" className="font-bold mb-4">Risk Dashboard</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie dataKey="level" data={riskData} cx="50%" cy="50%" outerRadius={80} fill="#4f46e5">
                      {riskData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === 0 ? "#ff0000" : "#4f46e5"} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>

          {/* Risk Heatmap */}
          <Grid item xs={12} md={6} lg={8}>
            <Card className="shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <CardContent className="bg-white p-4 rounded-lg flex-1">
                <Typography variant="h6" className="font-bold mb-4">Risk Heatmap</Typography>
                <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "400px", width: "100%" }}>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  {/* Add GeoJSON or other layers here */}
                </MapContainer>
              </CardContent>
            </Card>
          </Grid>

          {/* Risk Factors Analysis */}
          <Grid item xs={12} md={6} lg={4}>
            <Card className="shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <CardContent className="bg-white p-4 rounded-lg flex-1">
                <Typography variant="h6" className="font-bold mb-4">Risk Factors Analysis</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={riskFactorsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="factor" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#4f46e5" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>

          {/* Predictive Risk Analytics */}
          <Grid item xs={12} md={6} lg={4}>
            <Card className="shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <CardContent className="bg-white p-4 rounded-lg flex-1">
                <Typography variant="h6" className="font-bold mb-4">Predictive Risk Analytics</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={predictiveRiskData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="risk" stroke="#4f46e5" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>

          {/* Incident Reports */}
          <Grid item xs={12} md={6} lg={4}>
            <Card className="shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <CardContent className="bg-white p-4 rounded-lg flex-1">
                <Typography variant="h6" className="font-bold mb-4">Incident Reports</Typography>
                <Table className="bg-gray-50 rounded-lg">
                  <TableHead className="bg-gray-200">
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Incident</TableCell>
                      <TableCell>Impact</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {incidents.map((incident, index) => (
                      <TableRow key={index}>
                        <TableCell>{incident.date}</TableCell>
                        <TableCell>{incident.incident}</TableCell>
                        <TableCell>{incident.impact}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </Grid>

          {/* Interactive Risk Scenarios */}
          <Grid item xs={12} md={6} lg={4}>
            <Card className="shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <CardContent className="bg-white p-4 rounded-lg flex-1">
                <Typography variant="h6" className="font-bold mb-4">Interactive Risk Scenarios</Typography>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={riskScenariosData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="scenario" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="risk" fill="#4f46e5" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
                </div>
      
    </div>
  );
};

export default Analyzer;
