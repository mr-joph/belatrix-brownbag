import * as PIXI from 'pixi.js';

class Circle {
    constructor(_x = 0, _y = 0, _radius = 20, color = 0xDD0000) {
        this.graphics = new PIXI.Graphics();
        this.graphics.position = {
            x: _x,
            y: _y
        };
        this.x = _x,
            this.y = _y,
            this.radius = _radius;
        this.color = color;
        this.rotation = 0;
        this.wireframe = false;
    }

    setPos(x, y) {
        this.graphics.position.x = x;
        this.graphics.position.y = y;
        this.x = x;
        this.y = y;
    }

    draw() {
        this.graphics.rotation = this.rotation;
        this.graphics
            .lineStyle(1, 0x222222, 1)
            .beginFill(this.color, 1)
            .drawCircle(0, 0, this.radius)
            .endFill()
            .moveTo(0, 0)
            .lineTo(this.radius, 0);
    }
}

export default Circle;
