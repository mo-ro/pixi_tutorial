window.addEventListener('load', init);

function init() {
//   var stage = new createjs.Stage("myCanvas");

//   var shape = new createjs.Shape();
//   // shape.graphics.beginFill("DarkRed");
//   shape.graphics.beginStroke("DarkRed");
//   shape.graphics.drawCircle(0, 0, 100);
//   shape.graphics.setStrokeStyle(5);
//   shape.x = 200;
//   shape.y = 200;
//   shape.rotation = 100;
//   // shape.graphics.endFill();
//   // shape.alpha = 0.5;
//   stage.addChild(shape);

//   var t = new createjs.Text("HelloWorld", "24px serif", "DarkRed");
//   // t.textAlign = "center";
//   stage.addChild(t);

//   stage.update();

  var stage = new createjs.Stage("myCanvas");

  // var container = new createjs.Container();
  // container.x = 0;
  // container.y = 0;

  // stage.addChild(container);

  // var circle1 = new createjs.Shape();
  // circle1.graphics.beginFill("DarkRed").drawCircle(0, 0, 50);
  // circle1.y = 100;

  // var circle2 = new createjs.Shape();
  // circle2.graphics.beginFill("Blue").drawCircle(0, 0, 50);
  // circle2.y = 300;


  // container.addChild(circle1);
  // container.addChild(circle2);

  // createjs.Ticker.addEventListener('tick', handleTick);
  // function handleTick() {
  //   container.x += 3;
  //   if (container.x > 960) {
  //     container.x = 0;
  //   }
  //   stage.update();
  // }
  // var container = new createjs.Container();
  // container.x = 300;
  // container.y = 300;
  // stage.addChild(container);

  // for(var i = 0; i < 10; i++) {
  //   var ball = new createjs.Shape();
  //   ball.graphics
  //     .beginFill("DarkRed")
  //     .drawCircle(0, 0, 50);

  //   ball.x = 200 * Math.sin(i * 360 / 10 * Math.PI / 180);
  //   ball.y = 200 * Math.cos(i * 360 / 10 * Math.PI / 180);

  //   container.addChild(ball);

  //   createjs.Ticker.addEventListener('tick', handleTick);

  //   function handleTick() {
  //     // container.rotation += 1;
  //     stage.update();
  //   }
  // }

  var container = new createjs.Container();
  stage.addChild(container);

  var circleRed = new createjs.Shape();
  circleRed.graphics.beginFill("DarkRed").drawCircle(40, 40, 40);

  var circleGreen = new createjs.Shape();
  circleGreen.graphics.beginFill("green").drawCircle(120, 40, 40);

  container.addChild(circleRed);
  container.addChild(circleGreen);

  circleRed.addEventListener('click', handleRedClick);
  circleGreen.addEventListener('click', handleGreenClick);

  function handleRedClick(e) {
    container.removeChild(circleRed);
    console.log(56789)
  }

  function handleGreenClick(e) {
    container.removeChild(circleGreen);
  }

  createjs.Ticker.addEventListener('tick', stage);
}