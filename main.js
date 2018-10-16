let app = new PIXI.Application({
  width: 256,
  height: 256,
  antialias: true,
});

app.renderer.backgroundColor = 0x333333;
app.renderer.autoResize = true;
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.resize(window.innerWidth, window.innerHeight);

document.body.appendChild(app.view);