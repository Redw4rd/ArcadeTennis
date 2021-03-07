import Ball from './ball.js';
import gameBoard from './gameBoard.js';
import Player from './player.js';
import Keyboard from './keyboardControl.js';

export default class gameLogic {

    constructor() {
        this.frameCount = 60;
        this.isRunning = false;
        this.startEvent = true;
        this.board = new gameBoard();
        this.ball = null;

        this.keyBoard = new Keyboard();
        this.playerOne = null;
        this.playerTwo = null;

        this.initialization();
        this.gameCycle();
    }

    initialization() {
        window.addEventListener('keydown', (e) => {this.keyBoard.onKeyDown(e);}, false);
        window.addEventListener('keyup', (e) => {this.keyBoard.onKeyUp(e);}, false);

        this.playerOne = new Player('Player 1', 10, this.board.width / 4);
        this.playerTwo = new Player('Player 2', this.board.width - 20, this.board.height / 4);
        this.ball = new Ball(this.board.width / 2, this.board.height / 2, this.board);
    }

    gameCycle() {
        setInterval(() => {
            this.board.clear();
            this.board.defineBoard();
            this.board.definePaddle(this.playerOne.position);
            this.board.definePaddle(this.playerTwo.position);
            this.board.defineBall(this.ball.position);
            this.playerControl();
            this.ball.update();
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

    playerControl() {
        if (this.keyBoard.isDown(this.keyBoard.p1.UP)) {this.playerOne.positionY = -10;};
        if (this.keyBoard.isDown(this.keyBoard.p1.DOWN)) {this.playerOne.positionY = 10;};
        if (this.keyBoard.isDown(this.keyBoard.p2.UP)) {this.playerTwo.positionY = -10;};
        if (this.keyBoard.isDown(this.keyBoard.p2.DOWN)) {this.playerTwo.positionY = 10;};
    }

    draw() {
        return this.board.canvas;
    }

}