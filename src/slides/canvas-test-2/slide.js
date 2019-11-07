import * as PIXI from 'pixi.js';

window.addEventListener("load", event => {
    const slideRoot = document.getElementById("canvas-test-2");
    const app = new PIXI.Application({
        backgroundColor: 0x00AAFF
    });
    slideRoot.appendChild(app.view);

    const text = new PIXI.Text("Slide 3 \n Canvas test #2", {
        fontFamily: "Arial",
        fontSize: 24,
        fill: 0xFFFFFF,
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