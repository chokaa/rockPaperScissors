from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from constants import GAME_SERVICE_URL

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes in the app

@app.route('/play', methods=['POST'])
def play():
    # Receive player's move from the request
    player = request.json.get('player')
    try:
        # JSON payload to send to the game service
        payload = {'player': player}
        # Make a POST request to the game service
        response = requests.post(GAME_SERVICE_URL, json=payload)
        # Check if the request was successful
        if response.status_code == 200:
            result = response.json()
            return jsonify(result)
        else:
            # Log error
            print(f'Error: HTTP {response.status_code} - {response.text}')
            return None
    except Exception as e:
        print(f'Error: {e}')
        return None

if __name__ == '__main__':
    app.run(debug=True)