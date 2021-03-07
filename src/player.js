export default class Player {
    constructor(name = 'ply', posX = 0, posY = 0) {

        this.name = name;
        this.position = {
            x: posX,
            y: posY
        };
        this.scoreNum = 0;
    }
    /**
     * @param {any} x
     */
    set positionX(x) {
        this.position.x += x;
    }
    /**
     * @param {any} y
     */
    set positionY(y) {
        this.position.y += y;
    }

    set score(num) {
        this.scoreNum += num;
    }
}