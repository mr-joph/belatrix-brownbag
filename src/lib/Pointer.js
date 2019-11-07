import * as PIXI from 'pixi.js';

class Pointer {
    constructor(x1, y1, x2, y2) {
        this.graphics = new PIXI.Graphics();
        this.opacity = 1;
        this.set(x1, y1, x2, y2);
    }

    getLength() {
        const distx = this.endPos.x - this.startPos.x;
        const disty = this.endPos.y - this.startPos.y;
        const length = Math.sqrt(distx * distx + disty * disty);

        return length;
    }

    getAngle() {
        const distx = this.endPos.x - this.startPos.x;
        const disty = this.endPos.y - this.startPos.y;
        const angle = Math.atan2(disty, distx);

        return angle;
    }

    set(x1, y1, x2, y2) {
        this.startPos = {
            x: x1, y: y1
        };
        this.endPos = {
            x: x2, y: y2
        };
        this.graphics.position = {
            x: x1,
            y: y1
        };
        this.length = this.getLength();
        this.angle = this.getAngle();
    }

    setPos(x1, y1, x2, y2) {
        this.set(x1, y1, x2, y2);
        this.draw();
    }

    draw() {
        this.graphics.clear();
        this.graphics.rotation = this.angle;
        this.graphics
            .lineStyle(1, 0xDD0000, this.opacity)
            .moveTo(0, 0)
            .lineTo(this.length, 0)
            .beginFill(0xDD0000, this.opacity)
            .drawPolygon([
                this.length, 0,
                this.length - 6, 3,
                this.length - 6, -3
            ])
            .endFill();
    }

}

export default Pointer;
