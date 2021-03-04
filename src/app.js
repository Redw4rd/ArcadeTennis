import gameLogic from './gameLogic.js';
import gameBoard from './drawCanvas.js';

let body = document.querySelector('body');
let board = document.createElement('game-board');

let game = new gameLogic(board);

body.prepend(game.draw());

customElements.define('game-board', gameBoard);
