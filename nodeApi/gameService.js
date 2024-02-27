const express = require('express');
const cors = require('cors');
const { possibleGameMoves, possibleGameResults } = require('./constants');

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS for all routes in the app

// Route to play the game
app.post('/play', (req, res) => {
    // Receive player's action from the UI service
    const { player } = req.body;
    const playerMove = possibleGameMoves[player];
    const computerAction = getComputerAction();
    const computerMove = possibleGameMoves[computerAction];
    // Determine the winner based on player's move and computer's move
    const gameResult = determineWinner(playerMove, computerMove);
    res.json({ result: gameResult, player, computer: computerAction });
});

// Route to get available choices
app.get('/choices', (_, res) => {
    res.json(possibleGameMoves);
});

// Route to get computer's choice
app.get('/choice', (_, res) => {
    const computerAction = getComputerAction();
    res.json({ id: computerAction, name: possibleGameMoves[computerAction] });
});

// Function to get computer's action
const getComputerAction = () => {
    // Simulating computer's action with random choice
    const randomIndex = Math.floor(Math.random() * (Object.keys(possibleGameMoves).length) + 1);
    return randomIndex;
}

// Function to determine the winner
const determineWinner = (playerMove, computerMove) => {
    // If player's move is the same as computer's move, it's a tie
    if (playerMove === computerMove) {
        return "It's a tie!";
    }
    // Determine winner based on possible game results
    return possibleGameResults[`${playerMove}-${computerMove}`] || 'Invalid moves!';
}

const startGameService = () => {
    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

module.exports = { startGameService };