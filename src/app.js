import gameLogic from './gameLogic.js';

let body = document.querySelector('body');
let game = new gameLogic();

body.prepend(game.draw());