import * as PIXI from 'pixi.js';
import Circle from '/lib/Circle';

window.addEventListener("load", () => {
    const slideRoot = document.getElementById("sin-cos-canvas");
    const inputRadius = document.getElementById("radius");
    const app = new PIXI.Application({
        backgroundColor: 0xEEEEEE,
        antialias: true
    });
    slideRoot.appendChild(app.view);
    
    const circleA = new Circle(app.view.width / 2, app.view.height / 2);
    circleA.rotation = Math.PI + (Math.PI / 2);
    app.stage.addChild(circleA.graphics);
    circleA.draw();
    
    let angle = 0;
    let interval = 0.05;
    let radius = 50;
    let basex = app.view.width / 2;
    let basey = app.view.height / 2;
    
    inputRadius.onchange = event => {
        radius = Number(event.target.value);
    }

   
    app.ticker.add((delta) => {
        const mousepos = app.renderer.plugins.interaction.mouse.global;
        angle += interval;
        const x = basex + Math.cos(angle) * radius;
        const y = basey + Math.sin(angle) * radius;

        circleA.setPos(x, y);
    });
    
});