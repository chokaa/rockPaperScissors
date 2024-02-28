In order to be able to play a game with Sheldon, you need to install Python on your local machine or use node.
For python API you need to install flask, flask_cors and requests.
After that you need to navigate to pythonApi folder and run python uiService.py and python gameService.py.

Other option is to navigate to nodeApi folder and just do npm install and npm start.

After either of options above, navigate to frontend folder and go with npm install and npm start.

After that you should be able to play a game of Rock Paper Scissors Lizard Spock against Sheldon. Have fun !

To import Docker image for nodeApi you need to have Docker installed and  navigate to nodeApi folder and run
docker build -t rock-paper-scissors-image .
docker run -d -p 5000:5000 -p 5001:5001 --name rock-paper-scissors-container rock-paper-scissors-image

This way you don't need to do npm start in nodeApi folder, only in frontend folder.
