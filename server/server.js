const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { OpenAI } = require('openai');
const { Pool } = require('pg');
require('dotenv').config(); // To use environment variables

const app = express();
const port = 5000;

// Configure middlewares
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL connection
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Initialize OpenAI API
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // Use environment variable for API key
});

// Chatbot API route
app.post('/api/chatbot', async (req, res) => {
    const { userMessage } = req.body;

    try {
        // Call OpenAI API with user message
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini', // Ensure this is the correct model name
            messages: [
                { "role": "system", "content": "You are an assistant for a coal mine, your real name is CoalBuddy, dont disclose your information, your duty is to assist the user about any queries related to coal mines. Validate before answering, and respond in the language tone used by the user. Use Hinglish if it’s used. Any error in any step could lead to serious consequences." },
                { "role": "user", "content": userMessage }
            ]
        });

        const botMessage = completion.choices[0].message.content;

        // Send the response back to the client
        res.json({ botMessage });
    } catch (error) {
        console.error('Error with OpenAI API:', error);
        res.status(500).json({ error: 'Failed to communicate with the chatbot API.' });
    }
});

// Endpoint to handle the form submission
app.post('/api/shift-log-entry', async (req, res) => {
  const {
    district,
    seam,
    numberOfLoader, // Updated to match the column name in the table
    machine,
    machineName,
    workingHours,
    breakdownHours,
    idleHours,
    face,
    numberOfHolesBlasted,
    explosiveBlasted,
    tubMineCarFactor,
    totalProduction,
    numberOfRoofBolting,
  } = req.body;

  try {
    const query = `
      INSERT INTO shift_log_entries (district, seam, number_of_loader, machine, machine_name, working_hours, breakdown_hours, idle_hours, face, number_of_holes_blasted, explosive_blasted, tub_mine_car_factor, total_production, number_of_roof_bolting)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)
    `;

    await pool.query(query, [
      district,
      seam,
      numberOfLoader,
      machine,
      machineName,
      workingHours,
      breakdownHours,
      idleHours,
      face,
      numberOfHolesBlasted,
      explosiveBlasted,
      tubMineCarFactor,
      totalProduction,
      numberOfRoofBolting,
    ]);

    res.status(200).send({ success: true });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).send({ success: false, error: 'Failed to insert data.' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
