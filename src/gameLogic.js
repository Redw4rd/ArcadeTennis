export default class gameLogic {

    /**
     * Constructor
     * @param {object} canvas
     */
    constructor(canvas) {
        this.isRunning = false;
        this.startEvent = true;
        this.canvas = canvas;

        this.initialization();
    }

    initialization() {
        // Keypress watcher
        document.addEventListener('keydown', (e) => {
            console.log(e.key)
            switch(e.key) {
                case 'Enter':
                    // TODO: Start the game
                    this.startEvent = false;
                    break;
                case ' ':
                    // TODO: Pause/Resume the game
                    this.isRunning = !this.isRunning;
                    break;
            }
        }); 
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
     */
    set pause(value) {
        this.isRunning = value;
    }

    draw() {
        return this.canvas;
    }

}