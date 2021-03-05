import gameBoard from './gameBoard.js';
import Player from './player.js';

export default class gameLogic {

    constructor() {
        this.frameCount = 60;
        this.isRunning = false;
        this.startEvent = true;
        this.board = new gameBoard();
        this.keyBindings = {
            p1: {
                up: 'w',
                down: 's'
            },
            p2: {
                up: 'ArrowUp',
                down: 'ArrowDown'
            }
        }

        this.playerOne = null;
        this.playerTwo = null;

        this.initialization();
        this.gameCycle();
    }

    initialization() {
        this.playerOne = new Player('Player 1', 10, this.board.width / 4);
        this.playerTwo = new Player('Player 2', this.board.width - 20, this.board.height / 4);
        this.keyPressHander('keydown');
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

    keyPressHander(type) {
        window.addEventListener(type, (e) => {
            e.preventDefault();
            switch(e.key) {
                case (this.keyBindings.p1.up):
                    this.playerOne.positionY = -10;
                break;
                case (this.keyBindings.p1.down):
                    this.playerOne.positionY = 10;
                break;
                case (this.keyBindings.p2.up):
                    this.playerTwo.positionY = -10;
                break;
                case (this.keyBindings.p2.down):
                    this.playerTwo.positionY = 10;
                break;
            }
        });
    }

    draw() {
        return this.board.canvas;
    }

}