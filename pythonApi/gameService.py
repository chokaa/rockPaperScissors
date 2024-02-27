from flask import Flask, request, jsonify
from flask_cors import CORS
import random
from constants import possible_game_moves, possible_game_results

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes in the app

@app.route('/play', methods=['POST'])
def play():
    # Receive player's action from the UI service
    player_action = request.json.get('player')
    player_move = possible_game_moves[player_action]
    computer_action = get_computer_action()
    computer_move = possible_game_moves[computer_action]
    # Determine the winner based on player's move and computer's move
    game_result = determine_winner(player_move, computer_move)
    return jsonify({'result': game_result, 'player': player_action, 'computer': computer_action})

@app.route('/choices', methods=['GET'])
def get_choices():
    return jsonify(possible_game_moves)

@app.route('/choice', methods=['GET'])
def get_choice():
    computer_action = get_computer_action
    return jsonify({ 'id': computer_action, 'name': possible_game_moves[computer_action]})

def get_computer_action():
    # response = requests.post(THIRD_PARTY_URL) what should be used here, but for simplicity i'm just gonna use random
    random_index = random.randint(0, len(possible_game_moves) - 1)
    return random_index

def determine_winner(player_move, computer_move):
    # If player's move is the same as computer's move, it's a tie
    if player_move == computer_move:
        return "It's a tie!"
    return possible_game_results.get((player_move, computer_move), 'Invalid moves!')

if __name__ == '__main__':
    app.run(debug=True, port=5001)