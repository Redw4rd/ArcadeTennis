import gameBoard from './gameBoard.js';
import Player from './player.js';

export default class gameLogic {

    constructor() {
        this.frameCount = 30;
        this.isRunning = false;
        this.startEvent = true;
        this.board = new gameBoard();

        this.playerOne = null;
        this.playerTwo = null;

        this.initialization();
        this.gameCycle();
    }

    initialization() {
        // Keypress watcher
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'Enter':
                    // TODO: Start the game
                    this.startEvent = false;
                    break;
                case ' ':
                    // TODO: Pause/Resume the game
                    this.isRunning = !this.isRunning;
                    break;
                case 'w':
                    this.playerOne.positionY = -10;
                break;
                case 's':
                    this.playerOne.positionY = 10;
                break;
                case 'ArrowUp':
                    this.playerTwo.positionY = -10;
                break;
                case 'ArrowDown':
                    this.playerTwo.positionY = 10;
                break;
            }
        });

        this.playerOne = new Player('Player 1', 10, this.board.width / 4);
        this.playerTwo = new Player('Player 2', this.board.width - 20, this.board.height / 4);
    }

    gameCycle() {
        setInterval(() => {
            this.board.clear();
            this.board.defineBoard();
            this.board.definePaddle(this.playerOne.position);
            this.board.definePaddle(this.playerTwo.position);
        }, 1000/this.frameCount);
    }

    /**
     * Game Starter setter
     * @param {boolean} value
     */
    set startGame(value) {
        this.startEvent = value;
    }
    /**
     * Pause function
     * @param {boolean} value
     */
    set pause(value) {
        this.isRunning = value;
    }

    draw() {
        return this.board.canvas;
    }

}