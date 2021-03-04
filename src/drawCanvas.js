export default class gameBoard extends HTMLElement {

    constructor() {
        super();

        this.width = window.innerWidth - 30;
        this.height = window.innerHeight - 30;
        this.ctx = null;
    }

    connectedCallback() {
        this.attachShadow({mode: 'open'});

        let canvas = document.createElement('canvas');
        this.ctx = canvas.getContext('2d');
        canvas.setAttribute('id', 'tennisGame');
        canvas.setAttribute('width', this.width);
        canvas.setAttribute('height', this.height);

        this.shadowRoot.appendChild(canvas);
        this.defineBoard();
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
}