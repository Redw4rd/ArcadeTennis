export default class Keyboard {
    constructor() {
        this.pressedKeys = {};
        this.p1 = {
            UP: 'w',
            DOWN: 's'
        }
        this.p2 = {
            UP: 'ArrowUp',
            DOWN: 'ArrowDown'
        }
    }

    isDown(keyCode) {
        return this.pressedKeys[keyCode];
    }

    onKeyUp(event) {
        delete this.pressedKeys[event.key];
    }

    onKeyDown(event) {
        console.log(event.key);
        this.pressedKeys[event.key] = true;
    }
}