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
    TextureCache = PIXI.utils.TextureCache,
    Rectangle = PIXI.Rectangle,
    Sprite = PIXI.Sprite;

let app = new Application({
  width: 512,
  height: 512,
  antialias: true,
  transparent: false,
  resolution: 1
});

document.body.appendChild(app.view);

loader
  .add("texture.json")
  .load(setup);

function setup() {
  let thingsTexture = TextureCache["things.png"];
  let treasureRectangle = new Rectangle(96, 368, 16, 16);
  thingsTexture.frame = treasureRectangle;
  treasure = new Sprite(thingsTexture);
  app.stage.addChild(treasure);

  let characterTexture = TextureCache["characters.png"];
  let explorerRectangle = new Rectangle(64, 240, 16, 16);
  characterTexture.frame = explorerRectangle;
  explorer = new Sprite(characterTexture);
  app.stage.addChild(explorer);

  let tileTexture = TextureCache["basictiles.png"];
  let dungeonRectangle = new Rectangle(96, 16, 16, 16);
  tileTexture.frame = dungeonRectangle;
  dungeon = new Sprite(tileTexture);
  app.stage.addChild(dungeon);
}

// loader
//   .add("egg.png")
//   .load(setup);

// function setup() {
//   let egg = new Sprite(resources["egg.png"].texture);

//   // egg.x = 96;
//   // egg.y = 96;
//   egg.position.set(100, 100);
//   // egg.width = 80;
//   // egg.height = 120;
//   egg.scale.set(0.5, 0.5);
//   // egg.pivot.set(32, 32);
//   // egg.anchor.x = 0.5;
//   // egg.anchor.y = 0.5;
//   egg.anchor.set(0.5, 0.5);
//   egg.rotation = 0.5;

//   app.stage.addChild(egg);
// }

// loader
//   .add("09.png")
//   .load(setup);

// function setup() {
//   let texture = TextureCache["09.png"];

//   let rectangle = new Rectangle(192, 128, 64, 64);

//   texture.ferame = rectangle;

//   let rocket = new Sprite(texture);

//   rocket.x = 32;
//   rocket.y = 32;

//   app.stage.addChild(rocket);

//   app.renderer.render(app.stage);
// }