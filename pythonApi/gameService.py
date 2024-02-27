from flask import Flask, request, jsonify
from flask_cors import CORS
import random


app = Flask(__name__)
CORS(app)  # Enable CORS for all routes in the app

possible_game_moves = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock']

possible_game_results = {
    ('Rock', 'Paper'): 'You LOSE !',
    ('Rock', 'Scissors'): 'You WIN !',
    ('Rock', 'Lizard'): 'You WIN !',
    ('Rock', 'Spock'): 'You LOSE !',

    ('Paper', 'Rock'): 'You WIN !',
    ('Paper', 'Scissors'): 'You LOSE !',
    ('Paper', 'Lizard'): 'You LOSE !',
    ('Paper', 'Spock'): 'You WIN !',

    ('Scissors', 'Rock'): 'You LOSE !',
    ('Scissors', 'Paper'): 'You WIN !',
    ('Scissors', 'Lizard'): 'You WIN !',
    ('Scissors', 'Spock'): 'You LOSE !',

    ('Lizard', 'Rock'): 'You LOSE !',
    ('Lizard', 'Paper'): 'You WIN !',
    ('Lizard', 'Scissors'): 'You LOSE !',
    ('Lizard', 'Spock'): 'You WIN !',

    ('Spock', 'Rock'): 'You WIN !',
    ('Spock', 'Paper'): 'You LOSE !',
    ('Spock', 'Scissors'): 'You WIN !',
    ('Spock', 'Lizard'): 'You LOSE !',
}

@app.route('/play', methods=['POST'])
def play():
    # Receive player's move from the UI service
    player_move = request.json.get('move')
    
    computer_move = get_computer_move()

    print("computer_move element:", computer_move)
    print("player_move element:", player_move)
    
    # Determine the winner based on player's move and computer's move
    game_result = determine_winner(player_move, computer_move)
    
    return jsonify({'result': game_result})

def get_computer_move():
    # response = requests.post(THIRD_PARTY_URL) what should be used here, but for simplicity i'm just gonna use random
    random_index = random.randint(0, len(possible_game_moves) - 1)
    return possible_game_moves[random_index]

def determine_winner(player_move, computer_move):
    # If player's move is the same as computer's move, it's a tie
    if player_move == computer_move:
        return "It's a tie!"
    return possible_game_results.get((player_move, computer_move), 'Invalid moves!')

if __name__ == '__main__':
    app.run(debug=True, port=5001)