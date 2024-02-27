from flask import Flask, request, jsonify
from flask_cors import CORS
import requests

# URL of the game service endpoint
GAME_SERVICE_URL = 'http://localhost:5001/play'

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes in the app

@app.route('/play', methods=['POST'])
def play():
    # Example: Receive player's move from the request
    player_move = request.json.get('move')
    try:
        # JSON payload to send to the game service
        payload = {'move': player_move}

        # Make a POST request to the game service
        response = requests.post(GAME_SERVICE_URL, json=payload)

        # Check if the request was successful (status code 200)
        if response.status_code == 200:
            # Parse the JSON response from the game service
            result = response.json().get('result')
            return jsonify({'result': result})
        else:
            # Log or handle the error appropriately
            print(f'Error: HTTP {response.status_code} - {response.text}')
            return None
    except Exception as e:
        # Log or handle the exception appropriately
        print(f'Error: {e}')
        return None

if __name__ == '__main__':
    app.run(debug=True)