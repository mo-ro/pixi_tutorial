// let app = new PIXI.Application({
//   width: 256,
//   height: 256,
//   antialias: true,
// });

// app.renderer.backgroundColor = 0x333333;
// app.renderer.autoResize = true;
// app.renderer.view.style.position = "absolute";
// app.renderer.view.style.display = "block";
// app.renderer.resize(window.innerWidth, window.innerHeight);

// PIXI.loader
//   .add("egg.png")
//   .load(setup);

// function setup() {
//   let sprite = new PIXI.Sprite(
//     PIXI.loader.resources["egg.png"].texture
//   );

// app.stage.addChild(sprite);
// // sprite.visible = false;

// }


// document.body.appendChild(app.view);

let Application = PIXI.Application,
    loader = PIXI.loader,
    resources = PIXI.loader.resources,
    Sprite = PIXI.Sprite;

let app = new Application({
  width: 256,
  height: 256,
  antialias: true,
  transparent: false,
  resolution: 1
});

document.body.appendChild(app.view);

loader
  .add("egg.png")
  .load(setup);

function setup() {
  let egg = new Sprite(resources["egg.png"].texture);

  // egg.x = 96;
  // egg.y = 96;
  egg.position.set(100, 100);
  // egg.width = 80;
  // egg.height = 120;
  egg.scale.set(0.5, 0.5);
  // egg.pivot.set(32, 32);
  // egg.anchor.x = 0.5;
  // egg.anchor.y = 0.5;
  egg.anchor.set(0.5, 0.5);
  egg.rotation = 0.5;

  app.stage.addChild(egg);
}

