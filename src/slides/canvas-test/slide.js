import * as PIXI from 'pixi.js';

window.addEventListener("load", event => {
    const slideRoot = document.getElementById("canvas-test");
    const app = new PIXI.Application();
    slideRoot.appendChild(app.view);

    const text = new PIXI.Text("Slide 2 \n Canvas test", {
        fontFamily: "Arial",
        fontSize: 24,
        fill: 0xff1010,
        align: "center"
    });

    text.anchor.x = 0.5;
    text.anchor.y = 0.5;
    text.x = app.view.width / 2;
    text.y = app.view.height / 2;
    app.stage.addChild(text);

    // console.log("canvas test");
    // let canvas = document.getElementById("canvas-test");
    // let ctx = canvas.getContext("2d");
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    // ctx.fillStyle = "blue";
    // ctx.fillRect(0, 0, canvas.width, canvas.height);

});