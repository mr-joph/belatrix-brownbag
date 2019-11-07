import * as PIXI from 'pixi.js';
import Pointer from '/lib/Pointer';
import Circle from '/lib/Circle';

window.addEventListener("load", () => {
    const slideRoot = document.getElementById("backstabbing-example");
    const app = new PIXI.Application({
        backgroundColor: 0xEEEEEE,
        antialias: true
    });
    slideRoot.appendChild(app.view);

    const midRect = new PIXI.Graphics();
    midRect
        .beginFill(0xFFFF00, 0.3)
        .drawRect(0, 0, app.view.width, app.view.height / 2)
        .endFill();
    app.stage.addChild(midRect);

    const viewField = new PIXI.Graphics();
    viewField
        .beginFill(0x00AAEE, 0.5)
        .drawPolygon([
            (app.view.width / 2) - 170, -100,
            (app.view.width / 2) + 170, -100,
            (app.view.width / 2) + 10, (app.view.height / 2),
            (app.view.width / 2) - 10, (app.view.height / 2) 
        ])
        .endFill();
    app.stage.addChild(viewField);
    
    const circleA = new Circle(app.view.width / 2, app.view.height / 2);
    circleA.color = 0xEEEEEE;
    circleA.rotation = Math.PI + (Math.PI / 2);
    app.stage.addChild(circleA.graphics);
    circleA.draw();

    const circleB = new Circle();
    circleB.color = 0xEEEEEE;
    circleB.rotation = Math.PI + (Math.PI / 2);
    app.stage.addChild(circleB.graphics);
    circleB.draw();
    
    const distPointer = new Pointer(circleA.x, circleA.y, circleB.x, circleB.y);
    distPointer.opacity = 0.7;
    app.stage.addChild(distPointer.graphics);

    const text = new PIXI.Text("Dot product: 0", {
        fontFamily: "Code",
        fontSize: 36,
        fill: 0x000000,
    });
    text.anchor.x = 0.5;
    text.anchor.y = 0.5;
    text.x = app.view.width / 2;
    text.y = app.view.height - 100;
    app.stage.addChild(text);
    
    app.ticker.add((delta) => {
        const mousepos = app.renderer.plugins.interaction.mouse.global;
        circleB.setPos(mousepos.x, mousepos.y);
        distPointer.setPos(circleA.x, circleA.y, circleB.x, circleB.y);


        // dot product
        const distx = circleB.x - circleA.x;
        const disty = circleB.y - circleA.y;
        const length = Math.sqrt(distx * distx + disty * disty);
        const nx1 = distx / length;
        const ny1 = disty / length;

        const cax = circleA.x - circleA.x;
        const cay = 1;

        const dot = (nx1 * cax) + (ny1 * cay);
        text.text = "Dot product: " + dot.toFixed(2);
    });
    
});