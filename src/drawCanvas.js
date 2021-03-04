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
    }
}