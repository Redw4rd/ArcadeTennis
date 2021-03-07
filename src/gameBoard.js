export default class gameBoard {

    constructor() {
        this.width = window.innerWidth - 30;
        this.height = window.innerHeight - 30;
        this.canvas = null;
        this.ctx = null;
        this.init();
    }

    init() {
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.setAttribute('id', 'tennisGame');
        this.canvas.setAttribute('width', this.width);
        this.canvas.setAttribute('height', this.height);
    }

    defineBoard() {
        // Define background
        this.ctx.fillStyle = '#000000';
        this.ctx.fillRect(0, 0, this.width, this.height);

        // Define bisector
        this.ctx.strokeStyle = '#ffffff';
        this.ctx.beginPath();
        this.ctx.setLineDash([5, 15]);
        this.ctx.moveTo(this.width / 2, 0);
        this.ctx.lineTo(this.width / 2, this.height);
        this.ctx.stroke();
        this.ctx.closePath();
    }

    /**
     * @param {{ x: number; y: number; }} pos
     */
    definePaddle(pos) {
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fillRect(pos.x, pos.y, 10, 200);
    }

    defineBall(pos) {
        this.ctx.fillStyle = '#FF0000';
        this.ctx.beginPath();
        this.ctx.arc(pos.x, pos.y, 7, 0, Math.PI*2);
        this.ctx.closePath();
        this.ctx.fill();
    }

    definePlayerScore(x, y, score) {
        this.ctx.font = 'bold 48px serif';
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fillText(Number(score), x, y);
    }

    gameOver(playername) {
        this.ctx.fillStyle = '#000000';
        this.ctx.fillRect(0, 0, this.width, this.height);
        this.ctx.fillStyle = '#FFFFFF';
        this.ctx.font = 'bold 48px serif';
        this.ctx.fillText(playername + ' win', this.width / 2 - 200, this.height / 2);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
}