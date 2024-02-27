const express = require('express');
const cors = require('cors');
const axios = require('axios');
const { GAME_SERVICE_URL } = require('./constants');

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for all routes in the app

app.post('/play', async (req, res) => {
    try {
        // Receive player's move from the request
        const { player } = req.body;

        // JSON payload to send to the game service
        const payload = { player };

        // Make a POST request to the game service
        const response = await axios.post(GAME_SERVICE_URL, payload);

        // Check if the request was successful
        if (response.status === 200) {
            const result = response.data;
            res.json(result);
        } else {
            // Log error
            console.error(`Error: HTTP ${response.status} - ${response.statusText}`);
            res.sendStatus(response.status);
        }
    } catch (error) {
        console.error(`Error: ${error.message}`);
        res.sendStatus(500);
    }
});

const startUiService = () => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = { startUiService };