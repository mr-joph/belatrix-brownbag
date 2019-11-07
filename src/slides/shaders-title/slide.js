import Reveal from "reveal.js";

window.addEventListener("load", () => {
    var shaderTextWrapper = document.getElementById("shader-text");
    var text = new Blotter.Text("Shaders", {
        family: "Main Black",
        size: 140,
        fill: "#171717"
    });
    var material = new Blotter.ChannelSplitMaterial();
    var blotter = new Blotter(material, { texts: text });
    var scope = blotter.forText(text);
    scope.appendTo(shaderTextWrapper);

    shaderTextWrapper.onmousemove = event => {
        var rect = shaderTextWrapper.getBoundingClientRect();
        var mousePos = {
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        };
        var distx = mousePos.x - (rect.width / 2);
        var disty = mousePos.y - (rect.height / 2);
        var length = Math.sqrt(distx * distx + disty * disty);
        var offset = 0.03 + (length / rect.width) * 0.1;
        var rotation = Math.atan2(
            distx,
            disty
        );
        var degrees = (rotation * 180) / Math.PI;
        material.uniforms.uRotation.value = degrees;
        material.uniforms.uOffset.value = offset;
    }
}, false);

