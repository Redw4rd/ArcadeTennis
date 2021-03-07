export default class Ball {
    constructor(posX, posY, board) {
        this.position = {
            x: posX,
            y: posY
        }
        this.speed = {
            x: Math.random()+1,
            y: Math.random()+1
        };
        this.velocity = 2;
        this.board = board;
    }

    set posX(x) {
        this.position.x += (x*this.velocity);
    }

    set posY(y) {
        this.position.y += (y*this.velocity);
    }

    update(player1, player2) {
        if (this.position.y > this.board.height) 
            this.speed.y = -this.speed.y;
        
        if (this.position.y < 0) 
            this.speed.y = -this.speed.y;

        this.hitPaddle(player1, player2);
        this.posX = this.speed.x;
        this.posY = this.speed.y;
    }

    newScore() {
        // Player 1 score
        if (this.position.x >= this.board.width) {
            return 'playerOne';
        }
        // Player 2 score
        if (this.position.x <= 0) {
            return 'playerTwo';
        }

        return false;
    }

    hitPaddle(player1, player2) {
        // Paddle2 hit
        if (this.position.x >= player2.position.x-7 && this.position.y >= player2.position.y && player2.position.y+210 >= this.position.y) 
        this.speed.x = -this.speed.x;
        // Paddle1 hit
        if (this.position.x <= player1.position.x+17 && this.position.y >= player1.position.y && player1.position.y+210 >= this.position.y) 
            this.speed.x = -this.speed.x;
    }
}