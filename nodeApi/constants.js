possibleGameMoves = {
    1: "Rock",
    2: "Paper",
    3: "Scissors",
    4: "Lizard",
    5: "Spock"
};

const possibleGameResults = {
    'Rock-Paper': 'You LOSE !',
    'Rock-Scissors': 'You WIN !',
    'Rock-Lizard': 'You WIN !',
    'Rock-Spock': 'You LOSE !',
  
    'Paper-Rock': 'You WIN !',
    'Paper-Scissors': 'You LOSE !',
    'Paper-Lizard': 'You LOSE !',
    'Paper-Spock': 'You WIN !',
  
    'Scissors-Rock': 'You LOSE !',
    'Scissors-Paper': 'You WIN !',
    'Scissors-Lizard': 'You WIN !',
    'Scissors-Spock': 'You LOSE !',
  
    'Lizard-Rock': 'You LOSE !',
    'Lizard-Paper': 'You WIN !',
    'Lizard-Scissors': 'You LOSE !',
    'Lizard-Spock': 'You WIN !',
  
    'Spock-Rock': 'You WIN !',
    'Spock-Paper': 'You LOSE !',
    'Spock-Scissors': 'You WIN !',
    'Spock-Lizard': 'You LOSE !',
};

GAME_SERVICE_URL = 'http://localhost:5001/play';

module.exports = {
    possibleGameMoves,
    possibleGameResults,
    GAME_SERVICE_URL
};