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
        this.velocity = 10;
        this.ismove = false;
        this.board = board;
    }

    set posX(x) {
        this.position.x += (x*this.velocity);
    }

    set posY(y) {
        this.position.y += (y*this.velocity);
    }

    update() {
        if (this.position.x > this.board.width) 
            this.speed.x = -this.speed.x;
        
        if (this.position.x < 0) 
            this.speed.x = -this.speed.x;

        if (this.position.y > this.board.height) 
            this.speed.y = -this.speed.y;
        
        if (this.position.y < 0) 
            this.speed.y = -this.speed.y;

        this.posX = this.speed.x;
        this.posY = this.speed.y;
    }
}