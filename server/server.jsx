const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const OpenAI = require('openai');
const { Pool } = require('pg');

const app = express();
const port = 5000;

// Configure middlewares
app.use(cors());
app.use(bodyParser.json());

// PostgreSQL connection
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Khan Abhilekha',
  password: 'loposlopos@321',
  port: 5432,
});

// Initialize OpenAI API
const openai = new OpenAI({
    apiKey: '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', // Replace with your actual OpenAI API key
});

// Chatbot API route
app.post('/api/chatbot', async (req, res) => {
    const { userMessage } = req.body;

    try {
        // Call OpenAI API with user message
        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini', // Use the appropriate model, replace "gpt-4o-mini" with the correct one if needed
            messages: [
                { "role": "system", "content": "You are an assistant for a coal mine, your duty is to assist the user about any queries you are having related to coal mines. You have high responsibility and validate before giving an answer. Do not answer questions to which you do not know the answer. Strictly be multilingual, answer in the language tone you are given the input with. If hinglish is used answer in hinglish. Any error in any step will lead to grave losses" },
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
    prLoader,
    machine,
    machineName,
    workingHours,
    breakdownHours,
    idleHours,
    shortFiringDetails,
    face,
    roofBolting,
  } = req.body;

  try {
    const query = `
      INSERT INTO shift_log_entry (district, seam, pr_loader_number, machine, machine_name, working_hours, breakdown_hours, idle_hours, short_firing_details, face, number_of_roof_bolting)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    `;

    await pool.query(query, [
      district,
      seam,
      prLoader,
      machine,
      machineName,
      workingHours,
      breakdownHours,
      idleHours,
      shortFiringDetails,
      face,
      roofBolting,
    ]);

    res.status(200).send({ success: true });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).send({ success: false, error });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
