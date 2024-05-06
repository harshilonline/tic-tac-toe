# Tic-Tac-Toe 

Tic-Tac-Toe Game AI


### Features: ✨

1. User-friendly UI/UX
2. Choose your own marker (X/O).
3. 1 mode - **Play against AI 🤖

### Compatibility: 🖥️ 📱
Responsive design, can be played on any device.

### Future Improvements

#### Difficulty Levels (AI): 🎚️
##### 1. Easy: 
AI randomly chooses any available spot on the board.

##### 2. Medium:
Minimax algorithm with 30% randomness. AI can choose a random spot with 30% probability.

##### 3. Impossible:
Minimax algorithm with alpha-beta pruning for optimization of minimax algorithm as it reduces the time complexity by pruning nodes in the minimax tree (abstract).
Score to a terminal state is assigned with +- depth of that state which accounts for the closness of this terminal state to the current state. Closser terminal states means faster winning move.

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/harshilonline/tic-tac-toe.git
    ```

2. Navigate to the project directory:
    ```bash
    cd tic-tac-toe
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Start the application:
    ```bash
    npm start
    ```

5. Open your web browser and visit `http://localhost:3000` to play the Tic-Tac-Toe game.

Note: Make sure you have npm installed on your machine before proceeding with the installation.